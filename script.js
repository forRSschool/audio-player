const mainBtn = document.querySelector('.main-btn');
const audio = document.querySelector('.audio');
const mainBtnImg = document.querySelector('.main-button-img');
const volumeBtn = document.querySelector('.volume-btn');
const volumeImg = document.querySelector('.volume-img');
const volumeInput = document.querySelector('.volume-input');
const durationInput = document.querySelector('.duration-input');
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');
const trackTitle = document.querySelector('.track-title');
const artistName = document.querySelector('.artist-name');
const trackImage = document.querySelector('.track-image');
const time = document.querySelector('.time');
const fullTime = document.querySelector('.full-time');
const cover = document.querySelector('.cover');

let isPlayMusic = false;
let isMusicVolumeOn = true;
let trackId = 0;

const tracks = [
  'Immortal',
  'No Talk',
  'Enough',
  'Skylines',
  'Get Through',
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

const covers = [
  'cover1',
  'cover2',
  'cover3',
  'cover4',
  'cover5',
  'cover6',
  'cover7'
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

const interval = () => {
  durationInput.value = audio.currentTime;
  console.log(audio.currentTime)
}   

function musicPlay() {
  audio.play();
  mainBtnImg.src = 'assets/icons/pause.png'
  setInterval(interval, 500)
}

function musicPause() {
  audio.pause();
  mainBtnImg.src = 'assets/icons/play.png';
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
  if(trackId === tracks.length - 1) {
      trackId = 0;
  } else {
    trackId++;
  }
  loadTrack()
}

function prevMusic() {
  if(trackId === 0) {
      trackId = tracks.length - 1;
  } else {
    trackId--;
  }
  loadTrack()
}

function loadTrack() {
    isPlayMusic = true
    audio.src = `./assets/tracks/${tracks[trackId]}.mp3`;
    musicPlay()
    trackTitle.innerHTML = tracks[trackId];
    artistName.innerHTML = artists[trackId];
    trackImage.src = `./assets/covers/${covers[trackId]}.jpg`
    cover.style.backgroundImage = `url('./assets/covers/${covers[trackId]}.jpg')`;
}


durationInput.addEventListener('input', () => {
  audio.currentTime = durationInput.value;
  if(isPlayMusic) {
    setInterval(() => {
      durationInput.value = audio.currentTime;
    }, 500)
  }
})

function setTime(input, output) {
  const minutes = Math.floor(input / 60);
  const seconds = Math.floor(input % 60);

  if(seconds < 10) {
    output.innerHTML = minutes + ':0' + seconds;
  } else {
    output.innerHTML = minutes + ':' + seconds;
  }
}


audio.addEventListener('timeupdate', () => {
  const currentTime = Math.floor(audio.currentTime);
  setTime(currentTime, time);
  setTime(audio.duration, fullTime);
  durationInput.max = audio.duration;
  durationInput.value = audio.currentTime;
})