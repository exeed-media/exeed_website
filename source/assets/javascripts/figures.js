var halfCircle = document.querySelector('.team-half-circle');
var context = halfCircle.getContext("2d");

let x = 0,
    y = 0,
	  radius = 0,
	  endAngle = Math.PI,
	  startAngle = Math.PI * 2;

    if (window.outerWidth >= 880) {
      halfCircle.width = 1000;
      halfCircle.height = 500;
      x = 820;
      radius = 200;
    }
    else {
      halfCircle.width = 400;
      halfCircle.height = 200;
      x = 200;
      radius = 100;
    }
    context.fillStyle = "white";
    context.arc(x, y, radius, startAngle, endAngle);
    context.stroke();
    context.fill();

window.addEventListener('resize', function(){
  if (window.outerWidth >= 880) {
    halfCircle.width = 1000;
    halfCircle.height = 500;
    x = 820;
    radius = 200;
  }
  else {
    halfCircle.width = 400;
    halfCircle.height = 200;
    x = 200;
    radius = 100;
  }
  context.fillStyle = "white";
  context.arc(x, y, radius, startAngle, endAngle);
  context.stroke();
  context.fill();
});
