var arrow = document.querySelector('.our-work > img');
var projects = document.querySelector('.projects');
var leftArrow = document.querySelector('.arrows img:first-child');

arrow.addEventListener('click', function() {
  projects.style.right = "0";
});

leftArrow.addEventListener('click', function() {
  projects.style.right = "-85%";
});
