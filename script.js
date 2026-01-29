
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("nav-links");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});
