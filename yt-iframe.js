/*
* From https://developers.google.com/youtube/iframe_api_reference#Events
*/

  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '480',
      width: '640',
      videoId: 'FQiSK9Wo9kw',
      playerVars: { 'autoplay': 0, 'controls': 0 },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        // 'onClick': togglePlay
      }
    });
  }

  function onPlayerReady() {
    player.setVolume(75);
    // let vid = document.getElementById('player');
    // console.log(vid)
    // videoAmplitude.setInput(vid);
    // console.log("Connecting video to amplitude")
  }

  function onPlayerStateChange(event) {
    let foleyText = document.getElementById("foley-text")
    if(firstTime) {
      foleyText.style.opacity = 0.5;
      aiText.style.opacity = 0.5;
      // aiAlpha = 127;  // don't need if not doing amplitude msmt
      player.setVolume(75);
    }
    if (event.data == 1) { // is playing
      // togglePlay(true);
      foleyAudio.play(0.1);
      // aiAudio.play(0.1); // don't need if not doing amplitude msmt
      firstTime = false;
    } else if (event.data == 2) { // is paused
      // togglePlay(false);
      foleyAudio.pause(0.1);
      // aiAudio.pause(0.1);  // don't need if not doing amplitude msmt
      firstTime = false;
    } else if (event.data == 0) { // is stopped
      foleyAudio.stop(0.1);
      // aiAudio.stop(0.1); // don't need if not doing amplitude msmt
    }
  }
