const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA = JSON.parse(fs.readFileSync(path.join(__dirname, 'shop-products.json'), 'utf8'));

const SITE = 'https://souriana.com';
const WA = '201122324831';
const LANG_CONFIG = {
  ar: { dir: 'rtl', htmlLang: 'ar', hreflang: 'ar-EG', folder: 'shop', body: 'lang-ar', font: 'Cairo' },
  en: { dir: 'ltr', htmlLang: 'en', hreflang: 'en', folder: 'en/shop', body: 'lang-en', font: 'Poppins' },
  fr: { dir: 'ltr', htmlLang: 'fr', hreflang: 'fr', folder: 'fr/shop', body: 'lang-fr', font: 'Poppins' },
  de: { dir: 'ltr', htmlLang: 'de', hreflang: 'de', folder: 'de/shop', body: 'lang-de', font: 'Poppins' }
};

const UI = {
  ar: {
    nav_home: 'الرئيسية', nav_services: 'خدماتنا', nav_deals: 'صفقاتنا', nav_invest: 'فرص استثمارية',
    nav_about: 'من نحن', nav_partners: 'الشركاء', nav_contact: 'اتصل بنا', nav_shop: 'المتجر',
    title: 'متجر سوريانا — خضروات وفواكه طازجة للتوريد المحلي والتصدير',
    meta_desc: 'متجر سوريانا: خضروات وفواكه طازجة بأسعار السوق المصري بالجنيه، وخدمات تصدير بـ GlobalGAP من مصر. أسعار التصدير بالدولار FOB — اطلب عرض سعر عبر واتساب.',
    keywords: 'توريد خضروات في مصر, أسعار الخضروات اليوم, تصدير طماطم من مصر, مورد بطاطس تصدير, خضروات طازجة, خضروات تصدير, Souriana shop, export fresh vegetables from Egypt, export tomatoes from Egypt FOB',
    hero_badge: 'متجر سوريانا',
    hero_title: 'خضروات طازجة بجودة تصدير — من مصر للعالم',
    hero_sub: 'توريد محلي بأسعار السوق المصرية بالجنيه، وتصدير بمعايير GlobalGAP والشهادات البيطرية والنباتية بالدولار. اختر سوقك واعرف سعر الشراء فوراً.',
    tab_local: '🇪🇬 السوق المصري', tab_export: '🌍 التصدير الدولي', tab_all: 'الكل',
    filter_all: 'كل الأصناف', filter_veg: 'خضروات', filter_leafy: 'ورقيات وأعشاب', filter_fruit: 'فواكه وموالح',
    price_local_tag: '🇪🇬 السوق المصري — ج.م/كجم', price_export_tag: '🌍 التصدير — USD/كجم (FOB)',
    seasonal: 'حسب الموسم', quote: 'اطلب عرض سعر', local_only: 'غير متاح للتصدير',
    label_grade: 'الجودة', label_weight: 'نطاق الوزن', label_moq: 'الحد الأدنى للتصدير', label_packing: 'التعبئة', label_certs: 'الشهادات',
    btn_wa_local: 'اطلب عبر واتساب (محلي)', btn_wa_export: 'اطلب عرض سعر تصدير',
    export_note: 'أسعار التصدير تُحدد حسب الموسم، حجم الطلب، وميناء الوصول — تواصل عبر واتساب لعرض سعر رسمي.',
    table_title: 'جدول الأسعار المزدوج — السوق المصري والتصدير',
    table_sub: 'الأسعار بالجنيه المصري للسوق المحلي، وبالدولار الأمريكي للتصدير وفق شرط الشحن FOB أو CIF.',
    th_item: 'الصنف', th_grade: 'الجودة', th_local: 'السوق المصري (ج.م/كجم)', th_export: 'التصدير (USD/كجم)', th_moq: 'الحد الأدنى للتصدير',
    form_title: 'نموذج طلب سريع', form_sub: 'املأ البيانات وسيتم تحويل طلبك إلى واتساب جاهز للإرسال.',
    form_name: 'الاسم', form_phone: 'رقم الهاتف', form_product: 'الصنف / الكمية', form_qty: 'الكمية (كجم / طن)',
    form_region: 'المحافظة (محلي) أو الدولة (تصدير)', form_market: 'نوع الطلب', form_notes: 'ملاحظات',
    opt_local: 'توريد محلي (ج.م)', opt_export: 'تصدير (USD)', opt_any: 'اختر الصنف…', form_submit: 'إرسال الطلب عبر واتساب',
    form_note: 'لا يتم تخزين بياناتك على الموقع — الرسالة تُفتح في واتساب فقط.',
    faq_title: 'أسئلة شائعة عن توريد وتصدير الخضروات من مصر',
    faq1_q: 'ما الفرق بين سعر السوق المصري وسعر التصدير؟',
    faq1_a: 'السعر المحلي بالجنيه المصري يشمل التوريد داخل مصر فقط. سعر التصدير بالدولار يُحدَّد وفق شرط الشحن FOB أو CIF وحسب الموسم وحجم الطلب وميناء الوصول، ولا يُربط بسعر السوق المحلي.',
    faq2_q: 'ما هي الحد الأدنى لطلب التصدير؟',
    faq2_a: 'يبدأ الحد الأدنى من حاوية 20 قدماً لبطاطس والبصل، وحاوية 40 قدماً للطماطم والبرتقال، وبالطلب للأصناف سريعة التلف مثل الخيار والكوسة والفاصوليا.',
    faq3_q: 'هل توفرون شهادات التصدير؟',
    faq3_a: 'نعم، نوفر التوريد وفق GlobalGAP مع شهادة الفحص النباتي والشهادات البيطرية والصحية، والتعبئة وسلسلة التبريد المتفق عليها.',
    faq4_q: 'هل يمكن التوريد للمطاعم والمتاجر؟',
    faq4_a: 'بالتأكيد. نوفر توريدات أسبوعية للمطاعم والمتاجر والمو Centres敵ousousales وبأسعار الجملة حسب الجودة والحجم المطلوب.',
    cta_title: 'جاهز للطلب؟', cta_text: 'أرسل طلبك عبر واتساب وسنرد عليك بسعر التوريد أو عرض سعر التصدير خلال ساعات.',
    footer_about: 'شريكك الاستراتيجي في التجارة العالمية. خضروات وفواكه طازجة، توريد وتصدير بمعايير عالمية.',
    legal_note: 'السجل التجاري 158163 — البطاقة الضريبية 192304185'
  },
  en: {
    nav_home: 'Home', nav_services: 'Services', nav_deals: 'Deals', nav_invest: 'Investment',
    nav_about: 'About', nav_partners: 'Partners', nav_contact: 'Contact', nav_shop: 'Shop',
    title: 'Souriana Shop — Fresh Vegetables & Fruits for Local Supply and Export',
    meta_desc: 'Souriana Shop: fresh vegetables and fruits at Egyptian market prices in EGP, plus GlobalGAP export services from Egypt. Export prices in USD FOB — request a quotation on WhatsApp.',
    keywords: 'buy vegetables Egypt, Egyptian vegetables prices, export tomatoes from Egypt FOB, Egypt potato exporter, fresh produce supplier, Egyptian fresh vegetables export, Souriana shop',
    hero_badge: 'Souriana Shop',
    hero_title: 'Fresh vegetables with export quality — from Egypt to the world',
    hero_sub: 'Local supply at Egyptian market prices in EGP, and export under GlobalGAP with phytosanitary and veterinary certificates priced in USD. Pick your market and see the price instantly.',
    tab_local: '🇪🇬 Egyptian Market', tab_export: '🌍 International Export', tab_all: 'All',
    filter_all: 'All items', filter_veg: 'Vegetables', filter_leafy: 'Leafy greens & herbs', filter_fruit: 'Fruits & citrus',
    price_local_tag: '🇪🇬 Egyptian Market — EGP/kg', price_export_tag: '🌍 Export — USD/kg (FOB)',
    seasonal: 'Seasonal', quote: 'Request a quotation', local_only: 'Not available for export',
    label_grade: 'Grade', label_weight: 'Weight range', label_moq: 'Minimum export order', label_packing: 'Packing', label_certs: 'Certifications',
    btn_wa_local: 'Order on WhatsApp (local)', btn_wa_export: 'Request export quotation',
    export_note: 'Export prices are set according to season, order volume and port of destination — contact us on WhatsApp for an official quotation.',
    table_title: 'Dual price list — Egyptian market and export',
    table_sub: 'Egyptian market prices in EGP, export prices in USD under FOB or CIF terms.',
    th_item: 'Item', th_grade: 'Grade', th_local: 'Egyptian market (EGP/kg)', th_export: 'Export (USD/kg)', th_moq: 'Minimum export order',
    form_title: 'Quick request form', form_sub: 'Fill in the details and your request will be prepared in WhatsApp.',
    form_name: 'Name', form_phone: 'Phone number', form_product: 'Item / quantity', form_qty: 'Quantity (kg / ton)',
    form_region: 'Governorate (local) or country (export)', form_market: 'Request type', form_notes: 'Notes',
    opt_local: 'Local supply (EGP)', opt_export: 'Export (USD)', opt_any: 'Select item…', form_submit: 'Send request via WhatsApp',
    form_note: 'Your data is not stored on this site — the message opens in WhatsApp only.',
    faq_title: 'FAQ about supplying and exporting Egyptian vegetables',
    faq1_q: 'What is the difference between the local price and the export price?',
    faq1_a: 'The local price in EGP covers supply inside Egypt only. The export price in USD is set under FOB or CIF terms and depends on season, order volume and port of destination — it is never tied to the local market price.',
    faq2_q: 'What is the minimum export order?',
    faq2_a: 'It starts from one 20-foot container for potatoes and onions, one 40-foot container for tomatoes and oranges, and is made to order for perishables such as cucumber, zucchini and green beans.',
    faq3_q: 'Do you provide export certificates?',
    faq3_a: 'Yes. We supply under GlobalGAP with phytosanitary, veterinary and health certificates, together with the agreed packing format and cold chain.',
    faq4_q: 'Do you supply restaurants and retailers?',
    faq4_a: 'Yes. We provide weekly supply for restaurants, retailers and wholesalers, at wholesale prices according to the grade and the requested size.',
    cta_title: 'Ready to order?', cta_text: 'Send your request on WhatsApp and receive your supply price or export quotation within hours.',
    footer_about: 'Your strategic partner in global trade. Fresh vegetables and fruits, supplied and exported to global standards.',
    legal_note: 'Commercial Reg. 158163 — Tax Card 192304185'
  },
  fr: {
    nav_home: 'Accueil', nav_services: 'Services', nav_deals: 'Offres', nav_invest: 'Investissement',
    nav_about: 'À propos', nav_partners: 'Partenaires', nav_contact: 'Contact', nav_shop: 'Boutique',
    title: 'Boutique Souriana — Légumes et fruits frais pour le marché local et l\'export',
    meta_desc: 'Boutique Souriana : légumes et fruits frais aux prix du marché égyptien en EGP, et services d\'export GlobalGAP depuis l\'Égypte. Prix d\'export en USD FOB — devis sur WhatsApp.',
    keywords: 'légumes Égypte, prix légumes Égypte, export tomates Égypte FOB, exporteur pommes de terre Égypte, fruits et légumes frais, export légumes frais Égypte, boutique Souriana',
    hero_badge: 'Boutique Souriana',
    hero_title: 'Des légumes frais de qualité export — de l\'Égypte pour le monde',
    hero_sub: 'Approvisionnement local aux prix du marché égyptien en EGP, et export sous GlobalGAP avec certificats phytosanitaires et vétérinaires libellés en USD. Choisissez votre marché et voyez le prix.',
    tab_local: '🇪🇬 Marché égyptien', tab_export: '🌍 Export international', tab_all: 'Tout',
    filter_all: 'Tous les produits', filter_veg: 'Légumes', filter_leafy: 'Feuilles & herbes', filter_fruit: 'Fruits & agrumes',
    price_local_tag: '🇪🇬 Marché égyptien — EGP/kg', price_export_tag: '🌍 Export — USD/kg (FOB)',
    seasonal: 'De saison', quote: 'Demander un devis', local_only: 'Non disponible à l’export',
    label_grade: 'Calibre', label_weight: 'Fourchette de poids', label_moq: 'Commande export minimum', label_packing: 'Conditionnement', label_certs: 'Certifications',
    btn_wa_local: 'Commander via WhatsApp (local)', btn_wa_export: 'Demander un devis export',
    export_note: 'Les prix d\'export sont fixés selon la saison, le volume de commande et le port de destination — contactez-nous sur WhatsApp pour un devis officiel.',
    table_title: 'Grille tarifaire double — marché égyptien et export',
    table_sub: 'Prix du marché égyptien en EGP, prix d\'export en USD sous Incoterms FOB ou CIF.',
    th_item: 'Produit', th_grade: 'Calibre', th_local: 'Marché égyptien (EGP/kg)', th_export: 'Export (USD/kg)', th_moq: 'Commande export minimum',
    form_title: 'Formulaire de demande rapide', form_sub: 'Remplissez les champs et votre demande sera préparée dans WhatsApp.',
    form_name: 'Nom', form_phone: 'Téléphone', form_product: 'Produit / quantité', form_qty: 'Quantité (kg / tonne)',
    form_region: 'Gouvernorat (local) ou pays (export)', form_market: 'Type de demande', form_notes: 'Remarques',
    opt_local: 'Approvisionnement local (EGP)', opt_export: 'Export (USD)', opt_any: 'Choisir un produit…', form_submit: 'Envoyer via WhatsApp',
    form_note: 'Vos données ne sont pas stockées sur ce site — le message s\'ouvre uniquement dans WhatsApp.',
    faq_title: 'Questions fréquentes sur l\'approvisionnement et l\'export de légumes égyptiens',
    faq1_q: 'Quelle différence entre le prix local et le prix d\'export ?',
    faq1_a: 'Le prix local en EGP concerne uniquement l\'approvisionnement en Égypte. Le prix d\'export en USD est fixé sous Incoterms FOB ou CIF selon la saison, le volume et le port de destination, sans lien avec le prix du marché local.',
    faq2_q: 'Quelle est la commande export minimum ?',
    faq2_a: 'Elle démarre à un conteneur 20 pieds pour les pommes de terre et les oignons, un conteneur 40 pieds pour les tomates et les oranges, et se fait à la demande pour les produits périssables comme le concombre, la courgette et le haricot vert.',
    faq3_q: 'Fournissez-vous les certificats d\'export ?',
    faq3_a: 'Oui. Nous livrons sous GlobalGAP avec certificat phytosanitaire, certificats vétérinaires et sanitaires, ainsi que le conditionnement et la chaîne du froid convenus.',
    faq4_q: 'Livrez-vous aux restaurants et détaillants ?',
    faq4_a: 'Oui. Nous assurons un approvisionnement hebdomadaire pour restaurants, détaillants et grossistes, aux prix de gros selon le calibre et le format demandé.',
    cta_title: 'Prêt à commander ?', cta_text: 'Envoyez votre demande sur WhatsApp et recevez votre prix de fourniture ou votre devis export en quelques heures.',
    footer_about: 'Votre partenaire stratégique dans le commerce mondial. Légumes et fruits frais, fournis et exportés selon les standards internationaux.',
    legal_note: 'Registre de commerce 158163 — Carte fiscale 192304185'
  },
  de: {
    nav_home: 'Startseite', nav_services: 'Dienste', nav_deals: 'Angebote', nav_invest: 'Investition',
    nav_about: 'Über uns', nav_partners: 'Partner', nav_contact: 'Kontakt', nav_shop: 'Shop',
    title: 'Souriana Shop — Frisches Gemüse und Obst für den lokalen Handel und den Export',
    meta_desc: 'Souriana Shop: frisches Gemüse und Obst zu ägyptischen Marktpreisen in EGP sowie GlobalGAP-Exportdienste aus Ägypten. Exportpreise in USD FOB — Angebot per WhatsApp anfordern.',
    keywords: 'Gemüse Ägypten, Gemüsepreise Ägypten, Tomaten aus Ägypten exportieren FOB, Kartoffel Exporter Ägypten, frisches Obst und Gemüse, ägyptische Gemüseexport, Souriana Shop',
    hero_badge: 'Souriana Shop',
    hero_title: 'Frisches Gemüse in Exportqualität — aus Ägypten für die Welt',
    hero_sub: 'Lokale Belieferung zu ägyptischen Marktpreisen in EGP und Export unter GlobalGAP mit phytosanitären und tierärztlichen Zertifikaten,|preis in USD. Wählen Sie Ihren Markt und sehen Sie den Preis sofort.',
    tab_local: '🇪🇬 Ägyptischer Markt', tab_export: '🌍 Internationaler Export', tab_all: 'Alle',
    filter_all: 'Alle Produkte', filter_veg: 'Gemüse', filter_leafy: 'Blattgemüse & Kräuter', filter_fruit: 'Obst & Zitrusfrüchte',
    price_local_tag: '🇪🇬 Ägyptischer Markt — EGP/kg', price_export_tag: '🌍 Export — USD/kg (FOB)',
    seasonal: 'Saisonabhängig', quote: 'Angebot anfordern', local_only: 'Nicht für den Export verfügbar',
    label_grade: 'Qualität', label_weight: 'Gewichtsspanne', label_moq: 'Mindestexportmenge', label_packing: 'Verpackung', label_certs: 'Zertifikate',
    btn_wa_local: 'Per WhatsApp bestellen (lokal)', btn_wa_export: 'Exportangebot anfordern',
    export_note: 'Exportpreise richten sich nach Saison, Bestellmenge und Zielhafen — kontaktieren Sie uns per WhatsApp für ein offizielles Angebot.',
    table_title: 'Doppelte Preisliste — ägyptischer Markt und Export',
    table_sub: 'Preise des ägyptischen Marktes in EGP, Exportpreise in USD unter FOB- oder CIF-Bedingungen.',
    th_item: 'Produkt', th_grade: 'Qualität', th_local: 'Ägyptischer Markt (EGP/kg)', th_export: 'Export (USD/kg)', th_moq: 'Mindestexportmenge',
    form_title: 'Schnellanfrage', form_sub: 'Füllen Sie die Felder aus — Ihre Anfrage wird in WhatsApp vorbereitet.',
    form_name: 'Name', form_phone: 'Telefonnummer', form_product: 'Produkt / Menge', form_qty: 'Menge (kg / Tonne)',
    form_region: 'Gouverneurat (lokal) oder Land (Export)', form_market: 'Anfrageart', form_notes: 'Anmerkungen',
    opt_local: 'Lokale Belieferung (EGP)', opt_export: 'Export (USD)', opt_any: 'Produkt wählen…', form_submit: 'Anfrage per WhatsApp senden',
    form_note: 'Ihre Daten werden nicht auf dieser Website gespeichert — die Nachricht öffnet sich nur in WhatsApp.',
    faq_title: 'Häufige Fragen zur Lieferung und zum Export ägyptischen Gemüses',
    faq1_q: 'Unterschied zwischen lokalem Preis und Exportpreis?',
    faq1_a: 'Der lokale Preis in EGP gilt nur für Lieferungen innerhalb Ägyptens. Der Exportpreis in USD wird unter FOB- oder CIF-Bedingungen je nach Saison, Bestellmenge und Zielhafen festgelegt und ist nie an den lokalen Marktpreis gekoppelt.',
    faq2_q: 'Wie hoch ist die Mindestexportmenge?',
    faq2_a: 'Sie beginnt bei einem 20-Fuß-Container für Kartoffeln und Zwiebeln, einem 40-Fuß-Container für Tomaten und Orangen und wird für schnell verderbliche Ware wie Gurke, Zucchini und Grüne Bohnen auf Bestellung gefertigt.',
    faq3_q: 'Stellen Sie Exportzertifikate bereit?',
    faq3_a: 'Ja. Wir liefern unter GlobalGAP mit Pflanzengesundheits-, tierärztlichen und Gesundheitszertifikaten sowie der vereinbarten Verpackung und Kühlkette.',
    faq4_q: 'Liefern Sie an Restaurants und Händler?',
    faq4_a: 'Ja. Wir beliefern Restaurants, Einzelhändler und Großhändler wöchentlich zu Großhandelspreisen je nach Qualität und gewünschter Größe.',
    cta_title: 'Bereit zu bestellen?', cta_text: 'Senden Sie Ihre Anfrage per WhatsApp und erhalten Sie innerhalb weniger Stunden Ihren Lieferpreis oder Exportangebot.',
    footer_about: 'Ihr strategischer Partner im Welthandel. Frisches Gemüse und Obst, geliefert und exportiert nach internationalen Standards.',
    legal_note: 'Handelsregister 158163 — Steuernummer 192304185'
  }
};

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function localPriceText(p, lang) {
  const l = p.local;
  if (l.min === null || l.max === null) return UI[lang].seasonal;
  return l.min === l.max ? String(l.min) : l.min + ' – ' + l.max;
}

