window.addEventListener("load", function (event) {
  var container = document.getElementById('our_process');

  var anim = lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets6.lottiefiles.com/packages/lf20_CSb3dP.json'
  });

  var mobile_container = document.getElementById('our_process_mobile');

  var anim = lottie.loadAnimation({
    container: mobile_container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets2.lottiefiles.com/packages/lf20_Nwp8B5.json'
  });
});
