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

    // 👉 Icon wechseln
    if (navLinks.classList.contains("show")) {
      menuToggle.textContent = "✕";
    } else {
      menuToggle.textContent = "☰";
    }
  });
}
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.textContent = "☰";
  });
});
const galleryImages = document.querySelectorAll(".image-gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("lightbox-caption");

if (galleryImages.length > 0 && lightbox && lightboxImg && caption) {
  galleryImages.forEach(image => {
    image.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = image.src;
      caption.textContent = image.alt;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}