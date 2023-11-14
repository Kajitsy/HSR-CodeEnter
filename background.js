browser.storage.onChanged.addListener(function(changes, areaName) {
  if (areaName === 'local' && 'skipInput' in changes) {
    if (changes.skipInput.newValue) {
      browser.browserAction.setPopup({
        popup: 'gift.html'
      });
    } else {
      browser.browserAction.setPopup({
        popup: 'popup.html'
      });
    }
  }
});

browser.storage.local.get('skipInput').then(function(result) {
  if (result.skipInput) {
    browser.browserAction.setPopup({
      popup: 'gift.html'
    });
  } else {
    browser.browserAction.setPopup({
      popup: 'popup.html'
    });
  }
});
