chrome.runtime.onInstalled.addListener(() => {
  console.log('YouTube Video Logger extension installed!');
  
  chrome.tabs.query({ url: 'https://www.youtube.com/*' }, (tabs) => {
    tabs.forEach((tab) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      });
    });
  });
});