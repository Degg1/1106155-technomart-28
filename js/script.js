let mapButton = document.querySelector('.map-container');
let map = document.querySelector('.popup-map');
let feedbackButton = document.querySelector('.map-link');
let feedback = document.querySelector('.popup-feedback');
let buyGoods = document.querySelector('.popup-good-in-cart');
let name = document.querySelector('.feedback-name');
let email = document.querySelector('.popup-feedback-email');
let letter = document.querySelector('.feedback-letter');
let feedbackForm = document.querySelector('.feedback-form');
let popupFeedback = document.querySelector('.popup-feedback');
let closeButtons = document.querySelectorAll('.popup-close');
let buttonsBuy = document.querySelectorAll('.popular-goods-button-buy');

if (mapButton) {
  mapButton.addEventListener('click', function (e) {
    e.preventDefault();
    map.classList.add('popup-show');
  });
}

if (feedbackButton) {
  feedbackButton.addEventListener('click', function (e) {
    e.preventDefault();
    feedback.classList.add('popup-show');
  });
}

closeButtons.forEach(function (el) {
  el.addEventListener('click', function () {
    el.parentElement.classList.remove('popup-show');
  });
});

buttonsBuy.forEach(function (xl) {
  xl.addEventListener('click', function () {
    buyGoods.classList.add('popup-show');
  });
});

if (feedbackForm) {
  feedbackForm.addEventListener('submit', function (evt) {
    if (!name.value || !email.value || !letter.value) {
      evt.preventDefault();
      popupFeedback.classList.remove('popup-error');
      popupFeedback.offsetWidth = popupFeedback.offsetWidth;
      popupFeedback.classList.add('popup-error');
    }
  });
};
