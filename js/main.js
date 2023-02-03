const button = document.querySelector(".navbar__ham");
const menu = document.querySelector(".navbar__links");
const overlay = document.querySelector("#overlay");

button.addEventListener("click", () => {
  button.classList.toggle("open");
  menu.classList.toggle("navbar__open");
  overlay.classList.toggle("show");
});
