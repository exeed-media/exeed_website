window.addEventListener("load", function (event) {
  const menuIcon = document.querySelector(".menu-icon");

  menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("menu-icon-expanded");
  });
});
