const form = document.querySelector("form");
const todoInput = document.getElementById("todo_input");
const todoListContainer = document.getElementById("todo_list_container");

const todoKey = `${new Date().getMonth() + 1}/${new Date().getDay()}`;

window.onload = function () {
  const prevTodo = getTodo();

  prevTodo.forEach((todo) => {
    const todoList = document.createElement("li");
    todoList.append(todo);
    todoListContainer.appendChild(todoList);
  });
};

function handleTodoInput(e) {
  e.preventDefault();

  saveTodo(todoInput?.value || "", () => {
    todoInput.value = "";
  });
}

function saveTodo(todo, resetValue) {
  if (todo) {
    const prevTodo = getTodo();
    const isExistTodo = prevTodo.find((todo_) => todo_ === todo);

    if (!isExistTodo) {
      window.localStorage.setItem(todoKey, JSON.stringify([...prevTodo, todo]));
      paintTodo(todo, resetValue);
    }
  }
}

function getTodo() {
  const prevTodo = JSON.parse(window.localStorage.getItem(todoKey) || "[]");
  return prevTodo;
}

function paintTodo(todo, resetValue) {
  const todoList = document.createElement("li");

  todoList.append(todo);
  todoListContainer.appendChild(todoList);

  resetValue();
}

form.addEventListener("submit", handleTodoInput);
