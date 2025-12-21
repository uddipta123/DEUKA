function order(product) {
  const phone = "916002378185";
  const message = "I want to order: " + product;
  const url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}
