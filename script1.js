

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("application-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        // You can add code to process form data here
        alert("Form submitted successfully!");
    });
});
