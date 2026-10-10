const params = new URLSearchParams(location.search);
const kalit = params.get("biznes") || "dokon";
const biznes = bizneslar[kalit] || bizneslar.dokon;

document.title = biznes.nom;
document.getElementById("nom").textContent = biznes.nom;
document.getElementById("tavsif").textContent = biznes.tavsif;
document.getElementById("bolim").textContent = biznes.bolim || "Mahsulotlar";
document.getElementById("ishVaqti").textContent = "Ish vaqti: " + biznes.ishVaqti;
document.getElementById("manzil").textContent = "Manzil: " + biznes.manzil;
document.getElementById("aloqa").href = biznes.telegram;

const joy = document.getElementById("mahsulotlar");

biznes.mahsulotlar.forEach(function (m) {
  const karta = document.createElement("div");
  karta.className = "card";

  const sarlavha = document.createElement("h3");
  sarlavha.textContent = m.nom;

  const matn = document.createElement("p");
  matn.textContent = m.tavsif;

  karta.appendChild(sarlavha);
  karta.appendChild(matn);
  joy.appendChild(karta);
});