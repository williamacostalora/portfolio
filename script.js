document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the clicked element is a navigation link
            if (this.getAttribute('href').charAt(0) === '#') {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update footer year dynamically
    document.getElementById('year').textContent = new Date().getFullYear();
});
