# YouTube Controller Chrome Extension 

## Overview

The YouTube Controller Chrome Extension allows users to control the playback of YouTube videos directly from their browser toolbar. It provides functionality to play or pause YouTube videos without needing to navigate to the YouTube webpage.

## Components

### 1. `manifest.json`

This file contains the metadata and configuration for the extension. It specifies permissions, scripts, and resources used by the extension.

### 2. `popup.html`

This HTML file defines the popup window that appears when the extension icon is clicked. It contains an input field to enter the YouTube video URL, a submit button, and a placeholder for the YouTube video player.

### 3. `contentScript.js`

This JavaScript file is injected into web pages to observe the playback state of YouTube videos. It sends messages to the background script when a video is played or paused.

### 4. `background.js`

This JavaScript file runs in the background and listens for messages from the content script. It forwards messages indicating video playback state changes to the popup script.

### 5. `popup.js`

This JavaScript file handles the interaction with the popup window. It initializes the YouTube player when a video URL is submitted, and it sends messages to the background script to control video playback based on user actions.

## Functionality

1. When the extension icon is clicked, a popup window appears.
2. Users can enter a YouTube video URL and click submit.
3. The extension initializes a YouTube player with the provided video URL.
4. Users can play or pause the video directly from the popup window.
5. When the video is played or paused, the extension sends messages to the background script.
6. The background script forwards these messages to the popup script to update the video playback state accordingly.

## Usage

1. Install the extension in Chrome.
2. Open a youtube video in your browser tab.
3. Pause the youtube video.
4. Click on the extension icon in the toolbar.
5. Enter a valid YouTube video URL in the input field.
6. You can right click on the extension UI and select inspect element to avoid the extension window to close.
7. Click the submit button.
8. The video will start playing automatically.
9. Play/Pause the youtube video in the browser tab to Pause/Play the extension video.
10. If it does not work, refresh the browser tab.

## Notes

- This extension requires permissions to access tabs to inject content scripts into web pages.
- The content script observes video playback state changes on YouTube pages.
- The extension uses the YouTube Iframe API to embed and control the YouTube player.
- The popup script communicates with the background script to control video playback.

**TIP** 
- To avoid the extension window to close, right click anywhere and select inspect element, this will keep the extension window open till the time no other tab is clicked.
- You can set the width and height of the player in popup.js file

**PRO-TIP**
- Right click on extension and select inspect element
- On the console type `document.URL`
- Copy paste this url on any new tab
- Now play the video, Now on any active youtube video tab, if you stop the player the extension page player will play and vice-versa
