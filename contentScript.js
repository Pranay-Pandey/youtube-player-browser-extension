// contentScript.js

function observeVideoPlaybackState() {
    const video = document.querySelector('video');
    if (!video) return;
  
    video.addEventListener('play', function() {
      chrome.runtime.sendMessage({ type: 'VIDEO_PLAYING' });
    });
  
    video.addEventListener('pause', function() {
      chrome.runtime.sendMessage({ type: 'VIDEO_PAUSED' });
    });
  }
  
  observeVideoPlaybackState();
  