// cart
let cartIcon = document.querySelector("#cart-icon");
let cartIconMb = document.querySelector("#cart-icon-mobile");
let cart = document.querySelector(".cart_main");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
  cart.classList.add("activate");
}

cartIconMb.onclick = () => {
  cart.classList.add("activate");
}

closeCart.onclick = () => {
  cart.classList.remove("activate");
}

//Cart Working js
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
}else {
  ready();
}

// Chức năng
function ready() {
  // Xóa item khỏi giỏ hàng
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
  }
  // Thay đổi số lượng
  var quantityInputs = document.getElementsByClassName('cart-quantity');
  for(var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener("change", quantityChanged);
  }
  // Thêm vào giỏ hàng
  var addCart = document.getElementsByClassName('add-cart');
  for(var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  // Nút thanh toán
  document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyBtnClicked);
}

// Nút thanh toán
function buyBtnClicked() {
  alert("Bạn đã thanh toán thành công");
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while(cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
}

// Xóa 
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

// Thay đổi số lượng
function quantityChanged(event) {
  var input = event.target;
  if(isNaN(input.value) || input.value <= 0) { 
    input.value = 1; 
  }
  updateTotal();
}

// Thêm vào giỏ hàng
// function addCartClicked(event) {
//   let button = event.target;
//   let shopProducts = button.parentElement;
//   let title = shopProducts.getElementsByClassName('product-title')[0].innerText;
//   let price = shopProducts.getElementsByClassName("price")[0].innerText;
//   let productImg = shopProducts.getElementsByClassName("product-img")[0].src;
//   addProductToCart(title, price, productImg);
//   updateTotal();
// }



// Cập nhật tổng giá


