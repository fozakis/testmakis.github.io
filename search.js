const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const productList = document.getElementById("product-list");

searchBtn.addEventListener("click", function() {
  const query = searchInput.value.trim().toLowerCase();
  const products = productList.getElementsByClassName("product");

  for (let i = 0; i < products.length; i++) {
    const productName = products[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

    if (productName.includes(query)) {
      products[i].style.display = "block";
    } else {
      products[i].style.display = "none";
    }
  }
});