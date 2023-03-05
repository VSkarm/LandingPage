const button = document.querySelector(".navbar__ham");
const menu = document.querySelector(".navbar__links");
const overlay = document.querySelector("#overlay");

button.addEventListener("click", function(){
  button.classList.toggle("open");
  menu.classList.toggle("navbar__open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", function(){
  overlay.classList.toggle("show");
  button.classList.toggle("open");
  menu.classList.toggle("navbar__open");
});


function updateTime() {
  const now = new Date();
  const year = now.getFullYear().toString().slice(-2);
  const month = ('0' + (now.getMonth() + 1)).slice(-2);
  const day = ('0' + now.getDate()).slice(-2);
  const hours = ('0' + now.getHours()).slice(-2);
  const minutes = ('0' + now.getMinutes()).slice(-2);
  const datetimeStr = `${day}/${month}/${year} ${hours}:${minutes}`;
  document.getElementById('datetime').innerHTML = datetimeStr;
}

updateTime();
setInterval(updateTime, 60000); // Update every minute

