// const form = document.querySelector("form");
// const todoInput = document.getElementById("todo_input");
// const todoListContainer = document.getElementById("todo_list_container");

// function handleTodoInput(e) {
//   e.preventDefault();

//   const todoKey = `${new Date().getMonth() + 1}/${new Date().getDay()}`;
//   saveTodo(todoKey, todoInput?.value || "", () => {
//     todoInput.value = "";
//   });
// }

// function saveTodo(key, todo, resetValue) {
//   if (todo) {
//     const prevTodo = JSON.parse(window.localStorage.getItem(key) || "[]");

//     const isExistTodo = prevTodo.find((todo_) => todo_ === todo);

//     if (!isExistTodo) {
//       window.localStorage.setItem(key, JSON.stringify([...prevTodo, todo]));
//       paintTodo(todo, resetValue);
//     }
//   }
// }

// function paintTodo(todo, resetValue) {
//   const todoList = document.createElement("li");

//   todoList.append(todo);
//   todoListContainer.appendChild(todoList);

//   resetValue();
// }

// form.addEventListener("submit", handleTodoInput);
