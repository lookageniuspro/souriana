# Souriana — برومبت التطوير الشامل (Development Prompt)

> هذا الملف هو **مرجع التنفيذ الوحيد** لأي مطوّر أو مساعد ذكاء اصطناعي يعمل على المشروع.
> كل التعليمات هنا قابلة للتنفيذ مباشرة. لا تُخترع أسعار أو شهادات أو أرقام غير موجودة في `build/shop-products.json`.

---

## 1) هوية المشروع

| البند | القيمة |
|---|---|
| الاسم | سوريانا / Souriana |
| النشاط | التوريدات العامة، التوكيلات التجارية، الاستيراد والتصدير، متجر خضروات وفواكه طازجة، مجمع خدمات متكامل + محطة وقود |
| الموقع الحالي | `https://souriana.com/` (المُرحَّل لاحقًا إلى `https://souriana.com/`) |
| واتساب | `+201122324831` — `https://wa.me/201122324831` |
| البريد | `bytelaman257@gmail.com` |
| السجل التجاري | `158163` |
| البطاقة الضريبية | `192304185` |
| العنوان | طريق الظهير الصحراوي الغربي — طريق أسيوط الغربي، أسيوط، مصر |
| الفئة المستهدفة | مشترو الجملة في مصر + مستوردو الخضر والفاكهة (خليج،شرق أوسط، أوروبا) |
| اللغات | ar-EG (أساسية، RTL) + en + fr + de |

---

## 2) الوضع الحالي للمشروع (STATE)

```
Souriana/
├── index.html                ← الصفحة الرئيسية (HTML + CSS مستخرج + i18n JS مدمج)
├── assets/
│   ├── css/
│   │   ├── style.css         ← CSS مشترك (32.5KB) مستخرج من index.html
│   │   └── shop.css          ← أنماط المتجر (تبويبات، فلاتر، بطاقات، جدول أسعار، نموذج، FAQ)
│   └── js/
│       ├── site.js           ← سلوكيات مشتركة (cursor, fade-up, counters, particles, header scroll)
│       └── shop.js           ← منطق المتجر (تبويبات السوق/التصدير، الفلاتر، أزرار واتساب، النموذج)
├── build/
│   ├── shop-products.json    ← المصدر الوحيد لبيانات المنتجات والأسعار (19 منتج × 4 لغات)
│   ├── build-shop.js         ← مولّد صفحات المتجر + JSON-LD
│   └── verify.js             ← فحص ما بعد البناء (JS/JSON-LD/روابط/i18n/المنتجات)
├── shop/index.html           ← متجر السوق المصري (EGP) + تبويب التصدير + الكل
├── en/shop/index.html        ← English shop (USD export emphasis)
├── fr/shop/index.html        ← Boutique française
├── de/shop/index.html        ← Deutscher Shop
├── robots.txt                ←Allow all + Sitemap
├── sitemap.xml               ← 5 URLs مع hreflang
├── logo.jpg, Barki 1..4.jpeg
├── investment-offer.pdf, feasibility-study.pdf
└── development-prompt.md     ← هذا الملف
```

**ما تم إنجازه فعليًا (لا يُعاد):**
1. استخراج CSS من `index.html` إلى `assets/css/style.css`.
2. توحيد سلوكيات الموقع في `assets/js/site.js` (were duplicated inline).
3. بناء المتجر الرباعي اللغات بمولّد ثابت + JSON-LD (Organization / WebSite / OnlineStore / BreadcrumbList / ItemList / FAQPage / Product).
4. تبويبات: **السوق المصري (EGP/كجم)** | **التصدير الدولي (USD/كجم FOB)** | **الكل**، مع فلاتر الفئات (خضروات / ورقيات وأعشاب / فواكه وموالح).
5. زر واتساب يتغيّر نصّه ونصّه حسب التبويب؛ نموذج «اطلب عرض سعر» يُرسل عبر واتساب (لا يوجد backend، لا تُخزَّن بيانات).
6. SEO: title/description/keywords، canonical، hreflang (ar-EG/en/fr/de/x-default)، Open Graph/Twitter، `sitemap.xml` + `robots.txt`، JSON-LD في `index.html` **وفي صفحات المتجر الأربع**: Organization (+ `identifier` السجل/الضريبي، `vatID`, `taxID`, `registrationNumber`)، WebSite، OnlineStore، **LocalBusiness**، BreadcrumbList، ItemList، FAQPage، Product (19 منتجًا)، GasStation.
7. روابط المتجر في القائمة والفوتر وبطاقة خدمة «متجر سوريانا» + `nav_shop` في اللغات الأربع.
8. **اكتمال الترجمة**: كل مفاتيح `data-i18n` الـ 141 مكتملة في ar/en/fr/de (كان قسم الاستثمار ناقصًا في FR/DE وتمت إكماله).
9. إصلاح رسالة واتساب: السعر يُرسل في خانة `price` وليس `qty` (الكمية يتركها العميل).
10. الأصناف غير المتاحة للتصدير (مثل الخيار البلدي) تعرض «غير متاح للتصدير» بدل «اطلب عرض سعر».

