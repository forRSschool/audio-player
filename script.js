const mainBtn = document.querySelector('.main-btn');
const audio = document.querySelector('.audio');
const mainBtnImg = document.querySelector('.main-button-img');
const volumeBtn = document.querySelector('.volume-btn');
const volumeImg = document.querySelector('.volume-img');
const volumeInput = document.querySelector('.volume-input');
const durationInput = document.querySelector('.duration-input');

let isPlayMusic = false;
let isMusicVolumeOn = true;

mainBtn.addEventListener('click', () => {
  isPlayMusic? musicPause() : musicPlay();
})

volumeBtn.addEventListener('click', () => {
  isMusicVolumeOn? musicVolumeOff() : musicVolumeOn();
})

volumeInput.addEventListener("input", (event) => {
  audio.volume = event.target.value / 100;
  if(audio.volume) {
    musicVolumeOn();
  } else {
    musicVolumeOff();
  }
});

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
  audio.volume = volumeInput.value / 100 || 0.1;
  isMusicVolumeOn = true;
  volumeImg.src = 'assets/icons/volume_up.png'
}

audio.onloadedmetadata = function() {
  durationInput.max = audio.duration;
  durationInput.value = audio.currentTime;
}

if(audio.play()) {
  setInterval(() => {
    durationInput.value = audio.currentTime;
  }, 500)
}

durationInput.addEventListener('input', () => {
  audio.currentTime = durationInput.value;
})
