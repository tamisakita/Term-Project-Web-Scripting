$(function() {
    // Hamburger menu
    $(".menu-toggle").click(function() {
      $(".nav-list").toggleClass("open"); // Corrected selector
      $(".hamburger").toggleClass("open");
    });
  
    $(".nav-item").click(function() {
      $(".nav-list").removeClass("open");
      $(".hamburger").removeClass("open");
    });
  
    // Waypoints
    let itemIndex;
    $('.nav-item').on('click', function (event) {
      event.preventDefault();
      itemIndex = $(this).attr('href');
      $('body, html').animate({ scrollTop: $(itemIndex).offset().top - 0 }, 1000);
    });
  });
  