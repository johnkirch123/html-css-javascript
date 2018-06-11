window.setTimeout(function() {
  var todos = ["Buy new turtle"];

  var input = prompt("What would you like to do?");

  while (input !== "quit") {
    if (input === "list") {
      listTodos();
    } else if (input === "new") {
      addTodo();
    } else if (input === "delete") {
      deleteTodo();
    }
    input = prompt("What would you like to do?");
  }

  console.log("OK, YOU QUIT THE APP!");

  function listTodos() {
    // console.log(todos);
    // for (var i = 0; i < todos.length; i++) {
    //   console.log(todos[i]);
    // }
    todos.forEach(function(todo, i) {
      console.log("Number " + i + ": " + todo);
    });
  }

  function addTodo() {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added Todo");
  }

  function deleteTodo() {
    var index = prompt("Enter which index of todo to delete");
    todos.splice(index, 1);
    console.log("Deleted Todo");
  }
}, 500);
