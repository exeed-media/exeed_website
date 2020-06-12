window.addEventListener("load", function (event) {
  var container = document.getElementById('our_process');

  var anim = lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets10.lottiefiles.com/packages/lf20_GsnwT8.json'
  });

  var mobile_container = document.getElementById('our_process_mobile');

  var anim = lottie.loadAnimation({
    container: mobile_container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets7.lottiefiles.com/packages/lf20_FXF4w4.json'
  });
});
