// let foleyAudio;
let aiAudio;

function preload() {
  // foleyAudio = loadSound('orr_bounce_FULL_10-30-2020_mix2.mp3', audioLoaded, undefined, whileLoading);
  aiAudio = loadSound('sound_no_human.ogg', audioLoaded, undefined, whileLoading);
}

function audioLoaded(s) {
  console.log("loaded " + s + " sound file");
  loading.style.display = "block";
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function whileLoading() {
  console.log("waiting to load your file...");
}

function setup() {
  // foleyAudio.setVolume(0.8);
  // foleyAlpha = 0;
  aiAudio.setVolume(0.8);
  aiAlpha = 0;
}
