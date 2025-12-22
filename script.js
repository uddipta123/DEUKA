function order(product) {
  const phone = "916002378185";
  const message = "I want to order: " + product;
  const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}


const searchIcon = document.getElementById("searchIcon");
const searchBox = document.getElementById("searchBox");

searchIcon.onclick = () => {
  searchBox.style.display =
    searchBox.style.display === "block" ? "none" : "block";
};


let cart = [];

function addToCart(productName) {
  cart.push(productName);
  alert(productName + " added to cart");
  console.log(cart);
}

let wishlist = [];

function addToWishlist(item) {
  wishlist.push(item);
  alert("Added to wishlist");
}
