const beforeLoginform_ = document.getElementById("before_login_form");
const loginInput = document.getElementById("login_input");

function handleLoginSubmit(e) {
  e.preventDefault();

  const value = loginInput.value;
  window.localStorage.setItem("user", value);

  window.location.reload();
}

beforeLoginform_.addEventListener("submit", handleLoginSubmit);
