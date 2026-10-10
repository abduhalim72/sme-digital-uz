const D = {
  uz: { home: "Bosh sahifa", contact: "Bog'lanish", tag: "Namuna sahifa", hoursH: "Ish vaqti va manzil", hours: "Ish vaqti: ", addr: "Manzil: ", back: "Orqaga", footer: "SME-Digital UZ. Kichik bizneslar uchun raqamli yechimlar." },
  ru: { home: "Главная", contact: "Связаться", tag: "Пример страницы", hoursH: "Часы работы и адрес", hours: "Часы работы: ", addr: "Адрес: ", back: "Назад", footer: "SME-Digital UZ. Цифровые решения для малого бизнеса." },
  en: { home: "Home", contact: "Contact", tag: "Sample page", hoursH: "Hours and address", hours: "Opening hours: ", addr: "Address: ", back: "Back", footer: "SME-Digital UZ. Digital solutions for small businesses." }
};

const params = new URLSearchParams(location.search);
const kalit = bizneslar[params.get("biznes")] ? params.get("biznes") : "dokon";
const b = bizneslar[kalit];

function setText(id, text) {
  var el = document.getElementById(id);
  if (el) el.textContent = text;
}

function render(l) {
  var d = D[l] || D.uz;
  var x = b[l] || b.uz;
  document.documentElement.lang = l;
  document.title = x.nom;
  setText("navHome", d.home);
  setText("aloqa", d.contact);
  setText("tag", d.tag);
  setText("nom", x.nom);
  setText("tavsif", x.tavsif);
  setText("bolim", x.bolim);
  setText("ishH", d.hoursH);
  setText("ishVaqti", d.hours + x.ishVaqti);
  setText("manzil", d.addr + x.manzil);
  setText("back", d.back);
  setText("footer", d.footer);
  document.getElementById("aloqa").href = b.telegram;

  var joy = document.getElementById("mahsulotlar");
  joy.innerHTML = "";
  x.mahsulotlar.forEach(function (m) {
    var karta = document.createElement("div");
    karta.className = "card";
    var sarlavha = document.createElement("h3");
    sarlavha.textContent = m.nom;
    var matn = document.createElement("p");
    matn.textContent = m.tavsif;
    karta.appendChild(sarlavha);
    karta.appendChild(matn);
    joy.appendChild(karta);
  });

  document.querySelectorAll(".lang button").forEach(function (btn) {
    btn.classList.toggle("on", btn.getAttribute("data-lang") === l);
  });
  try { localStorage.setItem("lang", l); } catch (e) {}
}

var saved = null;
try { saved = localStorage.getItem("lang"); } catch (e) {}

document.querySelectorAll(".lang button").forEach(function (btn) {
  btn.addEventListener("click", function () { render(btn.getAttribute("data-lang")); });
});

render(D[saved] ? saved : "uz");