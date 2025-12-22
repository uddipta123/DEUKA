function order(Shop,ShopNow) {
  const phone = "916002378185";
  const message = "I want to order: " + product;
  const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}


const searchIcon = document.getElementById("searchIcon");
const searchBox = document.getElementById("searchBox");

searchIcon.onclick = (SearchBar) => {
  searchBox.style.display =
    searchBox.style.display === "block" ? "none" : "block";
};


let cart = [addtocart];

function AddtoCart(productName) {
  cart.push(productName);
  alert(productName + " added to cart");
  console.log(cart);
}

let wishlist = [];

function addtowiahliat(item) {
  wishlist.push(item);
  alert("Added to wishlist");
}
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");

menuIcon.onclick = () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "block" ? "none" : "block";
};


let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

/* AUTO SLIDE LIKE NIKE */
setInterval(nextSlide, 5000);








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
