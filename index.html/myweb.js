function changeImage()
{
    const el = document.querySelector("img");
   
    el.setAttribute("src","pic2.jpeg")
}

function login() {
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    var validUsername = "admin";
    var validPassword = "1234";
    
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }
    
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        window.location.href = "adminpage.html"; // Redirects to new page
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
function displayMessage() {
    let message = document.getElementById("contact").value;
    if (message.trim() !== "") {
        document.getElementById("output").innerHTML = `<strong>You:</strong> ${message}`;
        document.getElementById("messageInput").value = ""; // Clear input after sending
    } else {
        alert("Please enter a message!");
    }
}
