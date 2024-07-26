document.addEventListener("DOMContentLoaded", function() {
    const toggleMenu = document.querySelector('.toggle_menu');
    const menu = document.querySelector('header .menu');

    toggleMenu.addEventListener('click', function() {
        toggleMenu.classList.toggle('active');
        menu.classList.toggle('responsive');
    });
});
