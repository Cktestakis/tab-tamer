chrome.tabs.onCreated.addListener(() => {
  chrome.tabs.query({}, (tabs) => {
    if (tabs.length > 10) {
      chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "Tab Tamer Alert",
        message: "You have more than 20 tabs open!",
      });
    }
  });
});
