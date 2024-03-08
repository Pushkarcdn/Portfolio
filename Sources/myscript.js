document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission to avoid page refresh

  // You can add form validation here if required

  // Perform the form submission using fetch
  fetch(event.target.action, {
    method: "POST",
    body: new FormData(event.target),
  })
    .then((response) => {
      if (response.ok) {
        // If the response is successful, show the success message
        var messageContainer = document.getElementById("messageContainer");
        messageContainer.textContent = "Message Sent!";
        messageContainer.style.textAlign = "center";
      } else {
        // If the response is not successful, show an error message or handle accordingly
        // You can also display the error message in the messageContainer or elsewhere.
      }
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      // Handle any errors that occurred during the form submission
    });
});

window.onload = function() {
  document.getElementById("my-form").submit();
};