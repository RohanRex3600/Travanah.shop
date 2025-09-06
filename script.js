document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');


    // Toggle navigation for small screens
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            navToggle.classList.toggle('toggle');
        });
    }


    // Close nav when a link is clicked (for single page layouts)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                navToggle.classList.remove('toggle');
            }
        });
    });


    // Sticky Navbar on scroll (optional)
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            } else {
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
                navbar.style.boxShadow = 'none';
            }
        });
    }
});

