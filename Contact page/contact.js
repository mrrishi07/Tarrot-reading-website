document.getElementById('contactForm').addEventListener('submit', function(event) {
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;

    if (!email || !name || !message) {
        alert('All fields are required.');
        event.preventDefault(); // Prevent form submission
    }
});
