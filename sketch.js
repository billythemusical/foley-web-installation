let foleyAudio;

function preload() {
  foleyAudio = loadSound('orr_bounce_FULL_10-30-2020_mix2.mp3', audioLoaded, undefined, whileLoading);
}

function audioLoaded(s) {
  console.log("loaded " + s + " sound file");
  loading.style.display = "block";
}

function whileLoading() {
  console.log("waiting to load your file...");
}

function setup() {
  foleyAudio.setVolume(0.8);
  foleyAlpha = 0;
}
