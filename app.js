const english={
  "skip": "Skip to content",
  "navAbout": "About us",
  "navOffer": "Product range",
  "navWork": "Cooperation",
  "navContact": "Contact",
  "heroTag": "WHOLESALE · DISTRIBUTION",
  "heroLine1": "Appliances & electronics.",
  "heroLine2": "Wholesale supply.",
  "heroDescription": "Wholesale supply of home appliances and consumer electronics. We work with suppliers and business customers in Poland and abroad.",
  "heroCta": "Discuss cooperation",
  "heroFoot": "Rodmis sp. z o.o.",
  "discover": "About Rodmis",
  "brandsLabel": "SELECTED BRANDS IN OUR PRODUCT RANGE",
  "aboutLabel": "ABOUT RODMIS",
  "aboutTitle": "Rodmis sp. z o.o.",
  "aboutLead": "We handle business orders, from the initial enquiry through to preparing delivery.",
  "aboutText": "We tailor our offer to the models and quantities requested. Commercial terms and delivery arrangements are agreed individually.",
  "offerLabel": "PRODUCT RANGE",
  "offerTitle": "Wholesale range.",
  "offerDescription": "Send us your model list and quantities to receive an offer.",
  "cat1": "Major appliances",
  "cat1Preview": "Kitchen & home",
  "cat1Text": "Dishwashers, ovens, hobs, refrigerators, washing machines and tumble dryers.",
  "cat2": "Small appliances",
  "cat2Preview": "Everyday essentials",
  "cat2Text": "Coffee machines, kitchen appliances, vacuum cleaners and cleaning equipment.",
  "cat3": "Personal care",
  "cat3Preview": "Beauty & grooming",
  "cat3Text": "Shavers, trimmers, hair clippers, hair styling and oral care products.",
  "cat4": "Electronics & gaming",
  "cat4Preview": "Entertainment & technology",
  "cat4Text": "Games consoles, accessories and selected consumer electronics.",
  "offerCta": "Request an offer",
  "workLabel": "WORK WITH US",
  "workTitle": "Business cooperation.",
  "workDescription": "We welcome wholesale buyers and suppliers.",
  "step1Title": "Enquiry",
  "step1Text": "Send your model list and quantities, or introduce your product range.",
  "step2Title": "Commercial terms",
  "step2Text": "We confirm availability, pricing, payment and delivery dates.",
  "step3Title": "Order fulfilment",
  "step3Text": "We prepare the order, documentation and arrangements for collection or shipping.",
  "contactLabel": "CONTACT",
  "contactTitle": "Let’s discuss<br>cooperation.",
  "companyLabel": "COMPANY",
  "companySubtitle": "Wholesale & distribution of home appliances",
  "addressLabel": "ADDRESS",
  "poland": "Poland",
  "phoneLabel": "PHONE",
  "map": "View on map",
  "backTop": "Back to top",
  "categoryCta": "Ask about availability",
  "frameNote": "Availability of individual models is confirmed on request.",
  "swipeHint": "Swipe to explore the categories →"
};
const elements=[...document.querySelectorAll('[data-i18n]')];
const polish=Object.fromEntries(elements.map(el=>[el.dataset.i18n,el.innerHTML]));
function setLanguage(lang){const dict=lang==='en'?english:polish;elements.forEach(el=>{if(dict[el.dataset.i18n]!==undefined)el.innerHTML=dict[el.dataset.i18n]});document.documentElement.lang=lang;document.dispatchEvent(new Event("rodmis:languagechange"));document.title=lang==='en'?'Rodmis — Wholesale & distribution':'Rodmis — Hurt i dystrybucja AGD & RTV';document.querySelector('meta[name="description"]').content=lang==='en'?'Rodmis — wholesale supply of home appliances and consumer electronics. Warsaw, Poland. Let’s talk B2B.':'Rodmis — hurtowe dostawy sprzętu AGD, RTV i elektroniki. Warszawa, Polska. Porozmawiajmy o współpracy B2B.';document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===lang)));try{localStorage.setItem('rodmis-language',lang)}catch{};document.querySelector('.wordmark').setAttribute('aria-label',lang==='en'?'Rodmis — home':'Rodmis — strona główna');document.querySelector('.offer-foot a').href='mailto:rodmisagd@gmail.com?subject='+encodeURIComponent(lang==='en'?'B2B product enquiry':'Zapytanie ofertowe B2B');}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
try{if(localStorage.getItem('rodmis-language')==='en')setLanguage('en')}catch{}
const menuButton=document.querySelector('.menu-toggle'),mobileNav=document.querySelector('#mobile-nav');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));mobileNav.hidden=!open;});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNav.hidden){mobileNav.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.focus()}});
document.querySelector('#year').textContent=String(new Date().getFullYear());
