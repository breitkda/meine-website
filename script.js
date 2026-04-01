const button = document.getElementById("infoButton");
const message = document.getElementById("message");

if (button && message) {
  button.addEventListener("click", function () {
    message.textContent = "E-Mail: beispiel@mail.de";
  });
}