---

## 3) قواعد العمل الإلزامية (RULES FOR ANY AI/DEV)

1. **لا تُخترع أسعار.** أسعار التصدير غير متاحة ⇒ `export.min` و `export.max` = `null` ⇒ الواجهة تعرض «اطلب عرض سعر» ولا يظهر `price` في الـ JSON-LD. لا تُكتب أي أرقام USD عشوائية.
2. **ملف البيانات واحد.** أي تعديل على المنتجات/الأسعار/الترجمات يتم في `build/shop-products.json` فقط، ثم:
   ```bash
   node build/build-shop.js
   ```
   (المولّد يكتب: `shop/index.html`, `en/shop/index.html`, `fr/shop/index.html`, `de/shop/index.html`).
3. **الرابط الأساسي ثابت في مكان واحد:** `const SITE = 'https://souriana.com';` في `build/build-shop.js` (سطر 7). عند تغيير النطاق تُحدَّث هذه القيمة + `robots.txt` + `sitemap.xml` + `canonical`/`hreflang`/JSON-LD في `index.html`.
4. **الترميز:** UTF-8 بلا BOM، أسطر جديدة LF. (BOM في ملف HTML obscures الـ `<!DOCTYPE html>` ويحمي من التحقق الآلي.)
5. **لا تُضف تعليقات برمجية جديدة** إلا عند الطلب، ولا تُغيّر التصميم/الألوان/الخطوط دون طلب صريح.
6. **التحقق بعد كل تعديل (إجباري):**
   ```bash
   node build/build-shop.js
   node build/verify.js
   ```
   `verify.js` يفحص: صياغة كل سكربت مضمّن، صلاحية JSON-LD، تكرار الـ `id`، وجود كل روابط `href/src` الداخلية على القرص، اكتمال مفاتيح i18n الـ 141 في اللغات الأربع، وسلامة بيانات المنتجات. **لا ترفع أي صفحة قبل أن يطبع `ALL CHECKS PASSED`.**
7. **لا تُحذف المحتوى العربي/الإنجليزي/الفرنسي/الألماني** — كل صفحة رئيسية تحتاج 4 لغات كاملة (مفتاح i18n لكل نص ظاهر).
8. **ممنوع** وضع أرقام تواصل أو شهادات أو أسعار خارج `build/shop-products.json` / نصوص `index.html` المعتمدة.

---

## 4) خطة ترحيل النطاق إلى `souriana.com` (12 خطوة)

> الهدف: التوحيد على `souriana.com` كاسم مختصر، وأرخص في العائد على العلامة.

