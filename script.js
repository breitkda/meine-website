const button = document.getElementById("infoButton");
const message = document.getElementById("message");

if (button && message) {
  button.addEventListener("click", function () {
    message.textContent = "E-Mail: beispiel@mail.de";
  });
}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}