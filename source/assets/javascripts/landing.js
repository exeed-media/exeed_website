window.addEventListener("load", (event) => {
  var container = document.getElementById('landing_text');

  var anim = lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets3.lottiefiles.com/packages/lf20_zICTAX.json'
  });
});
