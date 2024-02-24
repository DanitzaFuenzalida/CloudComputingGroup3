function redirectOnSignIn() {
    event.preventDefault();

    var username = document.getElementsByName("username")[0].value;
    var password = document.getElementsByName("password")[0].value;

    sendDataToServer(username, password);
}

function sendDataToServer(username, password) {
    var url = 'your_server_script.php'; // Change this to the actual server-side script

    var data = {
        username: username,
        password: password
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Server response:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}