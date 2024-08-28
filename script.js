const mainBtn = document.querySelector('.main-btn');
const audio = document.querySelector('.audio');
const mainBtnImg = document.querySelector('.main-button-img');

let isPlayMusic = false;

mainBtn.addEventListener('click', () => {
  isPlayMusic? musicPause() : musicPlay();
})

function musicPlay() {
  audio.play();
  isPlayMusic = true;
  mainBtnImg.src = 'assets/icons/pause.png'
}

function musicPause() {
  audio.pause();
  isPlayMusic = false;
  mainBtnImg.src = 'assets/icons/play.png'
}

function nextMusic() {

}

function prevMusic() {

}