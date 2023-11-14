document.getElementById('buttonColor').addEventListener('input', function() {
  var buttonColor = document.getElementById('buttonColor').value;
  browser.storage.local.set({
    buttonColor: buttonColor
  });
  updateButtonColors(buttonColor, null);
});

document.getElementById('buttonTextColor').addEventListener('input', function() {
  var buttonTextColor = document.getElementById('buttonTextColor').value;
  browser.storage.local.set({
    buttonTextColor: buttonTextColor
  });
  updateButtonColors(null, buttonTextColor);
});

document.getElementById('skipInput').addEventListener('change', function() {
  var skipInput = document.getElementById('skipInput').checked;
  browser.storage.local.set({
    skipInput: skipInput
  });
});

document.getElementById('reset').addEventListener('click', function() {
  var defaultButtonColor = '#800080';
  var defaultButtonTextColor = '#ffffff';
  var defaultSkipInput = false;
  document.getElementById('buttonColor').value = defaultButtonColor;
  document.getElementById('buttonTextColor').value = defaultButtonTextColor;
  document.getElementById('skipInput').checked = defaultSkipInput;
  browser.storage.local.set({
    buttonColor: defaultButtonColor,
    buttonTextColor: defaultButtonTextColor,
    skipInput: defaultSkipInput
  });
  updateButtonColors(defaultButtonColor, defaultButtonTextColor);
});

function updateButtonColors(buttonColor, buttonTextColor) {
  var buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    if (buttonColor) {
      buttons[i].style.backgroundColor = buttonColor;
    }
    if (buttonTextColor) {
      buttons[i].style.color = buttonTextColor;
    }
  }
}

browser.storage.local.get(['buttonColor', 'buttonTextColor', 'skipInput']).then(function(result) {
  var buttonColor = result.buttonColor ? result.buttonColor : '#800080';
  var buttonTextColor = result.buttonTextColor ? result.buttonTextColor : '#ffffff';
  var skipInput = result.skipInput ? result.skipInput : false;
  document.getElementById('buttonColor').value = buttonColor;
  document.getElementById('buttonTextColor').value = buttonTextColor;
  document.getElementById('skipInput').checked = skipInput;
  updateButtonColors(buttonColor, buttonTextColor);
});
