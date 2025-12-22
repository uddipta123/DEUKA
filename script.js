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
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");

menuIcon.onclick = () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "block" ? "none" : "block";
};

function signIn(details) {
  const phone =prompt("Enter phone number");
  const email = prompt("Enter email");
  const password = prompt("Enter password");

  if (email && password) {
    alert("Signed in as " + email);
  } else {
    alert("Invalid login");
  }
}




const countryBtn = document.getElementById("countryBtn");
const countryList = document.getElementById("countryList");

countryBtn.onclick = () => {
  countryList.style.display =
    countryList.style.display === "block" ? "none" : "block";
};

function selectCountry(country) {
  countryBtn.innerHTML = "🌍 " + country;
  countryList.style.display = "none";
}
