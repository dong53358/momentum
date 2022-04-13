const h1 = document.querySelector(".hello h1");

function handleh1Click() {
  h1.style.color = "pink";
  h1.innerText = "Thank you, Click!";
}

function handleh1Mouseenter() {
  h1.style.color = "blue";
  h1.innerText = "Mouse is here!";
}

function handleh1leave() {
  h1.style.color = "black";
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.background = "tomato";
}

function handleWindeowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOOD");
}

h1.addEventListener("click", handleh1Click);
h1.addEventListener("mouseenter", handleh1Mouseenter);
h1.addEventListener("mouseleave", handleh1leave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindeowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
