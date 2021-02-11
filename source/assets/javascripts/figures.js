var halfCircle = document.querySelector('.team-half-circle');

halfCircle.width = 400;
halfCircle.height = 200;

var context = halfCircle.getContext("2d");
context.fillStyle = "#fff";

let x = 200,
    y = 0,
	  radius = 100,
	  endAngle = Math.PI,
	  startAngle = Math.PI * 2;

context.arc(x, y, radius, startAngle, endAngle);
context.stroke();
context.fill();
