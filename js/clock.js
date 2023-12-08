const clock = document.getElementById("clock");

function updateClock() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  clock.innerHTML = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
