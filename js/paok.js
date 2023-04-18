// JavaScript code
document.getElementById("emailSubscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission

    // Get the email address from the input field
    var email = document.getElementById("emailAddress").value;

    // Perform the email subscription logic here, such as sending the email to the server for processing and storage
    // You can use Ajax or fetch to send the email address to the server, and handle the response accordingly

    // Once the email subscription is successful, show the unsubscribe message
    document.getElementById("unsubscribeMsg").style.display = "block";
});

// JavaScript code for handling the unsubscribe functionality
document.getElementById("unsubscribeMsg").addEventListener("click", function() {
    // Perform the unsubscribe logic here, such as sending a request to the server to update the user's subscription status
    // You can use Ajax or fetch to send the unsubscribe request to the server, and handle the response accordingly

    // Once the unsubscribe is successful, hide the unsubscribe message and reset the form
    document.getElementById("unsubscribeMsg").style.display = "none";
    document.getElementById("emailSubscriptionForm").reset();
});
