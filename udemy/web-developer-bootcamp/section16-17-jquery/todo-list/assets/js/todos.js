// check off specific to-dos by clicking
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// click on x to delete to-do
$("ul").on("click", "span", function(e) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  e.stopPropagation();
});

$("input[type='text']").on("keypress", function(e) {
  if (e.which === 13) {
    // grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    // create a new li and add to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});
