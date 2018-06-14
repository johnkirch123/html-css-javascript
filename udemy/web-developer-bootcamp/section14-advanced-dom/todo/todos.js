var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("mouseover", function() {
    this.classList.add("selected");
  });

  lis[i].addEventListener("mouseout", function() {
    this.classList.remove("selected");
  });

  lis[i].addEventListener("click", function() {
    this.classList.toggle("done");
  });
}

// lis[i].addEventListener("mouseover", function() {
//   lis.style.color = "green";
// });

// lis[i].addEventListener("mouseout", function() {
//   lis.style.color = "#000";
// });
