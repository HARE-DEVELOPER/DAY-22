function showHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

function showAbout() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("contact").style.display = "none";
}

function showContact() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "block";
}

// Add form submission handling
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop form from submitting
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    alert(`Thank you, ${name}! We will contact you at ${email}.`);
    document.getElementById("contact-form").reset(); // Reset the form
});

// Initialize the home view
showHome();
