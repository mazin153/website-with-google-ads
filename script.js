document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".main-nav");
  const yearEl = document.getElementById("year");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