function exportPriceText(p, lang) {
  const e = p.export;
  if (!e.available) return UI[lang].local_only;
  if (e.min === null || e.max === null) return UI[lang].quote;
  return e.min === e.max ? String(e.min) : e.min + ' - ' + e.max;
}

function hasExportPrice(p) {
  return p.export.available && p.export.min !== null && p.export.max !== null;
}

function buildProductSchema(products, lang, url) {
  return products.map(p => {
    const offers = [];
    if (p.local.min !== null) {
      offers.push({
        '@type': 'Offer',
        url: url + '#' + p.id,
        priceCurrency: 'EGP',
        price: String(p.local.min),
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        eligibleRegion: { '@type': 'Country', name: 'Egypt' },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'EGP',
          minPrice: String(p.local.min),
          maxPrice: String(p.local.max),
          unitCode: 'KGM',
          valueAddedTaxIncluded: false
        }
      });
    }
    if (hasExportPrice(p)) {
      offers.push({
        '@type': 'Offer',
        url: url + '#' + p.id,
        priceCurrency: 'USD',
        price: String(p.export.min),
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        eligibleRegion: { '@type': 'Place', name: 'Worldwide' },
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          minPrice: String(p.export.min),
          maxPrice: String(p.export.max),
          unitCode: 'KGM',
          valueAddedTaxIncluded: false
        }
      });
    }
    return {
      '@type': 'Product',
      '@id': url + '#product-' + p.id,
      name: p.name[lang],
      description: p.short[lang],
      category: DATA.categories[p.cat][lang],
      brand: { '@type': 'Brand', name: 'Souriana' },
      image: SITE + '/souriana logo and og-image.jpg',
      sku: 'SOU-' + p.id.toUpperCase(),
      weight: { '@type': 'QuantitativeValue', unitText: 'KGM' },
      offers: offers.length ? offers : [{ '@type': 'Offer', url: url + '#' + p.id, availability: 'https://schema.org/InStock', eligibleRegion: { '@type': 'Country', name: 'Egypt' } }]
    };
  });
}

