const D = {
  uz: {
    home: "Bosh sahifa",
    contact: "Bog'lanish",
    tag: "Namuna sahifa",
    hoursH: "Ish vaqti va manzil",
    hours: "Ish vaqti: ",
    addr: "Manzil: ",
    back: "← Ortga",
    footer: "Barcha huquqlar hümoyalangan."
  },
  ru: {
    home: "Главная",
    contact: "Связаться",
    tag: "Пример страницы",
    hoursH: "Часы работы и адрес",
    hours: "Часы работы: ",
    addr: "Адрес: ",
    back: "← Назад",
    footer: "Все права защищены."
  },
  en: {
    home: "Home",
    contact: "Contact",
    tag: "Sample page",
    hoursH: "Hours and address",
    hours: "Opening hours: ",
    addr: "Address: ",
    back: "← Back",
    footer: "All rights reserved."
  }
};

// URL'dan til va biznes turini olish
const params = new URLSearchParams(location.search);
let currentLang = params.get("lang") || localStorage.getItem("sme_lang") || "uz";
const kalit = bizneslar[params.get("biznes")] ? params.get("biznes") : "dokon";
const b = bizneslar[kalit];

function setText(id, text) {
  var el = document.getElementById(id);
  if (el && text !== undefined) el.textContent = text;
}

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("sme_lang", lang);
  
  // URL'ni sahifani qayta yuklamasdan yangilash
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  window.history.pushState({}, '', url);

  render(lang);
}

function render(lang) {
  var d = D[lang] || D.uz;
  
  // bizneslar ma'lumotlari data.js ichida har bir til uchun bo'lishi kerak
  var x = (b && b[lang]) ? b[lang] : (b && b.uz ? b.uz : b);

  document.documentElement.lang = lang;
  if (x && x.nom) document.title = x.nom;

  setText("navHome", d.home);
  setText("aloqa", d.contact);
  setText("tag", d.tag);
  setText("nom", x ? x.nom : "");
  setText("tavsif", x ? x.tavsif : "");
  setText("bolim", x ? x.bolim : "");
  setText("ishH", d.hoursH);
  setText("ishVaqti", d.hours + (x ? x.ishVaqti : ""));
  setText("manzil", d.addr + (x ? x.manzil : ""));
  setText("back", d.back);
  setText("footer", "© " + new Date().getFullYear() + " SME-Digital UZ. " + d.footer);

  // Mahsulotlar/Xizmatlar ro'yxatini render qilish
  var joy = document.getElementById("mahsulotlar");
  if (joy && x && x.mahsulotlar) {
    joy.innerHTML = "";
    x.mahsulotlar.forEach(function(item) {
      var card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <h3>${item.nom}</h3>
        <p>${item.tavsif || ''}</p>
        <span class="price">${item.narx}</span>
      `;
      joy.appendChild(card);
    });
  }
}

// Sahifa yuklanganda ishga tushish
document.addEventListener("DOMContentLoaded", function() {
  render(currentLang);
});