// document.querySelectorAll("div").forEach(d => {
//   const hue = Math.floor(Math.random() * 360);
//   d.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
//   d.style.borderColor = `hsl(${hue}, 100%, 80%)`;
// });

// function getRandomColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// document.querySelectorAll("div").forEach(d => {
//   d.style.backgroundColor = getRandomColor();
// });
document.addEventListener("click", function(event) {
  var fadeTarget = event.target;
  var fadeEffect = setInterval(function() {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 200);
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.querySelectorAll("div").forEach(d => {
  d.style.backgroundColor = getRandomColor();
});
