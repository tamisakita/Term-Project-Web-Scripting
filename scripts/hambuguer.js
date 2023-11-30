$(function() {
  // Hamburger menu
  $(".menu-toggle").click(function() {
    $(".nav-list").toggleClass("open");
    $(".hamburger").toggleClass("open");
  });

  $(".nav-item").click(function() {
    $(".nav-list").removeClass("open");
    $(".hamburger").removeClass("open");
  });
});