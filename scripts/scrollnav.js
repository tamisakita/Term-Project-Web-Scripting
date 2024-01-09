// This JavaScript code adds a scroll event listener to the window, and based on the scroll position for the navbar

// Those variables are const (because it wont change during the code)
// with  document.querySelector method I retrieved the element on the DOM
// with document.querySelectorAll method I retrieve all elements with class .nav-item
const navbar = document.querySelector(".navbar");
const nav_tittle_logo = document.querySelector(".nav-logo-title");
const nav_items = document.querySelectorAll(".nav-item");

// with window.addEventListener("scroll", () => {}) the code will run when it is scrolled
window.addEventListener("scroll", () => {
  //first I checked if the vertical scroll position (window.scrollY) is greater than or equal to 600 px
  if (window.scrollY >= 600) {
    //If its true, it adds the class .nav-scroll (styles on the globals.css) to the navbar with navbar.classList.add that adds a class on the navbar tag
    navbar.classList.add("nav-scroll");
    // Also add the .logo-title-scroll (styles on the globals.css) class to nav_tittle_logo
    nav_tittle_logo.classList.add("logo-title-scroll");
    // In order to add .item-scroll (styles on the globals.css) to each element in nav_items I used forEach loop that will reach each item in the nav_items
    nav_items.forEach((item) => item.classList.add("item-scroll"));
  } else if (window.scrollY < 600) {
    // If the  (window.scrollY)  is smaller than 600 I remove the classes from the tags using .classList.remove
    navbar.classList.remove("nav-scroll");
    nav_tittle_logo.classList.remove("logo-title-scroll");
    nav_items.forEach((item) => item.classList.remove("item-scroll"));
  }
});
