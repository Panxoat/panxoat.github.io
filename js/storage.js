const form = document.getElementById("after_login_form");
const beforeLoginform = document.getElementById("before_login_form");
const todoInput = document.getElementById("todo_input");
const todoListContainer = document.getElementById("todo_list_container");

const todoKey = `${new Date().getMonth() + 1}/${new Date().getDay()}`;

window.onload = function () {
  const user = getUser();

  if (!user) {
    beforeLoginform.style.display = "flex";
    form.style.display = "none";
  } else {
    beforeLoginform.style.display = "none";
    form.style.display = "flex";

    const prevTodoList = getTodoList();

    prevTodoList.forEach((todo) => {
      paintTodo(todo);
    });
  }
};

function getUser() {
  return window.localStorage.getItem("user");
}

function getTodoList() {
  const prevTodo = JSON.parse(window.localStorage.getItem(todoKey) || "[]");
  return prevTodo;
}

function setTodoList(todoList) {
  window.localStorage.setItem(todoKey, JSON.stringify(todoList));
}

function deleteTodo(e) {
  const span = e.target.nextElementSibling;

  const prevTodoList = getTodoList();
  const filteredTodo = prevTodoList.filter((todo_) => todo_ !== span.innerText);

  setTodoList(filteredTodo);

  span.style.textDecoration = "line-through";
}

function paintTodo(todo) {
  const listElement = document.createElement("li");
  const spanElement = document.createElement("span");
  const todoCheckbox = document.createElement("input");
  todoCheckbox.setAttribute("type", "checkbox");
  todoCheckbox.style.width = "20px";
  todoCheckbox.style.height = "20px";

  todoCheckbox.addEventListener("click", (e, todo) => {
    return deleteTodo(e, todo);
  });

  listElement.appendChild(todoCheckbox);

  spanElement.innerText = todo;
  listElement.appendChild(spanElement);

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
