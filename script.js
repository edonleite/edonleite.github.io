// Toggle Menu for Mobile Devices
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
