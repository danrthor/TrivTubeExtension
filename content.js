function waitForVideoElement() {
  const player = document.querySelector('video');
  
  if (player) {
    player.addEventListener('ended', onVideoEnded);
    player.addEventListener('play', onVideoPlay);
  } else {
    setTimeout(waitForVideoElement, 1000);
  }
}

function onVideoEnded() {
  console.log('Video finished playing!');
  window.location.href = "https://ebay.com";
}

function onVideoPlay() {
  const player = document.querySelector('video');
  
  if (player && player.requestFullscreen) {
    player.requestFullscreen();
  } else if (player && player.mozRequestFullScreen) {
    player.mozRequestFullScreen();
  } else if (player && player.webkitRequestFullscreen) {
    player.webkitRequestFullscreen();
  } else if (player && player.msRequestFullscreen) {
    player.msRequestFullscreen();
  }
}

waitForVideoElement();