| # | الخطوة | التفاصيل |
|---|---|---|
| 1 | شراء النطاق | Registrar موثوق (Cloudflare Registrar / Namecheap)، تفعيل auto-renew + WHOIS privacy. |
| 2 | DNS على Cloudflare | `A 192.0.2.1` (استبدل بـ IP الاستضافة) أو CNAME للصفحة/المستودع المضيف. TTL Auto. |
| 3 | SSL | Cloudflare → SSL/TLS → **Full (strict)** + Always Use HTTPS + HSTS بعد التأكد. |
| 4 | تسجيل الدخول على Google Search Console | أضف كل من `souriana.com` و `souriana.com` كخصائص (Domain property) وأثبت via DNS TXT. |
| 5 | Bing Webmaster Tools | استورد من GSC (Import from GSC). |
| 6 | تعديل الكود | `SITE` في `build/build-shop.js` + `index.html` (canonical, hreflang, OG, JSON-LD) + `robots.txt` + `sitemap.xml` ⇒ ثم `node build/build-shop.js`. |
| 7 | إعادة التوجيه 301 | Cloudflare → Rules → Redirect Rules: `http*://souriana.com/*` → `https://souriana.com/$1` (301، Preserve Query String ON). |
| 8 | إعادة التوجيه www | `www.souriana.com` → `https://souriana.com/` 301 + 반대 الاتجاه (Redirect www → non-www أو العكس، اختر واحدًا وثبّته). |
| 9 | أصول العلامة | LinkedIn / Facebook / Instagram / TikTok / X / YouTube: نفس الاسم `@souriana` + رابط النطاق الجديد + صورة الغلاف بالألوان Neptune. |
| 10 | Google Business Profile | إنشاء ملف الأعمال المحلية (نوع: شركة توريد/سوق جملة) باسم `Souriana` + العنوان + الهاتف `+201122324831` + رابط الموقع + صور المحل/المخزون. |
| 11 | إعادة الفهرسة | GSC → URL Inspection → Request Indexing للصفحة الرئيسية وصفحات المتجر الأربع. ثم `Sitemaps → sitemap.xml`. |
| 12 | روابط البريد | تحديث قوالب البريد/WhatsApp/العروض لتشير للنطاق الجديد، وتفعيل SPF/DKIM/DMARC. |

**مهم (SEO):** لا تستخدم301 متسلسلة (souriana.com → souriana.com → www). اربط دائمًا بالنطاق النهائي مباشرة.

---

## 5) بنية الاستضافة التقنية (مستحسنة)

- **الاستضافة:** Cloudflare Pages / Netlify / GitHub Pages (static) + Cloudflare DNS — تكلفة ≈ 0.
- **المجلدات المنشورة:** `index.html`, `shop/`, `en/`, `fr/`, `de/`, `assets/`, `robots.txt`, `sitemap.xml`, `logo.jpg`.
- **لا تُنشر** `build/` (ممنوع في `robots.txt`).
- **Cloudflare:** Cache Rule للملفات الثابتة (`/assets/*`) + Auto Minify لـ HTML/CSS/JS + Brotli + Rocket Loader **معطّل** (يكسر السكربتات المخزّنة).
- **الأداء:** صور `.webp` + `loading="lazy"` (موجود) + `width/height` (موجود) + inline critical CSS للـ above-the-fold.
- **النسخ الاحتياطي:** Git + Cloudflare snapshot يومي.

---

## 6) checklist الـ SEO (المستوى الحالي vs المطلوب)

### منجز ✅
- [x] `title` + `meta description` فريدين لكل صفحة (4 صفحات متجر + الرئيسية).
- [x] `canonical` + `hreflang` (ar-EG/en/fr/de/x-default) + `sitemap.xml` multilingual + `robots.txt`.
- [x] JSON-LD: `Organization` (+ `identifier` السجل/الضريبي، `vatID`, `taxID`, `registrationNumber`), `WebSite`, `OnlineStore`, `LocalBusiness`, `BreadcrumbList`, `ItemList`, `Product` (مع `offers` EGP و `eligibleRegion` مصر / USD و `eligibleRegion` عالمي), `FAQPage`, `GasStation`.
- [x] Open Graph + Twitter Card + `og:image`.
- [x] بنية H1/H2/H3، روابط داخلية (المتجر من الرئيسية والفوتر)، جدول أسعار قابل للـ scrape.
- [x] `alt` + `loading="lazy"` + `decoding="async"` + أبعاد للصور.
- [x] سرعة: CSS/JS خارجي بدل inline.

