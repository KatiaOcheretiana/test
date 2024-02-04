const btnBurger = document.querySelector('#openBurger');
btnBurger.addEventListener('click', openPopup);
const btnClose = document.querySelector('#closeBurger');
btnClose.addEventListener('click', closePopup);

function openPopup() {
  document.getElementById('overlay').style.display = 'flex';
  toggleEl('.overlay');
  toggleEl('#openBurger');
  toggleEl('#closeBurger');
}
function toggleEl(selector) {
  const element = document.querySelector(selector);
  element.classList.toggle('active');
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  toggleEl('.overlay');
  toggleEl('#openBurger');

  toggleEl('#closeBurger');
}
