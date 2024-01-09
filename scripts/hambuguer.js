// function for the hamburguer menu mobile and tablet size
// This function consists of instructions that show/hide the menu when the hamburger icon is clicked.
//The toggleClass("open") function is used to display the menu, and removeClass("open") is used to hide it.

$(function () {
  // display menu
  $(".menu-toggle").click(function () {
    $(".nav-list").toggleClass("open");
    $(".hamburger").toggleClass("open");
  });

  // hide menu
  $(".nav-item").click(function () {
    $(".nav-list").removeClass("open");
    $(".hamburger").removeClass("open");
  });
});