### متبقٍ ⏳
- [ ] **صفحة `/en/` (الرئيسية الإنجليزية) منفصلة** — الآن الرئيسية تترجم بـ JS من جهة العميل ⇒ محركات البحث ترى العربية فقط. الحل: توليد نسخة HTML ثابتة لكل لغة (نفس approach المولّد) أو على الأقل `<noscript>`/pre-render. **أولوية عالية.**
- [ ] نطاقات فرعية بدل مجلدات: `shop.souriana.com`, `en.souriana.com` (اختياري، احتياطي).
- [ ] Core Web Vitals: LCP < 2.5s (بعد compress الصور)، CLS ≈ 0، INP < 200ms.
- [ ] GA4 + Google Search Console + Bing Webmaster + Microsoft Clarity.
- [ ] روابط خارجية: 3–5 مواقع إعلانية/دليل (أسيوط، مصر) وProfile على LinkedIn/Facebook.
- [ ] اختبار Lighthouse ≥ 90 في 4 فئات.
- [ ] مراجعة `Rich Results Test` + `Schema Markup Validator` لكل صفحة.
- [ ] `Search Console` → تقرير تغطية الفهرسة + مراقبة 404.

---

## 7) صفحة المدونة (Blog) — خطة المحتوى

**لماذا:**كلمات long-tail زي «سعر تصدير الطماطم من مصر 2026» تجلب زيارات مجانية عالية النية.
**التنفيذ (ثابت، بلا WordPress):**
```
blog/index.html            ← قائمة المقالات
blog/<slug>.html           ← مقال
en/blog/index.html         ← النسخة الإنجليزية (نسخة مبسطة أولًا)
```
- كل مقال: `Article` JSON-LD (headline, datePublished, dateModified, author, image, publisher).
- sitemap.xml يُحدَّث يدويًا أو بمولّد منفصل `build/build-blog.js`.
- إعادة استخدام `assets/css/style.css` + `assets/js/site.js`.

**عناوين مقالات مقترحة (10):**
1. أسعار تصدير الطماطم من مصر 2026 — FOB ودولار/كجم.
2. تكلفة تصدير البطاطس المصرية وصلاحيةتتغير حسب (الموسم، الشحن، الجمارك).
3. GlobalGAP و SPS: ما تحتاجه لشحن الخضر من مصر إلى الخليج.
4. مقارنة أسعار الخضر في السوق المصري vs أسواق الخليج.
5. كيف تختار مورد خضر معتمد في مصر — 7 معايير.
6. Benefit من التصدير: عوائد، request export quotations, Incoterms.
7. تخزين وتبريد الخضر بعد القطف — Maintain quality to export.
8. خرائط الموانئ المصرية للتصدير — Temaيف.
9. أسعار Elektricity والتصدير بعد 2024 — تحديثات الشحن.
10. Souriana كـ Trade Gateway: خدمات التوريد والاستيراد.

> **تنبيه:** كل رقم في المقالات يجب أن يكون مصدره `build/shop-products.json` أو موثّق (اسمتقرير سوق + تاريخه)، وإلا يُكتب «السعر يختلف — اطلب عرض سعر».

---

## 8) تحديث الأسعار (السوق + التصدير)

1. حدّث `build/shop-products.json`:
   ```json
   {
     "id": "tomato",
     "name": { "ar": "طماطم", "en": "Tomato", "fr": "Tomate", "de": "Tomate" },
     "category": "veg",
     "local": { "min": 7, "max": 15, "unit": "EGP/kg" },
     "export": { "min": null, "max": null, "unit": "USD/kg", "available": true, "incoterm": "FOB" }
   }
   ```
2. عند توفر سعر التصدير: `export.min/max` بالـ USD/كجم ⇒ المولّد يولّد تلقائيًا `offers` بـ `priceCurrency: "USD"` + `eligibleRegion` عالمي، والواجهة تعرض السعر بدل «اطلب عرض سعر».
3. `node build/build-shop.js` ثم رفع `shop/` `en/shop/` `fr/shop/` `de/shop/`.
4. **نطاق التحديث:** يوصى بتحديث أسعار السوق كل أسبوع (موسمي)، وأسعار التصدير عند تغيّر الشحن أو سعر الصرف.
5. **لا** تستبدل الأسعار المحلية بأرقام عشوائية: راجع أسعار سوق الجملة (نطاق، المنشيّة، المحطات) وسجّل المصدر في comment داخل JSON.

