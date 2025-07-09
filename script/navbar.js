// making navbar responsive
// Find the menu icon (the button with three lines) on the page
const menuToggle = document.querySelector('.menu-toggle');

// Find the list of navigation links (like Home, About, Contact)
const navLinks = document.querySelector('.nav-links'); 

// When someone clicks on the menu icon...
menuToggle.addEventListener('click', () => {
    // ...this will show or hide the navigation links by adding/removing the "active" class
    navLinks.classList.toggle('active');
});
