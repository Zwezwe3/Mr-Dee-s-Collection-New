function loadProducts(category) {
  const container = document.getElementById("products-container");
  if (!container) return;

  let filtered = products;

  if (category !== "all") {
    filtered = products.filter(p => p.category === category);
  }

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = "<p style='text-align:center;'>No products found.</p>";
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.specs}</p>
      <p class="price">${p.price}</p>
    `;

    container.appendChild(card);
  });
}
