import FormValidator from "./FormValidator.js";
import Card from "./Сard.js";
import { initialCards } from "../utils/constants.js"
import { config } from "../utils/constants.js";

//объявление элементов попапа с редактированием профиля
const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popupForms = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('#profile-popup');
const popupOpenedClass = 'popup_opened';
const profileForm = document.querySelector('#form-profile');
const nameInput = profileForm.querySelector('#name-profile');
const activityInput = profileForm.querySelector('#activity-profile');
const nameProfile = document.querySelector('.profile__name');
const textProfile = document.querySelector('.profile__text');

//объявление элементов попапа с добавлением новых карточек
const buttonProfileAdd = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('#cards-popup');
const cardForm = document.querySelector('#form-card');
const titleInput = cardForm.querySelector('#title-card');
const sourceInput = cardForm.querySelector('#source-card');
const elementContainer = document.querySelector('.elements');
const cardTemplateSelector = '#cards-template';

//объявление элементов попапа с открытием карточки
const popupPhoto = document.querySelector('#photo-popup');
const photoImage = document.querySelector('.popup__big-photo');
const photoName = document.querySelector('.popup__description');

const profileFormValidator = new FormValidator(config, profileForm);
const cardFormValidator = new FormValidator(config, cardForm);

const openProfilePopup = () => {
  nameInput.value = nameProfile.textContent;
  activityInput.value = textProfile.textContent;
  profileFormValidator.toggleSubmitButtonState(profileForm, config);
  profileFormValidator.resetValidation(profileForm, config);
  openPopup(popupProfile);
};

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  textProfile.textContent = activityInput.value;
  closePopup(popupProfile);
};

const openCardPopup = () => {
  cardFormValidator.toggleSubmitButtonState(cardForm, config);
  cardFormValidator.resetValidation(cardForm, config);
  openPopup(popupCard);
  cardForm.reset();
};

const handleCardSubmit = (evt) => {
  evt.preventDefault();
  const elementList = {
    name: titleInput.value,
    link: sourceInput.value,
    openPhoto: openPhoto,
  }
  addCard(elementList);
  closePopup(popupCard);
};

const openPhoto = (element) => {
  openPopup(popupPhoto);
  photoName.textContent = element._name;
  photoImage.src = element._link;
  photoImage.alt = element._name;
}

const createCard = (data) => {
  const card = new Card(data, cardTemplateSelector);
  const elementList = card.getCardElement();
  return elementList;
}

const addCard = (data) => {
  elementContainer.prepend(createCard(data));
};

initialCards.forEach((data) => {
  const element = {
    name: data.name,
    link: data.link,
    openPhoto: openPhoto,
  }
  addCard(element);
});

const openPopup = (popup) => {
  popup.classList.add(popupOpenedClass);
  document.addEventListener('keydown', closeEscapePopup);
}

const closePopup = (popup) => {
  popup.classList.remove(popupOpenedClass);
  document.removeEventListener('keydown', closeEscapePopup);
}

const closeEscapePopup = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

popupForms.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if(evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if(evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  });
});

profileForm.addEventListener('submit', handleProfileFormSubmit);
buttonProfileEdit.addEventListener('click', openProfilePopup);

cardForm.addEventListener('submit', handleCardSubmit);
buttonProfileAdd.addEventListener('click', openCardPopup);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
