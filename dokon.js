// Mahsulotlarni chiqarish
const container = document.getElementById("mahsulotlar");

const mahsulotlar = [
  { nom: "Non", narx: "5 000 so'm", emoji: "🍞" },
  { nom: "Sut", narx: "12 000 so'm", emoji: "🥛" },
  { nom: "Tuxum", narx: "18 000 so'm", emoji: "🥚" },
  { nom: "Sharbat", narx: "15 000 so'm", emoji: "🧃" },
  { nom: "Choy", narx: "25 000 so'm", emoji: "🍵" },
  { nom: "Sovun", narx: "8 000 so'm", emoji: "🧼" }
];

mahsulotlar.forEach(item => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <div class="product-img">${item.emoji}</div>
    <h4>${item.nom}</h4>
    <p class="price">${item.narx}</p>
  `;
  container.appendChild(card);
});