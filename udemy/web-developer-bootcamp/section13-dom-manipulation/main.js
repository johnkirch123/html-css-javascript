var tag = document.getElementById("highlight");
var tags = document.getElementsByClassName("bolded");
var tagName = document.getElementsByTagName("h1");
var body = document.getElementsByTagName("body")[0];
// there is also a querySelectorAll function to select all
// querySelector only selects the first item
var qS = document.querySelector(".bolded");
var h1 = document.querySelector("h1");

tag.style.color = "red";

for (var i = 0; i < tags.length; i++) {
  tags[i].style.color = "orange";
}

for (var i = 0; i < tagName.length; i++) {
  tagName[i].style.color = "pink";
}

qS.style.color = "purple";
qS.classList.toggle(".big");
