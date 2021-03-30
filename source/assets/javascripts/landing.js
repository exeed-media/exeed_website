var videoContainer = document.querySelector('.landing-video');
var playButton = document.querySelector('.landing-video > a');
var video = document.querySelector('.landing-video video');

playButton.addEventListener('click', function() {
  videoContainer.classList.add("video-active");
  video.play();
  playButton.style.display = "none";
  video.style.zIndex = "1000";
  if (video.hasAttribute("controls")) {
     video.removeAttribute("controls")
  }
  else {
     video.setAttribute("controls","controls")
  }
});
