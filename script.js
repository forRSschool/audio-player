const mainBtn = document.querySelector('.main-btn');
const audio = document.querySelector('.audio');
const mainBtnImg = document.querySelector('.main-button-img');
const volumeBtn = document.querySelector('.volume-btn');
const volumeImg = document.querySelector('.volume-img');
const volumeInput = document.querySelector('.volume-input');
const durationInput = document.querySelector('.duration-input');
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');

let isPlayMusic = false;
let isMusicVolumeOn = true;
let trackId = 0;

const tracks = [
  'Immortal',
  'No Talk',
  'Enough',
  'Skylines',
  'Get Trough',
  'Lofi Mallet',
  'Winning'
]

const artists = [
  'NEFFEX',
  'VYEN',
  'NEFFEX',
  'Anno Domini Beats',
  'NEFFEX',
  'Kwon',
  'NEFFEX'
]

btnPrev.addEventListener('click', prevMusic);
btnNext.addEventListener('click', nextMusic);

mainBtn.addEventListener('click', () => {
  isPlayMusic? musicPause() : musicPlay();
  isPlayMusic = !isPlayMusic;
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
  mainBtnImg.src = 'assets/icons/pause.png'
  setInterval(() => {
    durationInput.value = audio.currentTime;
  }, 500)
  
}

function musicPause() {
  audio.pause();
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

function nextMusic() {
  trackId++;
  console.log(trackId)
}

function prevMusic() {
  trackId--;
  console.log(trackId)
}

audio.onloadedmetadata = function() {
  durationInput.max = audio.duration;
  durationInput.value = audio.currentTime;

}



durationInput.addEventListener('input', () => {
  audio.currentTime = durationInput.value;
  if(isPlayMusic) {
  setInterval(() => {
    durationInput.value = audio.currentTime;
  }, 500)
}
})
