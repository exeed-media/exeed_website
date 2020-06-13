window.addEventListener("load", function (event) {
  var container = document.getElementById('submit_button');

  var anim = lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    initialSegment: [1,10],
    path: 'https://assets1.lottiefiles.com/packages/lf20_w7okEw.json'
  });

  container.addEventListener('mouseenter', function () {
    anim.playSegments([25, 70], true);
  });

  container.addEventListener('mouseleave', function () {
    anim.playSegments([0, 25], true);
  });

  container.addEventListener('click', function (e) {
    e.preventDefault();
    anim.playSegments([70, 175], true);
    setTimeout(function() {
      document.querySelector('.work-with-us-form').submit();
    }, 1000);
  });
});
