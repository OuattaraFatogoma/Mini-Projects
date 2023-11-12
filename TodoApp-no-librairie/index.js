let main = document.querySelector("main");
let form = document.querySelector("form");
let inputEl = document.getElementById("input");
let todolistEl = document.getElementById("todo-container");
let todoActiveBtn = document.getElementById("active");
let todoCompleteBtn = document.getElementById("complete");
let todoAllBtn = document.getElementById("all");
let itemsLeft = document.getElementById("items-left");

let todoList = JSON.parse(localStorage.getItem("todolist"));
if (todoList) {
  displayNumberTodoActive()
  todoList.forEach((todo) => {
    addTodo(todo.text, todo.completion);
  });
}


//////////////// Action after certain events ////////////
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let todoText = inputEl.value;
  let todoCompletion = false;

  if (inputEl.value != "") {
    addTodo(todoText, todoCompletion);
  }
  updateLS();
});

todoActiveBtn.addEventListener("click", ()=>{
  let todolist = JSON.parse(localStorage.getItem("todolist"));
  let todoActive = todolist.filter(todo => todo.completion == false);
  todolistEl.innerHTML = "";
  console.log(todoActive);
  todoActive.forEach((todo) => {
    addTodo(todo.text, todo.completion);
  });

});

todoCompleteBtn.addEventListener("click", ()=>{
  let todolist = JSON.parse(localStorage.getItem("todolist"));
  let todoComplete = todolist.filter(todo => todo.completion == true);
  todolistEl.innerHTML = "";
  console.log(todoComplete);
  todoComplete.forEach((todo) => {
    addTodo(todo.text, todo.completion);
  });
});


todoAllBtn.addEventListener("click", ()=>{
  let todolist = JSON.parse(localStorage.getItem("todolist"));
  todolistEl.innerHTML = "";
  todolist.forEach((todo) => {
    addTodo(todo.text, todo.completion);
  });
});




///////////////// FUNCTIONS //////////////////
function addTodo(todoText, todoCompletion) {
  let todo = document.createElement("li");
  todo.classList.add("todo");
  if (todoCompletion) {
    todo.classList.add("complete");
  }
  todo.innerText = todoText;

  todolistEl.appendChild(todo);
  inputEl.value = "";

  todo.addEventListener("click", (e) => {
    e.preventDefault();
    todo.classList.toggle("complete");
    updateLS();
  });

  todo.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    todo.remove();
    updateLS();
  });
}

function updateLS() {
  const todos = document.querySelectorAll(".todo");
  const todolist = [];

  todos.forEach((todo) => {
    todoObject = {
      text: todo.textContent,
      completion: todo.classList.contains("complete"),
    };
    todolist.push(todoObject);
  });

  localStorage.setItem("todolist", JSON.stringify(todolist));
  displayNumberTodoActive()
}


function displayNumberTodoActive(){
  let todolist = JSON.parse(localStorage.getItem("todolist"));
  let todoActive = todolist.filter(todo => todo.completion == false);
  itemsLeft.innerText = `${todoActive.length} items left`;
}
/////////////// end of functions ////////////////////