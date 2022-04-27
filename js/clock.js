const clock = document.querySelector("#clock");

function getClock() {
  let date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}`;

  // clock.innerText = new Date().toLocaleTimeString();
}

getClock();
setInterval(getClock, 1000);