function faqSchema(lang) {
  const u = UI[lang];
  return {
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: u.faq1_q, acceptedAnswer: { '@type': 'Answer', text: u.faq1_a } },
      { '@type': 'Question', name: u.faq2_q, acceptedAnswer: { '@type': 'Answer', text: u.faq2_a } },
      { '@type': 'Question', name: u.faq3_q, acceptedAnswer: { '@type': 'Answer', text: u.faq3_a } },
      { '@type': 'Question', name: u.faq4_q, acceptedAnswer: { '@type': 'Answer', text: u.faq4_a } }
    ]
  };
}

function navHtml(lang, root) {
  const u = UI[lang];
  const items = [
    ['nav_home', root + 'index.html'],
    ['nav_services', root + 'index.html#services'],
    ['nav_deals', root + 'index.html#deals'],
    ['nav_invest', root + 'index.html#invest'],
    ['nav_about', root + 'index.html#about'],
    ['nav_partners', root + 'index.html#partners'],
    ['nav_contact', root + 'index.html#contact'],
    ['nav_shop', null]
  ];
  const lis = items.map(([key, href]) => {
    if (key === 'nav_shop') return '                <li><a href="' + root + 'shop/index.html" class="active">' + u.nav_shop + '</a></li>';
    return '                <li><a href="' + href + '">' + u[key] + '</a></li>';
  }).join('\n');

  const langLinks = Object.keys(LANG_CONFIG).map(l => {
    const cfg = LANG_CONFIG[l];
    const target = root + cfg.folder + '/index.html';
    const sel = l === lang ? ' selected' : '';
    return '                        <option value="' + target + '"' + sel + '>' + LANG_NAMES[l] + '</option>';
  }).join('\n');

  return [
    '    <header id="header">',
    '        <nav>',
    '            <div class="logo">',
    '                <i class="ri-global-line"></i> SOURIANA',
    '            </div>',
    '            <ul class="nav-links">',
    lis,
    '            </ul>',
    '            <div style="display: flex; gap: 15px; align-items: center;">',
    '                <div class="lang-switch" style="position: relative;">',
    '                    <select id="language-selector" onchange="window.location.href=this.value" style="padding-right: 35px; appearance: none; background-image: url(\'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 16 16%22><path fill=%22%2300F0FF%22 d=%22M4.5 6L8 10l3.5-4z%22/></svg>\'); background-repeat: no-repeat; background-position: 8px center; padding-left: 10px;">',
    langLinks,
    '                    </select>',
    '                    <span style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); pointer-events: none; font-size: 1rem;" id="lang-flag">' + FLAGS[lang] + '</span>',
    '                </div>',
    '                <div class="mobile-menu-btn"><i class="ri-menu-4-line"></i></div>',
    '            </div>',
    '        </nav>',
    '    </header>'
  ].join('\n');
}

