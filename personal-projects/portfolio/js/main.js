

    /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var btn = document.getElementById("nav__btn");
  var bg = document.getElementById("nav__bg");
  if (currentScrollPos > 0) {
    btn.classList.add("hidden");
    bg.classList.add("hidden");
  } else {
    btn.classList.remove("hidden");
    bg.classList.remove("hidden");
  }
  prevScrollPos = currentScrollPos;
}

function uncheck() {
  document.querySelector("#navi-toggle").checked = false;
}