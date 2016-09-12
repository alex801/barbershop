var link = document.querySelector('.login');
var popup = document.querySelector('.modal-content');
var close = popup.querySelector('.modal-content-close');
var form = popup.querySelector('form');
var login = popup.querySelector('[name=login]');
var password = popup.querySelector('[name=password]');
var storage = localStorage.getItem('login');
var mapButton = document.querySelector('.map');
var map = document.querySelector('.modal-content-map');
var mapClose = map.querySelector('.modal-content-close');

link.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('modal-content-show');

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('modal-content-show');
  popup.classList.remove('modal-error');
});

form.addEventListener('submit', function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.add('modal-error');
  } else {
    localStorage.setItem('login', login.value);
  }
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('modal-content-show')) {
      popup.classList.remove('modal-content-show');
      popup.classList.remove('modal-error');
    }
  }
});

mapButton.addEventListener('click', function(event) {
    event.preventDefault();
    map.classList.add('modal-content-map-show');
});

mapClose.addEventListener('click', function(event) {
    event.preventDefault();
    map.classList.remove('modal-content-map-show');
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (map.classList.contains('modal-content-map-show')) {
      map.classList.remove('modal-content-map-show');
    }
  }
});
