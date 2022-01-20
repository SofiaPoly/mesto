const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupOpenedClass = 'popup_opened';
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.form__save-button');
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.form__item_type_name');
let activityInput = formElement.querySelector('.form__item_type_description');
let nameProfile = document.querySelector('.profile__name');
let textProfile = document.querySelector('.profile__text');

function openPopup() {
  nameInput.value = nameProfile.textContent;
  activityInput.value = textProfile.textContent;
  popup.classList.add(popupOpenedClass);
};

function closePopup() {
  popup.classList.remove(popupOpenedClass);
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  textProfile.textContent = activityInput.value;
  closePopup();
};

formElement.addEventListener('submit', formSubmitHandler);
buttonProfileEdit.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
