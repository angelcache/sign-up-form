/**
 * Plays music when music note is clicked
 */
musicIcon = document.querySelector('.music-icon')
musicIcon.addEventListener("click", playAudio);

function playAudio() {
  audio = document.querySelector('.cafe-audio');

  audio.classList.toggle("music-on");
  musicIcon.classList.add("spin");

  if (audio.classList.contains("music-on")) {
    audio.play();
    musicIcon.setAttribute('src', "assets/img/music-icon-on.png");
  } else {
    audio.pause();
    musicIcon.setAttribute('src', "assets/img/music-icon.png")
  }

  setTimeout(() => {
    musicIcon.classList.remove("spin");
  }, 2000);
}