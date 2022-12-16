// Slider
var swiper = new Swiper(".mySwiper", {
    cssMode: true, 
    loop: true, 
    autoplay: {
        delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next", 
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });



// Data
let products = {
  data: [
    {
      productName: "Lựu Đỏ Feru",
      category: "topFruit",
      price: "100",
      image: "./img/25.jpg",
    },
    {
      productName: "Me Ngâm Chua Ngọt",
      category: "topFruit",
      price: "60",
      image: "./img/26.jpg",
    },
    {
      productName: "Lê Mỹ",
      category: "topFruit",
      price: "80",
      image: "./img/28.jpg",
    },
    {
      productName: "Dâu Tây Hàn Quốc",
      category: "topFruit",
      price: "80",
      image: "./img/29.jpg",
    },
    {
      productName: "Nho Đen Nhật Bản",
      category: "topFruit",
      price: "80",
      image: "./img/30.jpg",
    },
    {
      productName: "Nho Đỏ Chuỗi Ngọc",
      category: "topFruit",
      price: "400",
      image: "./img/36.jpg",
    },
    {
      productName: "Cam Valencia Ai Cập",
      category: "importFruit",
      price: "200",
      image: "./img/1.jpg",
    },
    {
      productName: "Chà Là Tươi Ấn Độ",
      category: "importFruit",
      price: "150",
      image: "./img/2.jpg",
    },
    {
      productName: "Cherry Mỹ",
      category: "importFruit",
      price: "300",
      image: "./img/3.jpg",
    },
    {
      productName: "Cam Vàng Nevel Mỹ",
      category: "importFruit",
      price: "250",
      image: "./img/4.jpg",
    },
    {
      productName: "Dưa Lưới Đài Loan",
      category: "importFruit",
      price: "230",
      image: "./img/5.jpg",
    },
    {
      productName: "Dưa Lê Hàn Quốc",
      category: "importFruit",
      price: "300",
      image: "./img/6.jpg",
    },
    {
      productName: "Nho sữa nhật",
      category: "importFruit",
      price: "2000",
      image: "./img/37.jpg",
    },
    {
      productName: "Vải thiều",
      category: "vnFruit",
      price: "40",
      image: "./img/7.jpg",
    },
    {
      productName: "Chuối tiền giang",
      category: "vnFruit",
      price: "40",
      image: "./img/8.jpg",
    },
    {
      productName: "Bưởi năm roi",
      category: "vnFruit",
      price: "80",
      image: "./img/9.jpg",
    },
    {
      productName: "Dưa hấu",
      category: "vnFruit",
      price: "40",
      image: "./img/10.jpg",
    },
    {
      productName: "Sầu riêng",
      category: "vnFruit",
      price: "200",
      image: "./img/11.jpg",
    },
    {
      productName: "Hồng xiêm",
      category: "vnFruit",
      price: "60",
      image: "./img/12.jpg",
    },
    {
      productName: "Ổi bo thanh hà",
      category: "vnFruit",
      price: "30",
      image: "./img/34.jpg",
    },
    {
      productName: "Chôm chôm long khánh",
      category: "vnFruit",
      price: "45",
      image: "./img/35.jpg",
    },
    {
      productName: "Giỏ trái cây cúng",
      category: "giftFruit",
      price: "200",
      image: "./img/13.jpg",
    },
    {
      productName: "Giỏ trái cây thăm hỏi",
      category: "giftFruit",
      price: "250",
      image: "./img/14.jpg",
    },
    {
      productName: "Giỏ trái cây biếu tặng",
      category: "giftFruit",
      price: "250",
      image: "./img/15.jpg",
    },
    {
      productName: "Giỏ trái cây loại 1",
      category: "giftFruit",
      price: "300",
      image: "./img/16.jpg",
    },
    {
      productName: "Giỏ trái cây kèm hoa tươi",
      category: "giftFruit",
      price: "290",
      image: "./img/17.jpg",
    },
    {
      productName: "Giỏ trái cây đẹp",
      category: "giftFruit",
      price: "300",
      image: "./img/18.jpg",
    },
    {
      productName: "Giỏ trái cây sinh nhật",
      category: "giftFruit",
      price: "350",
      image: "./img/33.jpg",
    },
    {
      productName: "Mít sấy khô",
      category: "dryFruit",
      price: "50",
      image: "./img/19.jpg",
    },
    {
      productName: "Chuối sấy khô",
      category: "dryFruit",
      price: "50",
      image: "./img/20.jpg",
    },
    {
      productName: "Mít sấy dẻo",
      category: "dryFruit",
      price: "50",
      image: "./img/21.jpg",
    },
    {
      productName: "Kiwi sấy dẻo",
      category: "dryFruit",
      price: "50",
      image: "./img/22.jpg",
    },
    {
      productName: "Mít sấy rộp rộp",
      category: "dryFruit",
      price: "50",
      image: "./img/23.jpg",
    },
    {
      productName: "Xoài sấy muối ớt",
      category: "dryFruit",
      price: "50",
      image: "./img/24.jpg",
    },
    {
      productName: "Khoai lang sấy",
      category: "dryFruit",
      price: "50",
      image: "./img/31.jpg",
    },
    {
      productName: "Mận sấy dẻo",
      category: "dryFruit",
      price: "50",
      image: "./img/32.jpg",
    },
  ]
}

for (let i of products.data) {
  let card = document.createElement("div");

  card.classList.add("card",i.category, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.classList.add("product-img");
  image.setAttribute("src",i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  // container
  let container = document.createElement("div");
  container.classList.add("container");
  // Tên sp
  let name = document.createElement("h5");
  name.classList.add("product-title");
  name.innerText = i.productName.toLocaleUpperCase();
  container.appendChild(name);
  // Giá
  let price = document.createElement("h6");
  price.classList.add("price");
  price.innerText = i.price + ".000/kg";
  container.appendChild(price);
  // Nút thêm vào giỏ hàng
  let addToCart = document.createElement("button");
  addToCart.classList.add("add-cart");
  addToCart.classList.add("button");
  addToCart.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>` + "Thêm vào giỏ hàng";
  container.appendChild(addToCart);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

// Lọc
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) 
    {
      button.classList.add("active");
    } else 
    {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Nút tìm kiếm
document.getElementById("search").addEventListener("click", () => {

  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-title");
  let cards = document.querySelectorAll(".card");
  //Vòng lặp qua các phần tử
  elements.forEach((element, index) => {
    //Kiểm tra văn bản vừa gõ có trong giá trị tìm kiếm
    if (element.innerText.includes(searchInput.toUpperCase()) ) {
      //Hiển thị những thẻ trùng với từ khóa
      cards[index].classList.remove("hide");
    } else {
      //Ẩn đi những thẻ khác
      cards[index].classList.add("hide");
    }
  });
});

// Mở đầu sẽ hiện tất cả khi load trang
window.onload = () => {
  filterProduct("all");
}
for (let i of products.data) {
  function addCartClicked(event) {
    let button = event.target;
    let shopProducts = button.parentElement;
    let title = shopProducts.getElementsByClassName('product-title')[0];
    let price = shopProducts.getElementsByClassName("price")[0];
    let productImg = shopProducts.getElementsByClassName("product-img")[0];
    addProductToCart(i.productName, i.price, i.image);
    updateTotal();
  }
}
for (let i of products.data) {
function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName('cart-content')[0];
  var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
  for(let i = 0; i < cartItemsNames.length; i++) {
    if(cartItemsNames[i].innerText == i.productName) {
      alert("Bạn đã thêm vào giỏ hàng thành công!");
      // return;
    }
  }
  var cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}.000</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <!-- remove cart -->
                        <i class="fa-solid fa-trash-can cart-remove"></i> `;
  
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
  cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}
}

function updateTotal() {
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box');
  var total = 0;
  for(var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
    var price = parseFloat(priceElement.innerText.replace("VND", ""));
    var quantity = quantityElement.value;
    total = total + (price * quantity);
  }
    document.getElementsByClassName("total-price")[0].innerText = total + ".000 VND";
}


window.localStorage.setItem("total-price", total);
