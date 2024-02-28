
// This function should be called when using loginPage
async function login() {
    var inputUsername = document.querySelector('input[name="username"]').value;
    var inputPassword = document.querySelector('input[name="password"]').value;

    try {
        const response = await fetch('https://xfae0aaxng.execute-api.us-west-2.amazonaws.com/prod/dbapi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: inputUsername, password: inputPassword })
        });
        
        if (!response.ok) {
            throw new Error('Network response error');
        }
        
        const data = await response.json();
        
        if (data.success) {
            window.location.replace('dashboard.html');
        } else {
            alert("Login failed: Incorrect username or password.");
        }
    } catch (error) {
        console.error('Login failed:', error);
        alert("Login failed: An error occurred. Please try again.");
    }
}

function logout() {
    window.location.replace('loginpage.html');
}


// This function should be called when using SignIn

async function signUp() {

    var inputUsername = document.querySelector('input[name="username"]').value;
    var inputPassword = document.querySelector('input[name="password"]').value;

    try {
        const response = await fetch('https://xfae0aaxng.execute-api.us-west-2.amazonaws.com/prod/createNewUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: inputUsername, password: inputPassword })
        });

        if (!response.ok) {
            throw new Error('Network response error');
        }

        const data = await response.json();

        if (data.success) {
            window.location.replace('emailConfirm.html');
        } else {
            alert("Sign up failed: Already existing username.");
        }
    } catch (error) {
        console.error('Sign In Failed:', error);
        alert("Sign In Failed: An error occurred. Please try again.");
    }
}