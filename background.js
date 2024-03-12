// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'VIDEO_PAUSED') {
      chrome.runtime.sendMessage({ type: 'PAUSE_VIDEO' });
    } else if (message.type === 'VIDEO_PLAYING') {
      chrome.runtime.sendMessage({ type: 'PLAY_VIDEO' });
    }
  });
  