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
let sortingLabelDirection = document.querySelectorAll('.sorting-label-direction');
let sortingLabel = document.querySelectorAll('.sorting-label');
let ticks = document.querySelectorAll('.tick');
let galleryItems = document.querySelectorAll('.gallery-item');
let bullits = document.querySelectorAll('.round-button-label');
let services = document.querySelectorAll('.services-label');

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

if (sortingLabel) {
  sortingLabel.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      let sortingLabelActive = document.querySelector('.sorting-label-active');
      sortingLabelActive.classList.remove('sorting-label-active');
      this.classList.add('sorting-label-active');
    });
  });
}

if (sortingLabelDirection) {
  sortingLabelDirection.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      let sortingLabelDirectionActive = document.querySelector('.sorting-label-direction-active');
      sortingLabelDirectionActive.classList.remove('sorting-label-direction-active');
      this.classList.add('sorting-label-direction-active');
    });
  });
}

if (ticks) {
  ticks.forEach(function (tick) {
    tick.addEventListener('click', function (evt) {
      evt.preventDefault();
      galleryItems.forEach(function (item) {
        item.classList.toggle('gallery-item-active');
        if (item.classList.contains('gallery-item-active')) {
          let bullit = document.querySelector('.' + item.dataset.bullit);
          let activeBullit = document.querySelector('.round-button-active');
          activeBullit.classList.remove('round-button-active');
          bullit.classList.add('round-button-active');
        }
      });
    });
  });
};

if (bullits) {
  bullits.forEach(function (bullit) {
    bullit.addEventListener('click', function (evt) {
      evt.preventDefault();
      let activeBullit = document.querySelector('.round-button-active');
      activeBullit.classList.remove('round-button-active');
      this.classList.add('round-button-active');
      let activeSlide = document.querySelector('.gallery-item-active');
      activeSlide.classList.remove('gallery-item-active');
      let newActiveSlide = document.querySelector('.' + this.dataset.slide);
      newActiveSlide.classList.add('gallery-item-active');
    });
  });
}

services.forEach(function(service){
  service.addEventListener('click', function(evt){
    evt.preventDefault();
    let activeService = document.querySelector('.service-variant-item-active');
    activeService.classList.remove('service-variant-item-active');
    let newActiveService = document.querySelector('.' + this.dataset.screen);
    newActiveService.classList.add('service-variant-item-active');
    let activeLabel = document.querySelector('.services-label-active');
    activeLabel.classList.remove('services-label-active');
    this.classList.add('services-label-active');
  });
});
