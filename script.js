function login() {
    // Hardcoded credentials for validation
    var username = "user";
    var password = "pass";

    // User input from form
    var inputUsername = document.querySelector('input[name="username"]').value;
    var inputPassword = document.querySelector('input[name="password"]').value;

    // Check if the user input matches the hardcoded credentials
    if (inputUsername === username && inputPassword === password) {
        window.location.replace('dashboard.html');
    } else {
        alert("Login failed: Incorrect username or password.");
    }
}
function logout() {
    window.location.replace('loginpage.html');
}