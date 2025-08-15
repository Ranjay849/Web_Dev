document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Input elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const successMessage = document.getElementById("successMessage");

    let valid = true;

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    // Name validation
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        valid = false;
    }

    // Email validation with regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Invalid email format";
        valid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        messageError.textContent = "Message is required";
        valid = false;
    }

    // Show success if valid
    if (valid) {
        successMessage.textContent = "✅ Your message has been sent successfully!";
        name.value = "";
        email.value = "";
        message.value = "";
    }
});