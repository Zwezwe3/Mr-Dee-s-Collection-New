const container = document.getElementById("product-list");

if (container) {
  const page = window.location.pathname.toLowerCase();

  let category = "";

  if (page.includes("laptop")) category = "laptops";
  if (page.includes("iphone")) category = "iphones";
  if (page.includes("shoe")) category = "shoes";

  const filtered = products.filter(p => p.category === category);

  container.innerHTML = filtered.map(p => `
    <div class="product">
      <img src="${p.image}" alt="${p.name}">
      <p>
        <strong>${p.name}</strong><br>
        ${p.description}<br>
        <span class="price">${p.price}</span>
      </p>
    </div>
  `).join("");
}
