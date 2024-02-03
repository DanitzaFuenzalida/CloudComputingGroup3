document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Hardcoded credentials for validation
    var username = "user";
    var password = "pass";

    // User input from form
    var inputUsername = document.querySelector('input[name="username"]').value;
    var inputPassword = document.querySelector('input[name="password"]').value;

    // Check if the user input matches the hardcoded credentials
    if(inputUsername === username && inputPassword === password) {
        alert("Login successful!");
        // Redirect or perform actions after successful login
        // window.location.href = 'dashboard.html'; // Example redirect
    } else {
        alert("Login failed: Incorrect username or password.");
    }
});
