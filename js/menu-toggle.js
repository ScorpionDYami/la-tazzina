
const toggleBtn = document.querySelector('.menu-toggle');
const menuLinks = document.querySelector('.menu-buttons');

toggleBtn.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
});

