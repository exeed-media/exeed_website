window.addEventListener("load", function (event) {
  var menuIcon = document.querySelector(".menu-icon");

  menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("menu-icon-expanded");
  });
});
