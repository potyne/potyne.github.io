// button cart
const cartButton = document.getElementById("cart-button");
var isCartToggled = false;

// sidebar dom
// also sidebar class but id
const sidebarCart = document.getElementById("sidebar-id");

cartButton.addEventListener("click", (e) => {
  if (isCartToggled === false) {
    // sidebarCart.style.display = "flex";
    sidebarCart.style.right = "0%";
    isCartToggled = true;
  } else {
    // sidebarCart.style.display = "";
    sidebarCart.style.right = "";
    isCartToggled = false;
  }
});
