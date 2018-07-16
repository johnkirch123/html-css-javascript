$(function() {
  var header = $(".header");
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 100) {
        document.body.setAttribute("background-color", "red");
        document.getElementById("nav__button").setAttribute("display", "block");
      } else {
        document.getElementById("nav__button").setAttribute("display", "block");
      }
  });
});