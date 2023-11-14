document.getElementById('submit').textContent = browser.i18n.getMessage("submit");
document.getElementById('submit').addEventListener('click', function() {
  var code = document.getElementById('code').value;
  var locales = navigator.language.slice(0, 2);
  document.getElementById('frame').src = "https://hsr.hoyoverse.com/gift?code=" + code;
  document.getElementById('frame').style.display = 'block';
  document.getElementById('code').style.display = 'none';
  document.getElementById('submit').style.display = 'none';
  document.getElementById('share').style.display = 'none';
});
document.getElementById('share').textContent = browser.i18n.getMessage("share");
document.getElementById('share').addEventListener('click', function() {
  var code = document.getElementById('code').value;
  var locales = navigator.language.slice(0, 2);
  var url = "https://hsr.hoyoverse.com/gift?code=" + code;
  navigator.clipboard.writeText(url);
});
browser.storage.local.get(['buttonColor', 'buttonTextColor']).then(function(result) {
  if (result.buttonColor) {
    document.documentElement.style.setProperty('--button-color', result.buttonColor);
  }
  if (result.buttonTextColor) {
    document.documentElement.style.setProperty('--button-text-color', result.buttonTextColor);
  }
});