const navbar = document.querySelector(".navbar");
const nav_tittle_logo = document.querySelector(".nav-logo-title");
const nav_items = document.querySelectorAll(".nav-item");

window.addEventListener('scroll', () => {
    if (window.scrollY >= 600) {
        navbar.classList.add("nav-scroll");
        nav_tittle_logo.classList.add("logo-title-scroll");
        nav_items.forEach(item => item.classList.add("item-scroll"));
    } else if (window.scrollY < 600) {
        navbar.classList.remove("nav-scroll");
        nav_tittle_logo.classList.remove("logo-title-scroll");
        nav_items.forEach(item => item.classList.remove("item-scroll"));
    }
})