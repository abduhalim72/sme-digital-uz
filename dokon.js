const D = {
  uz: {
    home: "Bosh sahifa",
    contact: "Bog'lanish",
    tag: "Namuna sahifa",
    hoursH: "Ish vaqti va manzil",
    hours: "Ish vaqti: ",
    addr: "Manzil: ",
    back: "← Ortga",
    footer: "Barcha huquqlar himoyalangan."
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

// URL yoki LocalStorage'dan til va biznes turini olish
const params = new URLSearchParams(window.location.search);
let selectedLang = params.get("lang") || localStorage.getItem("sme_lang") || "uz";
const kalit = (typeof bizneslar !== 'undefined' && bizneslar[params.get("biznes")]) ? params.get("biznes") : "dokon";

function setText(id, text) {
  var el = document.getElementById(id);
  if (el && text !== undefined) el.textContent = text;
}

// HTML'dagi UZ, RU, EN tugmalari bosilganda ishlaydigan funksiya:
function setLanguage(lang) {
  selectedLang = lang;
  localStorage.setItem("sme_lang", lang);

  // URL parametrini ham yangilab qo'yamiz
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.pushState({}, '', url);

  // Sahifani yangi tilda qayta chizamiz
  render(lang);
}

function render(lang) {
  if (!lang) lang = selectedLang;
  selectedLang = lang;

  var d = D[lang] || D.uz;
  var b = (typeof bizneslar !== 'undefined') ? bizneslar[kalit] : null;

  // AGAR data.js da har bir til alohida bo'lsa (b[lang]), aks holda b o'zini oladi
  var x = (b && b[lang]) ? b[lang] : b;

  document.documentElement.lang = lang;
  if (x && x.nom) document.title = x.nom;

  // Statik tarjimalar
  setText("navHome", d.home);
  setText("aloqa", d.contact);
  setText("tag", d.tag);
  setText("ishH", d.hoursH);
  setText("back", d.back);
  setText("footer", "© " + new Date().getFullYear() + " SME-Digital UZ. " + d.footer);

  // Dynamic ma'lumotlar (data.js dan keladiganlar)
  if (x) {
    setText("nom", x.nom);
    setText("tavsif", x.tavsif);
    setText("bolim", x.bolim);
    
    var ishVaqtiMatn = x.ishVaqti || x.hours;
    var manzilMatn = x.manzil || x.addr;

    setText("ishVaqti", d.hours + (ishVaqtiMatn || ''));
    setText("manzil", d.addr + (manzilMatn || ''));

    // Mahsulotlar / Xizmatlar ro'yxatini chiqarish
    var joy = document.getElementById("mahsulotlar");
    if (joy && (x.mahsulotlar || x.services || x.items)) {
      var list = x.mahsulotlar || x.services || x.items;
      joy.innerHTML = "";
      list.forEach(function(item) {
        var card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <h3>${item.nom || item.title || item.name}</h3>
          <p>${item.tavsif || item.desc || ''}</p>
          <span class="price">${item.narx || item.price || ''}</span>
        `;
        joy.appendChild(card);
      });
    }
  }
}

// Sahifa yuklanganda ishga tushadi
document.addEventListener("DOMContentLoaded", function() {
  render(selectedLang);
});