---

## 9) التحوّل إلى متجر إلكتروني حقيقي (اختياري — لاحقًا)

| الخيار | المزايا | العيوب |
|---|---|---|
| **Shopify** | أسرع، الدفع، إدارة مخزون، تطبيقات | تكلفة شهرية + رسوم معاملة |
| **WooCommerce** | كامل التحكم، استضافة ذاتية | صيانة أعلى |
| **Payload / Medusa + Headless** | أداء وSEO ممتاز | يحتاج DevOps |
| **الحالة الحالية (Static + WhatsApp)** | تكلفة صفر، سرعة عالية، تحويل مباشر بالمحادثة | لا سلة ولا دفع ولا مخزون |

**عند التحوّل:**
- بوابة الدفع المصرية: Paymob / Fawry / InstaPay (بطاقات + محافظ).
- التصدير: Stripe / PayPal Business + Letter of Credit للموردين.
- تفعيل `Product` JSON-LD بصور حقيقية + `AggregateRating` فقط عند وجود تقييمات حقيقية.
- ربط `InventoryLevel` / `OfferAvailability` من المخزون الفعلي.

---

## 10) خطة الإطلاق (Checklist)

- [ ] `node build/build-shop.js` يعمل بلا أخطاء + فحص JS/JSON-LD + فحص الروابط.
- [ ] اختبار يدوي للصفحات الأربع: التبويبات، الفلاتر، أزرار واتساب بالنص الصحيح، النموذج.
- [ ] اختبار الموبايل (390px) RTL/LTR.
- [ ] `.htaccess`/`_redirects` اختياري للنطاقات الفرعية.
- [ ] صور `og-image` بمقاس 1200×630 + `souriana logo and og-image.jpg` موجودة.
- [ ] GSC: sitemap submitted + index request.
- [ ] Google Business Profile مُنشأ ومُتحقق.
- [ ] نشرigration plan (§4) قبل أي إطلاق للنطاق الجديد.
- [ ] مراقبة أسبوعية: GSC Coverage، CWV، أخطاء 404.

---

## 11) بيانات المنتجات (مرجع سريع)

19 منتجًا · 3 فئات: `veg` (خضروات) · `leafy` (ورقيات وأعشاب) · `fruit` (فواكه وموالح).
الأسعار محلية بالجنيه/كجم: الطماطم 7–15 · البطاطس 16–22 · البصل 15–22 · الكوسة 10–16 · الخيار البلدي 8–12 · الخيار الصوب 14–20 · الجزر 11–15 · الفاصوليا 20–25 · الباذنجان (بلدي 7–11 / رومي 5–7 / أبيض 6–9) · الفلفل (رومي 7–11 / حامي 7–10 / ألوان 30–40) · الملوخية 6–9 · السبانخ 15–20 · القلقاس 9–13 · الثوم 20–35 · البرتقال والموالح «حسب الموسم».
`cucumber-baladi` غير متاح للتصدير (محلي فقط). المصدر الكامل: `build/shop-products.json`.

---

## 12) سياق العمل الحالي (المهم للفريق الجديد)

- المشروع **موقع ثابت** بلا backend: كل الطلبات تصير عبر WhatsApp (بما فيها نموذج المتجر).
- `index.html` الرئيسية تستخدم **i18n داخل JS** (قاموس `ar/en/fr/de` داخل السكربت) ⇒ أي نص جديد يحتاج مفتاحًا في اللغات الأربع أو سيظهر بالعربية في كل اللغات (درس عملي: `flowers_card_title/desc` كان ناقصًا).
- لا يوجد `package.json` ولا اعتماديات — node v24 كافٍ. (`npm` محجوب على هذا الجهاز بسبب ExecutionPolicy؛ استخدم `node` مباشرة.)
- الملف `development-prompt.md` هو المرجع؛ حدّثه مع كل تغيير جوهري.
