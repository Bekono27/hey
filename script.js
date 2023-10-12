let cart = [];

function addToCart(item, price) {
  const cartItem = { item, price };
  cart.push(cartItem);
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.item} - $${item.price}`;
    cartItems.appendChild(li);
  });
}

function placeOrder() {
  // Implement order placement logic
  console.log('Order placed!');
}

function navigateToOrderPage() {
    window.location.href = 'order.html';
  }
  
  function navigateToMenuPage() {
    window.location.href = 'menu.html';
  }
  