const LANG_NAMES = { ar: 'العربية', en: 'English', fr: 'Français', de: 'Deutsch' };
const FLAGS = { ar: '🇸🇦', en: '🇺🇸', fr: '🇫🇷', de: '🇩🇪' };

function productCard(p, lang) {
  const u = UI[lang];
  const localVal = localPriceText(p, lang);
  const exportVal = exportPriceText(p, lang);
  const exportState = !p.export.available ? 'local-only' : (hasExportPrice(p) ? 'priced' : 'quote');
  const note = p.export.note ? p.export.note[lang] : '';
  return [
    '        <article class="product-card glass-panel fade-up" id="' + p.id + '" data-cat="' + p.cat + '" data-id="' + p.id + '" data-name="' + esc(p.name[lang]) + '" data-local="' + esc(localVal) + '" data-export="' + esc(exportVal) + '" data-local-price="' + esc(p.local.min === null ? '' : (p.local.min === p.local.max ? String(p.local.min) : p.local.min + ' - ' + p.local.max)) + '" data-export-price="' + esc(hasExportPrice(p) ? (p.export.min === p.export.max ? String(p.export.min) : p.export.min + ' - ' + p.export.max) : '') + '" data-market-state="' + exportState + '">',
    '            <div class="pc-head">',
    '                <span class="pc-icon"><i class="' + p.icon + '"></i></span>',
    '                <div class="pc-head-text">',
    '                    <h3 class="pc-title">' + esc(p.name[lang]) + '</h3>',
    '                    <p class="pc-grade">' + esc(p.grades[lang]) + '</p>',
    '                </div>',
    '            </div>',
    '            <p class="pc-short">' + esc(p.short[lang]) + '</p>',
    '            <div class="pc-prices">',
    '                <div class="pc-price pc-price-local">',
    '                    <span class="pc-tag">' + esc(u.price_local_tag) + '</span>',
    '                    <span class="pc-value">' + esc(localVal) + '</span>',
    '                </div>',
    '                <div class="pc-price pc-price-export' + (exportState === 'local-only' ? ' is-disabled' : '') + '">',
    '                    <span class="pc-tag">' + esc(u.price_export_tag) + '</span>',
    '                    <span class="pc-value">' + esc(exportVal) + '</span>',
    '                </div>',
    '            </div>',
    '            <ul class="pc-meta">',
    '                <li><span>' + esc(u.label_weight) + '</span><b>' + esc(p.weight[lang]) + '</b></li>',
    '                <li><span>' + esc(u.label_moq) + '</span><b>' + esc(p.export.moq[lang]) + '</b></li>',
    '                <li><span>' + esc(u.label_packing) + '</span><b>' + esc(p.export.packing[lang]) + '</b></li>',
    '                <li><span>' + esc(u.label_certs) + '</span><b>' + esc(p.export.certs[lang]) + '</b></li>',
    (note ? '                <li class="pc-note"><i class="ri-time-line"></i> ' + esc(note) + '</li>' : ''),
    '            </ul>',
    '            <div class="pc-actions">',
    '                <a class="btn-wa pc-btn-local" href="#" data-wa="local" data-id="' + p.id + '"><i class="ri-whatsapp-line"></i> ' + esc(u.btn_wa_local) + '</a>',
    (p.export.available
      ? '                <a class="btn-wa btn-wa-alt pc-btn-export" href="#" data-wa="export" data-id="' + p.id + '"><i class="ri-price-tag-3-line"></i> ' + esc(u.btn_wa_export) + '</a>'
      : '                <span class="pc-local-only"><i class="ri-home-4-line"></i> ' + esc(u.label_moq) + ': ' + esc(p.export.moq[lang]) + '</span>'),
    '            </div>',
    '        </article>'
  ].filter(Boolean).join('\n');
}

