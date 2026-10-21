(function () {
    const cfg = window.SOURIANA_SHOP || {};
    const body = document.body;

    const tabs = document.querySelectorAll('.market-tab');
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            body.setAttribute('data-market', tab.getAttribute('data-tab'));
            const marketSelect = document.getElementById('form-market');
            if (marketSelect) {
                const mode = tab.getAttribute('data-tab');
                marketSelect.value = mode === 'export' ? (cfg.marketExport || '') : (cfg.marketLocal || '');
            }
        });
    });

    const chips = document.querySelectorAll('.filter-chip');
    chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
            chips.forEach(function (c) { c.classList.remove('active'); });
            chip.classList.add('active');
            const cat = chip.getAttribute('data-cat');
            document.querySelectorAll('.product-card').forEach(function (card) {
                const show = cat === 'all' || card.getAttribute('data-cat') === cat;
                card.style.display = show ? '' : 'none';
            });
        });
    });

    function fill(template, values) {
        return template.replace(/\{(\w+)\}/g, function (match, key) {
            return values[key] !== undefined && values[key] !== null ? values[key] : '';
        });
    }

    function openWhatsApp(message) {
        const url = 'https://wa.me/' + cfg.waNumber + '?text=' + encodeURIComponent(message);
        window.open(url, '_blank');
    }

    document.querySelectorAll('[data-wa]').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const card = btn.closest('.product-card');
            if (!card) return;
            const name = card.getAttribute('data-name') || '';
            const price = card.getAttribute('data-local-price') || '';
            const market = btn.getAttribute('data-wa');
            if (market === 'export') {
                const msg = fill(cfg.waExport || '', {
                    name: name,
                    qty: '',
                    region: ''
                });
                openWhatsApp(msg);
            } else {
                const msg = fill(cfg.waLocal || '', {
                    name: name,
                    price: price,
                    qty: ''
                });
                openWhatsApp(msg);
            }
        });
    });

    const form = document.getElementById('shop-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const data = new FormData(form);
            const get = function (key) { return (data.get(key) || '').toString().trim(); };
            const name = get('name');
            const phone = get('phone');
            if (!name || !phone) {
                window.alert(cfg.alertRequired || 'Please fill in your name and phone number');
                return;
            }
            const msg = fill(cfg.formTemplate || '', {
                name: name,
                phone: phone,
                product: get('product'),
                qty: get('qty'),
                market: get('market'),
                region: get('region'),
                notes: get('notes')
            });
            openWhatsApp(msg);
            form.reset();
        });
    }
})();
