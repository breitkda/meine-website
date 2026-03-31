const button = document.getElementById("infoButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Gut gemacht! Dein JavaScript funktioniert.";
});