const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const FILES = ['index.html', 'shop/index.html', 'en/shop/index.html', 'fr/shop/index.html', 'de/shop/index.html'];
const LANGS = ['ar', 'en', 'fr', 'de'];

let problems = 0;

function fail(msg) {
  problems++;
  console.log('  ! ' + msg);
}

FILES.forEach(rel => {
  const file = path.join(ROOT, rel);
  console.log('\n== ' + rel + ' ==');
  const html = fs.readFileSync(file, 'utf8');

  const scripts = [...html.matchAll(/<script(?![^>]*\ssrc=)(?![^>]*type=)[^>]*>([\s\S]*?)<\/script>/g)];
  scripts.forEach((s, i) => {
    try {
      new vm.Script(s[1]);
    } catch (e) {
      fail('inline script ' + i + ': ' + e.message);
    }
  });

  const ld = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (ld) {
    try {
      JSON.parse(ld[1]);
    } catch (e) {
      fail('JSON-LD: ' + e.message);
    }
  } else {
    fail('no JSON-LD block');
  }

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
  const dupes = [...new Set(ids.filter((v, i) => ids.indexOf(v) !== i))];
  if (dupes.length) fail('duplicate ids: ' + dupes.join(', '));

  const links = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(m => m[1])
    .filter(u => !/^(https?:|#|data:|mailto:|javascript:)/.test(u));
  links.forEach(l => {
    const clean = l.split('#')[0].split('?')[0];
    if (!clean) return;
    if (!fs.existsSync(path.resolve(path.dirname(file), clean))) {
      fail('missing link: ' + l);
    }
  });

  console.log('  bytes ' + html.length + ' | inline scripts ' + scripts.length + ' | internal links ' + links.length + ' | ids ' + ids.length);
});

const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const block = indexHtml.slice(indexHtml.indexOf('const translations = {'));
let depth = 0;
let objStart = block.indexOf('{');
let objEnd = -1;
for (let i = objStart; i < block.length; i++) {
  if (block[i] === '{') depth++;
  else if (block[i] === '}') {
    depth--;
    if (depth === 0) { objEnd = i; break; }
  }
}
const sandbox = {};
vm.runInNewContext('var t = ' + block.slice(objStart, objEnd + 1) + ';', sandbox);
const usedKeys = [...new Set([...indexHtml.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]))];
console.log('\n== i18n (index.html) ==');
LANGS.forEach(lang => {
  const dict = sandbox.t[lang] || {};
  const missing = usedKeys.filter(k => !(k in dict) || !dict[k]);
  if (missing.length) fail(lang + ' missing keys: ' + missing.join(', '));
  else console.log('  ' + lang + ': all ' + usedKeys.length + ' keys present');
});

const products = JSON.parse(fs.readFileSync(path.join(ROOT, 'build', 'shop-products.json'), 'utf8'));
console.log('\n== products ==');
console.log('  ' + products.products.length + ' products');
products.products.forEach(p => {
  LANGS.forEach(l => {
    if (!p.name[l] || !p.short[l] || !p.grades[l]) fail(p.id + ' missing ' + l + ' text');
  });
  if (p.local.min !== null && p.local.max !== null && p.local.min > p.local.max) fail(p.id + ' local min > max');
  if (p.export.available && p.export.min !== null && p.export.max !== null && p.export.min > p.export.max) fail(p.id + ' export min > max');
});

console.log('\n' + (problems === 0 ? 'ALL CHECKS PASSED' : problems + ' PROBLEM(S) FOUND'));
process.exit(problems === 0 ? 0 : 1);
