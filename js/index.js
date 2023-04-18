// Product filter page
const filterSelect = document.getElementById('category-select');

// Get the category from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get('category') || 'all';

// Set the selected category in the filter select
filterSelect.value = selectedCategory;

// Event listener for filter select
filterSelect.addEventListener('change', function() {
  const selectedCategory = this.value;
  // Update the URL with the selected category
  window.location.href = 'shop.html?category=' + selectedCategory;
});

// Function to filter products by category
function filterProducts(category) {
  const products = document.getElementById('product-container').getElementsByClassName('product');
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (category === 'all' || product.getAttribute('data-category') === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  }
}

// Filter products with the initial selected category
filterProducts(selectedCategory);
