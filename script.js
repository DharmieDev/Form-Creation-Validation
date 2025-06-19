document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById ("registration-form");
    const feedbackDiv = document.getElementById("form-feedback")
    
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            document.getElementById("username").value.trim();
            document.getElementById("email").value.trim();
            document.getElementById("password").value.trim();

            const isValid = true;
            const messages = [];
            if (username.length < 3) {
                if (!isValid) {
                    messages.push("Username must be at least 3 characters long.");
                };
            }

            if (email.includes("@", ".")) {
                if (!isValid) {
                    messages.push("Email must contain '@' and '.'");
                };
            };

            if (password.length >= 8) {
                if (!isValid) {
                    messages.push("Password must be at least 8 characters long.");
                };
            };
        });
           
    feedbackDiv.style.display = "block";
    if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";
    }
    if (!isValid) {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545";
    }
});