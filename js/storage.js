const form = document.querySelector("form");
const todoInput = document.getElementById("todo_input");
const todoListContainer = document.getElementById("todo_list_container");

const todoKey = `${new Date().getMonth() + 1}/${new Date().getDay()}`;

window.onload = function () {
  const prevTodoList = getTodoList();

  prevTodoList.forEach((todo) => {
    paintTodo(todo);
  });
};

function getTodoList() {
  const prevTodo = JSON.parse(window.localStorage.getItem(todoKey) || "[]");
  return prevTodo;
}

function setTodoList(todoList) {
  window.localStorage.setItem(todoKey, JSON.stringify(todoList));
}

function deleteTodo(e) {
  const list = e.target.parentNode;
  const span = list.firstChild;

  const prevTodoList = getTodoList();
  const filteredTodo = prevTodoList.filter((todo_) => todo_ !== span.innerText);

  setTodoList(filteredTodo);
  list.remove();
}

function paintTodo(todo) {
  const listElement = document.createElement("li");
  const spanElement = document.createElement("span");
  const todoRemoveButton = document.createElement("button");
  todoRemoveButton.setAttribute("type", "button");

  todoRemoveButton.addEventListener("click", (e, todo) => {
    return deleteTodo(e, todo);
  });

  spanElement.innerText = todo;
  listElement.appendChild(spanElement);
  todoRemoveButton.append("X");

  listElement.appendChild(todoRemoveButton);
  todoListContainer.appendChild(listElement);
}

function preprocessTodo(todo) {
  if (todo) {
    const prevTodoList = getTodoList();
    const isExistTodo = prevTodoList.find((todo_) => todo_ === todo);

    if (!isExistTodo) {
      setTodoList([...prevTodoList, todo], todo);
      paintTodo(todo);
    }
  }
}

function handleTodoInput(e) {
  e.preventDefault();

  preprocessTodo(todoInput?.value || "");
  todoInput.value = "";
}

form.addEventListener("submit", handleTodoInput);