function priceRow(p, lang) {
  const u = UI[lang];
  const localVal = localPriceText(p, lang);
  const exportVal = exportPriceText(p, lang);
  return [
    '                    <tr>',
    '                        <th scope="row">' + esc(p.name[lang]) + '</th>',
    '                        <td>' + esc(p.grades[lang]) + '</td>',
    '                        <td class="td-local">' + esc(localVal) + '</td>',
    '                        <td class="td-export">' + (p.export.available ? esc(exportVal) : '—') + '</td>',
    '                        <td>' + esc(p.export.moq[lang]) + '</td>',
    '                    </tr>'
  ].join('\n');
}

function buildPage(lang) {
  const u = UI[lang];
  const cfg = LANG_CONFIG[lang];
  const root = cfg.folder.includes('/') ? '../../' : '../';
  const url = SITE + '/' + cfg.folder + '/';
  const products = DATA.products;

  const alternates = Object.keys(LANG_CONFIG).map(l => {
    const c = LANG_CONFIG[l];
    return '    <link rel="alternate" hreflang="' + c.hreflang + '" href="' + SITE + '/' + c.folder + '/">';
  }).join('\n');

  const productNodes = buildProductSchema(products, lang, url);

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': SITE + '/#organization',
        name: 'شركة سوريانا للتوريدات العامة والاستيراد والتصدير والتوكيلات',
        alternateName: 'Souriana',
        url: SITE + '/',
        logo: SITE + '/logo.jpg',
        email: 'bytelaman257@gmail.com',
        telephone: '+201122324831',
        address: { '@type': 'PostalAddress', addressCountry: 'EG', addressRegion: 'أسيوط' },
        identifier: [
          { '@type': 'PropertyValue', name: 'Commercial Registration', value: '158163' },
          { '@type': 'PropertyValue', name: 'Tax Card', value: '192304185' }
        ],
        vatID: '192304185',
        taxID: '192304185',
        registrationNumber: '158163'
      },
      {
        '@type': 'WebSite',
        '@id': SITE + '/#website',
        url: SITE + '/',
        name: 'Souriana',
        publisher: { '@id': SITE + '/#organization' },
        inLanguage: lang
      },
      {
        '@type': 'OnlineStore',
        '@id': url + '#store',
        name: 'Souriana Shop',
        alternateName: 'متجر سوريانا',
        url: url,
        image: SITE + '/souriana logo and og-image.jpg',
        currenciesAccepted: 'EGP, USD',
        paymentAccepted: 'Cash, Bank transfer, L/C',
        areaServed: [{ '@type': 'Country', name: 'Egypt' }, { '@type': 'Place', name: 'Worldwide' }],
        parentOrganization: { '@id': SITE + '/#organization' },
        makesOffer: productNodes.map(p => ({ '@type': 'Offer', itemOffered: { '@id': p['@id'] } }))
      },
      {
        '@type': 'LocalBusiness',
        '@id': SITE + '/#localbusiness',
        name: 'Souriana Trading & Supply',
        alternateName: 'شركة سوريانا',
        url: SITE + '/',
        image: SITE + '/souriana logo and og-image.jpg',
        telephone: '+201122324831',
        email: 'bytelaman257@gmail.com',
        priceRange: '$$',
        currenciesAccepted: 'EGP, USD',
        paymentAccepted: 'Cash, Bank transfer, L/C',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'طريق الظهير الصحراوي الغربي - طريق أسيوط الغربي',
          addressLocality: 'أسيوط',
          addressRegion: 'أسيوط',
          addressCountry: 'EG'
        },
        areaServed: [{ '@type': 'Country', name: 'Egypt' }, { '@type': 'Place', name: 'Worldwide' }],
        openingHoursSpecification: [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
          opens: '09:00',
          closes: '18:00'
        }],
        identifier: [
          { '@type': 'PropertyValue', name: 'Commercial Registration', value: '158163' },
          { '@type': 'PropertyValue', name: 'Tax Card', value: '192304185' }
        ],
        vatID: '192304185',
        taxID: '192304185',
        registrationNumber: '158163',
        parentOrganization: { '@id': SITE + '/#organization' }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
          { '@type': 'ListItem', position: 2, name: 'Shop', item: url }
        ]
      },
      {
        '@type': 'ItemList',
        name: 'Souriana Shop — Vegetables & Fruits',
        itemListElement: products.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: url + '#' + p.id,
          name: p.name[lang]
        }))
      },
      faqSchema(lang)
    ].concat(productNodes)
  };

  const cards = products.map(p => productCard(p, lang)).join('\n');
  const rows = products.map(p => priceRow(p, lang)).join('\n');
  const productOptions = products.map(p => '                        <option value="' + esc(p.name[lang]) + '">' + esc(p.name[lang]) + '</option>').join('\n');

  const catButtons = [
    ['all', u.filter_all],
    ['veg', u.filter_veg],
    ['leafy', u.filter_leafy],
    ['fruit', u.filter_fruit]
  ].map(([id, label], i) => '                <button class="filter-chip' + (i === 0 ? ' active' : '') + '" data-cat="' + id + '">' + esc(label) + '</button>').join('\n');

  const waTemplate = lang === 'ar'
    ? 'مرحباً سوريانا، أرغب في طلب {name} — السوق المصري (ج.م/كجم). السعر الحالي: {price} ج.م/كجم. الكمية المطلوبة: {qty}. من فضلكم إرسال عرض السعر.'
    : lang === 'en'
      ? 'Hello Souriana, I would like to order {name} — Egyptian market (EGP/kg). Current price: {price} EGP/kg. Quantity required: {qty}. Please send your quotation.'
      : lang === 'fr'
        ? 'Bonjour Souriana, je souhaite commander {name} — marché égyptien (EGP/kg). Prix actuel : {price} EGP/kg. Quantité souhaitée : {qty}. Merci de m\'envoyer votre devis.'
        : 'Hallo Souriana, ich möchte {name} bestellen — ägyptischer Markt (EGP/kg). Aktueller Preis: {price} EGP/kg. Gewünschte Menge: {qty}. Bitte senden Sie mir Ihr Angebot.';

  const waExportTemplate = lang === 'ar'
    ? 'مرحباً سوريانا، أرغب في عرض سعر تصدير لـ {name} (USD/كجم — FOB). الكمية: {qty}، ميناء الوصول: {region}. من فضلكم إرسال السعر الرسمي وشروط الشحن والشهادات.'
    : lang === 'en'
      ? 'Hello Souriana, I would like an export quotation for {name} (USD/kg — FOB). Quantity: {qty}, destination port: {region}. Please send the official price, shipping terms and certificates.'
      : lang === 'fr'
        ? 'Bonjour Souriana, je souhaite un devis export pour {name} (USD/kg — FOB). Quantité : {qty}, port de destination : {region}. Merci d\'envoyer le prix officiel, les conditions d\'expédition et les certificats.'
        : 'Hallo Souriana, ich bitte um ein Exportangebot für {name} (USD/kg — FOB). Menge: {qty}, Zielhafen: {region}. Bitte senden Sie den offiziellen Preis, die Lieferbedingungen und die Zertifikate.';

  const formTemplate = lang === 'ar'
    ? 'طلب جديد من موقع سوريانا\n\nالاسم: {name}\nرقم الهاتف: {phone}\nالصنف: {product}\nالكمية: {qty}\nنوع الطلب: {market}\nالمحافظة / الدولة: {region}\nملاحظات: {notes}'
    : lang === 'en'
      ? 'New request from Souriana website\n\nName: {name}\nPhone: {phone}\nItem: {product}\nQuantity: {qty}\nRequest type: {market}\nGovernorate / Country: {region}\nNotes: {notes}'
      : lang === 'fr'
        ? 'Nouvelle demande depuis le site Souriana\n\nNom : {name}\nTéléphone : {phone}\nProduit : {product}\nQuantité : {qty}\nType de demande : {market}\nGouvernorat / Pays : {region}\nRemarques : {notes}'
        : 'Neue Anfrage über die Souriana-Website\n\nName: {name}\nTelefon: {phone}\nProdukt: {product}\nMenge: {qty}\nAnfrageart: {market}\nGouverneurat / Land: {region}\nAnmerkungen: {notes}';

  const alertRequired = lang === 'ar'
    ? 'الرجاء ملء الاسم ورقم الهاتف'
    : lang === 'en'
      ? 'Please fill in your name and phone number'
      : lang === 'fr'
        ? 'Merci de renseigner votre nom et votre numéro de téléphone'
        : 'Bitte Name und Telefonnummer ausfüllen';

  const html = `<!DOCTYPE html>
<html lang="${cfg.htmlLang}" dir="${cfg.dir}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(u.title)}</title>
    <meta name="description" content="${esc(u.meta_desc)}">
    <meta name="keywords" content="${esc(u.keywords)}">
    <meta name="author" content="شركة سوريانا للتوريدات العامة والاستيراد والتصدير والتوكيلات">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <link rel="canonical" href="${url}">
${alternates}
    <link rel="alternate" hreflang="x-default" href="${SITE}/shop/">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Souriana">
    <meta property="og:title" content="${esc(u.title)}">
    <meta property="og:description" content="${esc(u.meta_desc)}">
    <meta property="og:url" content="${url}">
    <meta property="og:locale" content="${lang === 'ar' ? 'ar_EG' : lang + '_' + lang.toUpperCase()}">
    <meta property="og:image" content="${SITE}/souriana logo and og-image.jpg">
    <meta property="og:image:alt" content="${esc(u.hero_title)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(u.title)}">
    <meta name="twitter:description" content="${esc(u.meta_desc)}">
    <meta name="twitter:image" content="${SITE}/souriana logo and og-image.jpg">
    <link rel="icon" type="image/jpeg" href="${root}logo.jpg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" href="${root}assets/css/style.css">
    <link rel="stylesheet" href="${root}assets/css/shop.css">
    <script type="application/ld+json">
${JSON.stringify(ld, null, 2)}
    </script>
</head>
<body class="${cfg.body}" data-market="local">

    <div class="cursor-dot" data-cursor-dot></div>
    <div class="cursor-outline" data-cursor-outline></div>
    <canvas id="particles-canvas"></canvas>

${navHtml(lang, root)}

    <section id="shop-hero" class="shop-hero">
        <div class="shop-hero-inner">
            <span class="shop-badge"><i class="ri-store-2-line"></i> ${esc(u.hero_badge)}</span>
            <h1>${esc(u.hero_title)}</h1>
            <p class="shop-hero-sub">${esc(u.hero_sub)}</p>
            <div class="shop-hero-actions">
                <a class="btn-primary" href="#shop-products"><i class="ri-store-line"></i> ${esc(u.nav_shop)}</a>
                <a class="btn-secondary" href="#shop-request"><i class="ri-whatsapp-line"></i> ${esc(u.btn_wa_export)}</a>
            </div>
            <div class="shop-trust">
                <span><i class="ri-global-line"></i> CR 158163</span>
                <span><i class="ri-shield-check-line"></i> GlobalGAP</span>
                <span><i class="ri-truck-line"></i> FOB / CIF</span>
                <span><i class="ri-price-tag-3-line"></i> EGP / USD</span>
            </div>
        </div>
    </section>

    <section id="shop-products" class="section">
        <div class="section-header fade-up">
            <h2>${esc(u.table_title)}</h2>
            <p style="color:var(--text-secondary); margin-top:10px;">${esc(u.table_sub)}</p>
        </div>

        <div class="shop-controls fade-up">
            <div class="market-tabs" role="tablist">
                <button class="market-tab active" data-tab="local" role="tab" aria-selected="true">${esc(u.tab_local)}</button>
                <button class="market-tab" data-tab="export" role="tab" aria-selected="false">${esc(u.tab_export)}</button>
                <button class="market-tab" data-tab="all" role="tab" aria-selected="false">${esc(u.tab_all)}</button>
            </div>
            <div class="cat-chips">
${catButtons}
            </div>
        </div>

        <p class="export-note fade-up"><i class="ri-information-line"></i> ${esc(u.export_note)}</p>

        <div class="shop-grid">
${cards}
        </div>
    </section>

    <section id="shop-table" class="section" style="background: rgba(255,255,255,0.02);">
        <div class="section-header fade-up">
            <h2>${esc(u.table_title)}</h2>
            <p style="color:var(--text-secondary); margin-top:10px;">${esc(u.table_sub)}</p>
        </div>
        <div class="table-wrap fade-up">
            <table class="price-table">
                <thead>
                    <tr>
                        <th scope="col">${esc(u.th_item)}</th>
                        <th scope="col">${esc(u.th_grade)}</th>
                        <th scope="col">${esc(u.th_local)}</th>
                        <th scope="col">${esc(u.th_export)}</th>
                        <th scope="col">${esc(u.th_moq)}</th>
                    </tr>
                </thead>
                <tbody>
${rows}
                </tbody>
            </table>
        </div>
    </section>

    <section id="shop-request" class="section">
        <div class="section-header fade-up">
            <h2>${esc(u.form_title)}</h2>
            <p style="color:var(--text-secondary); margin-top:10px;">${esc(u.form_sub)}</p>
        </div>
        <form id="shop-form" class="shop-form glass-panel fade-up" novalidate>
            <div class="form-grid">
                <label>
                    <span>${esc(u.form_name)}</span>
                    <input type="text" name="name" required>
                </label>
                <label>
                    <span>${esc(u.form_phone)}</span>
                    <input type="tel" name="phone" required>
                </label>
                <label>
                    <span>${esc(u.form_product)}</span>
                    <select name="product">
                        <option value="">${esc(u.opt_any)}</option>
${productOptions}
                    </select>
                </label>
                <label>
                    <span>${esc(u.form_qty)}</span>
                    <input type="text" name="qty" placeholder="5000 kg">
                </label>
                <label>
                    <span>${esc(u.form_market)}</span>
                    <select name="market" id="form-market">
                        <option value="${esc(u.opt_local)}">${esc(u.opt_local)}</option>
                        <option value="${esc(u.opt_export)}">${esc(u.opt_export)}</option>
                    </select>
                </label>
                <label>
                    <span>${esc(u.form_region)}</span>
                    <input type="text" name="region">
                </label>
                <label class="form-full">
                    <span>${esc(u.form_notes)}</span>
                    <textarea name="notes" rows="3"></textarea>
                </label>
            </div>
            <button type="submit" class="btn-primary form-submit"><i class="ri-whatsapp-line"></i> ${esc(u.form_submit)}</button>
            <p class="form-note">${esc(u.form_note)}</p>
        </form>
    </section>

    <section id="shop-faq" class="section" style="background: rgba(255,255,255,0.02);">
        <div class="section-header fade-up">
            <h2>${esc(u.faq_title)}</h2>
        </div>
        <div class="faq-list fade-up">
            <details>
                <summary>${esc(u.faq1_q)}</summary>
                <p>${esc(u.faq1_a)}</p>
            </details>
            <details>
                <summary>${esc(u.faq2_q)}</summary>
                <p>${esc(u.faq2_a)}</p>
            </details>
            <details>
                <summary>${esc(u.faq3_q)}</summary>
                <p>${esc(u.faq3_a)}</p>
            </details>
            <details>
                <summary>${esc(u.faq4_q)}</summary>
                <p>${esc(u.faq4_a)}</p>
            </details>
        </div>
    </section>

    <section id="shop-cta" class="section">
        <div class="cta-box glass-panel fade-up">
            <h2>${esc(u.cta_title)}</h2>
            <p>${esc(u.cta_text)}</p>
            <a class="btn-primary" href="https://wa.me/${WA}" target="_blank" rel="noopener"><i class="ri-whatsapp-line"></i> WhatsApp</a>
        </div>
    </section>

    <footer>
        <div class="footer-content">
            <div class="footer-col">
                <h4>SOURIANA</h4>
                <p style="color:var(--text-secondary); font-size:0.9rem;">${esc(u.footer_about)}</p>
            </div>
            <div class="footer-col">
                <h4>${esc(u.nav_contact)}</h4>
                <ul>
                    <li><a href="${root}index.html#services">${esc(u.nav_services)}</a></li>
                    <li><a href="${root}index.html#deals">${esc(u.nav_deals)}</a></li>
                    <li><a href="${root}index.html#invest">${esc(u.nav_invest)}</a></li>
                    <li><a href="${root}index.html#contact">${esc(u.btn_wa_local)}</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>${esc(u.nav_shop)}</h4>
                <ul>
                    <li><a href="${root}shop/index.html">${esc(u.tab_local)}</a></li>
                    <li><a href="${root}en/shop/index.html">${esc(u.tab_export)}</a></li>
                    <li><a href="${root}shop/index.html#shop-request">${esc(u.form_title)}</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2023 Souriana. All Rights Reserved.</p>
            <div class="legal-info-footer">${esc(u.legal_note)}</div>
        </div>
    </footer>

    <a href="https://wa.me/${WA}" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp" title="WhatsApp">
        <i class="ri-whatsapp-line"></i>
    </a>

    <script src="${root}assets/js/site.js"></script>
    <script>
        window.SOURIANA_SHOP = {
            waNumber: '${WA}',
            waLocal: ${JSON.stringify(waTemplate)},
            waExport: ${JSON.stringify(waExportTemplate)},
            formTemplate: ${JSON.stringify(formTemplate)},
            marketLocal: ${JSON.stringify(u.opt_local)},
            marketExport: ${JSON.stringify(u.opt_export)},
            alertRequired: ${JSON.stringify(alertRequired)}
        };
    </script>
    <script src="${root}assets/js/shop.js"></script>
</body>
</html>
`;

  return { html: html, url: url, root: root, lang: lang };
}

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

const config = {
  waTemplate: null
};

for (const lang of Object.keys(LANG_CONFIG)) {
  const page = buildPage(lang);
  const target = path.join(ROOT, LANG_CONFIG[lang].folder, 'index.html');
  writeFile(target, page.html);
  console.log('written: ' + path.relative(ROOT, target));
}
