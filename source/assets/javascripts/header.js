window.addEventListener("load", function (event) {
  var container = document.getElementById('menu_icon');
  var anim = lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    initialSegment: [1, 180],
    path: 'https://assets1.lottiefiles.com/packages/lf20_OyAQAL.json'
  });

  container.addEventListener('click', function (e) {
    e.preventDefault();

    if(container.classList.contains("menu-icon-expanded")) {
      anim.playSegments([[200, 215], [215, 220]], true);
    } else {
      anim.playSegments([[425, 445], [80, 190], [1, 180]], true);
    }
  });


  var scrollPos = 0;
  var nav = document.querySelector('.logo');

  function checkPosition() {
    var windowY = window.scrollY;
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


  var menuLinks = document.querySelectorAll('nav.main-links a');

  menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener('click', function(e) {
      container.click();
    });
  })
});
