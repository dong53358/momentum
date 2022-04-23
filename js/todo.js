const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", toDos);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodoInput) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodoInput;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodoInput = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodoInput);
  paintToDo(newTodoInput);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
