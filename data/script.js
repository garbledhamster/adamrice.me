const revealItems = document.querySelectorAll('.clickToRevealItem');
revealItems.forEach(item => {
  const defaultTitle = item.getAttribute('data-title');
  const extraInfo = item.getAttribute('data-extra');
  item.addEventListener('click', () => {
    if (item.textContent.includes(':')) {
      item.textContent = defaultTitle;
    } else {
      item.textContent = defaultTitle + ': ' + extraInfo;
    }
  });
});
