
browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);

    
    if (url.hostname === "chatgpt.com" || url.hostname === "www.chatgpt.com") {
      
      if (!url.searchParams.has('temporary-chat')) {
        url.searchParams.set('temporary-chat', 'true');
        return { redirectUrl: url.href };
      }
    }
  },
  {
    urls: [
      "*://chatgpt.com/*",        
      "*://www.chatgpt.com/*"
    ],
    types: ["main_frame"]  
  },
  ["blocking"]  
);
