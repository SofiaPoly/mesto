const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupOpenedClass = 'popup_opened';
const buttonClose = document.querySelector('.popup__close-button');
const buttonSave = document.querySelector('.save-button');
let formProfile = document.querySelector('.popup__container');
let formName = formProfile.querySelector('.form__item_type_name');
let formActivity = formProfile.querySelector('.form__item_type_description');
let nameProfile = document.querySelector('.profile__name');
let textProfile = document.querySelector('.profile__text');

function popupOpened() {
  popup.classList.add('popup_opened');
  formName.value = nameProfile.textContent;
  formActivity.value = textProfile.textContent;
};

function popupClose() {
  popup.classList.remove('popup_opened');
};

function popupSave() {
  popup.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = formName.value;
  textProfile.textContent = formActivity.value;
};

formProfile.addEventListener('submit', formSubmitHandler);
buttonProfileEdit.addEventListener('click', popupOpened);
buttonClose.addEventListener('click', popupClose);
buttonSave.addEventListener('click', popupSave);
