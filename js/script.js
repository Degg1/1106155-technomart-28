
'use strict';

let mapButton = document.querySelector('.map-container');
let map = document.querySelector('.popup-map');
let feedbackButton = document.querySelector('.map-link');
let feedback = document.querySelector('.popup-feedback');
let buyGoods = document.querySelector('.popup-good-in-cart');


mapButton.addEventListener('click', function (e) {
    e.preventDefault();
    map.classList.add('popup-show');

});

feedbackButton.addEventListener('click', function (e) {
    e.preventDefault();
    feedback.classList.add('popup-show');

});

document.querySelectorAll('.popup-close').forEach(function (el) {
    el.addEventListener('click', function () {
        el.parentElement.classList.remove('popup-show');
    });
});

document.querySelectorAll('.popular-goods-button-buy').forEach(function (xl) {
    xl.addEventListener('click', function () {
 buyGoods.classList.add('popup-show');
    });
});






