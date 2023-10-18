function openRegistrationForm(event) {
  var modal = document.getElementById("registrationModal");
  var form = document.getElementById("registrationForm");

  // Customize form content based on the event
  form.innerHTML = `
    <h2>Register for ${event} Event</h2>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required><br><br>
    <button type="submit">Register</button>
  `;

  modal.style.display = "block";
}

function closeRegistrationForm() {
  var modal = document.getElementById("registrationModal");
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  var registrationForm = document.getElementById("registrationForm");
  if (registrationForm) {
    registrationForm.addEventListener("submit", function(event) {
      event.preventDefault();
      // Your code to handle form submission and saving data goes here

      // Close the form modal after successful submission
      closeRegistrationForm();
    });
  }
});

function saveUserData(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Create user data object
  var userData = {
    name: name,
    email: email
  };

  // Redirect to the new website after successful registration
  window.location.href = "https://www.example.com/hello-world";
}

// Function to open confirmation page
function openConfirmationPage() {
  var confirmationPage = document.getElementById("confirmationPage");
  confirmationPage.style.display = "block";
}

// Function to close confirmation page
function closeConfirmationPage() {
  var confirmationPage = document.getElementById("confirmationPage");
  confirmationPage.style.display = "none";
}

// ... (Your existing code) ...
// Add this function to your existing JavaScript code
function openEventInfoPage(event) {
  // Replace "event-info.html" with the actual URL of your event information page
  window.location.href = "event-info.html?event=" + event;
}
document.addEventListener('DOMContentLoaded', function() {
  const registerButton = document.getElementById('registerButton');

  registerButton.addEventListener('click', function() {
    // Simulate a registration process
    const isSuccess = Math.random() < 0.5; // Simulate success or failure

    if (isSuccess) {
      alert('Registration successful!');
    } else {
      alert('Registration failed. Please try again later.');
    }
  });
});


