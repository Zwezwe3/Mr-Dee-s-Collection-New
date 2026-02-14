// Load cart from storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart counter
function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) {
    count.textContent = cart.length;
  }
}

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(name + " added to cart.");
}

// Remove item
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

// Initialize
updateCartCount();
