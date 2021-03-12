var halfCircle = document.querySelector('.team-half-circle');
//var blackHalfCircle = document.querySelector('.process-half-circle');
var context = halfCircle.getContext("2d");
//var contextBlack = blackHalfCircle.getContext("2d");

let x = 0,
    y = 0,
	  radius = 0,
	  endAngle = Math.PI,
	  startAngle = Math.PI * 2;

function createHalfCircle() {
  if (window.outerWidth >= 880) {
    halfCircle.width = 1000;
    halfCircle.height = 500;
    // blackHalfCircle.width = 1000;
    // blackHalfCircle.height = 500;
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
}
createHalfCircle();

window.addEventListener('resize', function(){
  createHalfCircle();
});




// // Obtener el elemento del DOM
// const canvas = document.querySelector('.process-half-circle');
// canvas.width = 400;
// canvas.height = 200;
// // Del canvas, obtener el contexto para poder dibujar
// const contexto = canvas.getContext("2d");
// // Estilo de dibujo
// // Grosor de línea
// contexto.lineWidth = 5;
// // Color de línea
// contexto.strokeStyle = "#212121";
// // Color de relleno
// contexto.fillStyle = "#FFCC80";
// // Las variables indican el nombre de cada argumento para
// // la función arc
// let a = 200,
// 	b =100,
// 	radio = 100,
// 	anguloInicio = Math.PI,
// 	anguloFin = Math.PI * 2;
// contexto.arc(a, b, radio, anguloInicio, anguloFin);
// // Una línea para la mitad del círculo, opcional
// // contexto.moveTo(a - radio - 2, b);
// // contexto.lineTo(a + radio + 2, b)
// // Hacemos que se dibuje
// contexto.stroke();
// // Lo rellenamos
// contexto.fill();
