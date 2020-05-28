window.addEventListener("load", (event) => {
  var container = document.getElementById('menu_icon');
  var anim = lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets2.lottiefiles.com/packages/lf20_39nwLN.json'
  });

  let scrollPos = 0;
  const nav = document.querySelector('.logo');

  function checkPosition() {
    let windowY = window.scrollY;
    if (windowY < scrollPos) {
      // Scrolling UP
      nav.classList.add('is-visible');
      nav.classList.remove('is-hidden');
    } else {
      // Scrolling DOWN
      nav.classList.add('is-hidden');
      nav.classList.remove('is-visible');
    }
    scrollPos = windowY;
  }

  window.addEventListener('scroll', checkPosition);
});
