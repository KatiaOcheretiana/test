function openPopup(modalId, openBtnId, closeBtnId) {
  document.getElementById(modalId).style.display = 'flex';
  toggleEl('#' + modalId);
  toggleEl(openBtnId);
  toggleEl(closeBtnId);
}

function closePopup(modalId, openBtnId, closeBtnId) {
  document.getElementById(modalId).style.display = 'none';
  toggleEl('#' + modalId);
  toggleEl(openBtnId);
  toggleEl(closeBtnId);
}

function toggleEl(selector) {
  const element = document.querySelector(selector);
  element.classList.toggle('active');
}

// first menu

const btnBurger = document.querySelector('#openBurger');
btnBurger.addEventListener('click', () =>
  openPopup('overlay', '#openBurger', '#closeBurger')
);
const btnClose = document.querySelector('#closeBurger');
btnClose.addEventListener('click', () =>
  closePopup('overlay', '#openBurger', '#closeBurger')
);

// menu aften danner
const moreInfoBurger = document.querySelector('#openBurger-more-info');
moreInfoBurger.addEventListener('click', () =>
  openPopup(
    'overlay-more-info',
    '#openBurger-more-info',
    '#closeBurger-more-info'
  )
);
const moreInfoBurgerClose = document.querySelector('#closeBurger-more-info');
moreInfoBurgerClose.addEventListener('click', () =>
  closePopup(
    'overlay-more-info',
    '#openBurger-more-info',
    '#closeBurger-more-info'
  )
);
