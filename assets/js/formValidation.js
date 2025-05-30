document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the form data to a server
    // For this example, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);

    // Reset form
    this.reset();
});