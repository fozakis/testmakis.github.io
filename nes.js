const form = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;

  // Send email address to server to subscribe to discounts via email
  // ...

  // Show confirmation message to user
  alert("Thanks for subscribing to our daily discounts and offers!");
});