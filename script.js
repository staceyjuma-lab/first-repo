let button = document.getElementById("helloButton");
let message = document.getElementById("message");

button.addEventListener("click", function() {
  message.textContent = "Thanks for visiting my portfolio!";
});