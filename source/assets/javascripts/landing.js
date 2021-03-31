var videoContainer = document.querySelector('.landing-video');
var playButton = document.querySelector('.landing-video > a');
var video = document.querySelector('.landing-video video');
var closeButton = document.querySelector('.landing-video > img');

playButton.addEventListener('click', function() {
  videoContainer.classList.add("video-active");
  video.play();
  playButton.style.display = "none";
  video.style.zIndex = "1000";
  if (video.hasAttribute("controls")) {
     video.removeAttribute("controls");
  }
  else {
     video.setAttribute("controls", "controls");
  }
});

closeButton.addEventListener('click', function() {
  videoContainer.classList.remove("video-active");
  video.pause();
  playButton.style.display = "flex";
  video.style.zIndex = "1";
  video.removeAttribute("controls");
});
