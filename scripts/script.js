const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupOpenedClass = 'popup_opened';
const buttonClose = document.querySelector('.popup__close-button');
const buttonSave = document.querySelector('.form__save-button');
let formProfile = document.querySelector('.popup__container');
let formName = formProfile.querySelector('.form__author_name');
let formActivity = formProfile.querySelector('.form__description_activity');
let nameProfile = document.querySelector('.profile__name');
let textProfile = document.querySelector('.profile__text');

buttonProfileEdit.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  formName.value = nameProfile.textContent;
  formActivity.value = textProfile.textContent;
});

buttonClose.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

buttonSave.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
});

document.addEventListener('keydown', function (event) {
  if (event.code === 'Escape') {
    popup.classList.remove('popup_opened');
  }
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = formName.value;
  textProfile.textContent = formActivity.value;
};

formProfile.addEventListener('submit', formSubmitHandler);
