document.getElementById("close-duplicates").addEventListener("click", () => {
  chrome.tabs.query({}, (tabs) => {
    let uniqueUrls = new Set();
    tabs.forEach((tab) => {
      if (uniqueUrls.has(tab.url)) {
        chrome.tabs.remove(tab.id);
      } else {
        uniqueUrls.add(tab.url);
      }
    });
  });
});

document.getElementById("suggest-tabs").addEventListener("click", () => {
  chrome.tabs.query({}, (tabs) => {
    const output = document.getElementById("output");
    output.innerHTML = `You have ${tabs.length} tabs open.`;
  });
});
