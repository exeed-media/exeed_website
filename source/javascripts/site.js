window.addEventListener("load", (event) => {
  const menuIcon = document.querySelector(".menu-icon");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("menu-icon-expanded");
  });
});
