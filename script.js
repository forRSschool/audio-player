const mainBtn = document.querySelector('.main-btn');
const audio = document.querySelector('.audio');
const mainBtnImg = document.querySelector('.main-button-img');
const volumeBtn = document.querySelector('.volume-btn');
const volumeImg = document.querySelector('.volume-img');

let isPlayMusic = false;
let isMusicVolumeOn = true;

mainBtn.addEventListener('click', () => {
  isPlayMusic? musicPause() : musicPlay();
})

volumeBtn.addEventListener('click', () => {
  isMusicVolumeOn? musicVolumeOff() : musicVolumeOn();
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

function musicVolumeOff() {
  audio.volume = 0;
  isMusicVolumeOn = false;
  volumeImg.src = 'assets/icons/volume_off.png'
}

function musicVolumeOn() {
  audio.volume = 1;
  isMusicVolumeOn = true;
  volumeImg.src = 'assets/icons/volume_up.png'
}
