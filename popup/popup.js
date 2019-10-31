Array.from(
  document.querySelectorAll('a')
).forEach(a => {
  a.addEventListener('click', event => {
    const url = a.getAttribute('href');
    chrome.tabs.create({ url });
    event.preventDefault();
  });
});
