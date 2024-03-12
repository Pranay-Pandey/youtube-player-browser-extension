// // popup.js
var player;
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit');
    const urlInput = document.getElementById('url');
  
    submitButton.addEventListener('click', function () {
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      const youtubeUrl = urlInput.value.trim();
      if (youtubeUrl !== '') {
        console.log(youtubeUrl.split('v=')[1]);
        onYouTubeIframeAPIReady(youtubeUrl.split('v=')[1]);
      }



      function onYouTubeIframeAPIReady(videoId) {
        player = new YT.Player('player', {
            height: '10',
            width: '10',
            videoId: videoId,
            playerVars: {
            'playsinline': 1
            },
            events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
            }
        });
    }
    
    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        event.target.playVideo();
    }
    
    function onPlayerStateChange(event) {
    }
    
    function stopVideo() {
        player.stopVideo();
    }
    

    });
  });

  // popup.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'PLAY_VIDEO') {
      player.pauseVideo();
    } else if (message.type === 'PAUSE_VIDEO') {
      player.playVideo();
    }
  });
  