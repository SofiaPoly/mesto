import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

const initialCards = [
  {
    name: 'Щенок Ричард',
    link: 'https://images.unsplash.com/photo-1591703291603-2150887a3db5?ixlib.jpg'
  },
  {
    name: 'Щенок Рокси',
    link: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib.jpg'
  },
  {
    name: 'Щенок Винни',
    link: 'https://images.unsplash.com/photo-1530041539828-114de669390e?ixlib.jpg'
  },
  {
    name: 'Щенок Дейзи',
    link: 'https://images.unsplash.com/photo-1591856419156-3979c9edd30f?ixlib.jpg'
  },
  {
    name: 'Щенок Френки',
    link: 'https://images.unsplash.com/photo-1583513702411-9dade5d3cb12?ixlib.jpg'
  },
  {
    name: 'Щенок Стич',
    link: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib.jpg'
  }
];

const config = {
  formSelector: '.form',
  inputSelector: '.form__item',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__error_visible',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
}

//объявление элементов попапа с редактированием профиля
const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popupForms = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('#profile-popup');
const popupOpenedClass = 'popup_opened';
const buttonCloseProfile = document.querySelector('.popup__close-button');
const profileForm = document.querySelector('#form-profile');
const nameInput = profileForm.querySelector('#name-profile');
const activityInput = profileForm.querySelector('#activity-profile');
const nameProfile = document.querySelector('.profile__name');
const textProfile = document.querySelector('.profile__text');

//объявление элементов попапа с добавлением новых карточек
const buttonProfileAdd = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('#cards-popup');
const buttonCloseCard = document.querySelector('#cards-button-close');
const cardForm = document.querySelector('#form-card');
const titleInput = cardForm.querySelector('#title-card');
const sourceInput = cardForm.querySelector('#source-card');
const elementContainer = document.querySelector('.elements');

//объявление элементов попапа с открытием карточки
const popupPhoto = document.querySelector('#photo-popup');
const buttonClosePhoto = document.querySelector('#photo-button-close');
const photoImage = document.querySelector('.popup__big-photo');
const photoName = document.querySelector('.popup__description');

const profileFormValidator = new FormValidator(config, profileForm);
const cardFormValidator = new FormValidator(config, cardForm);

function openProfilePopup() {
  nameInput.value = nameProfile.textContent;
  activityInput.value = textProfile.textContent;
  profileFormValidator.toggleSubmitButtonState(profileForm, config);
  openPopup(popupProfile);
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  textProfile.textContent = activityInput.value;
  closeProfilePopup();
};

function openCardPopup() {
  cardFormValidator.toggleSubmitButtonState(cardForm, config);
  openPopup(popupCard);
};

const handleCardSubmit = (evt) => {
  evt.preventDefault();
  const elementList = {
    name: titleInput.value,
    link: sourceInput.value,
    openPhoto: openPhoto,
  }
  addCard(elementList);
  closeCardPopup();
  cardForm.reset();
};

function openPhoto(element) {
  openPopup(popupPhoto);
  photoName.textContent = element._name;
  photoImage.src = element._link;
  photoImage.alt = element._name;
}

const addCard = (element) => {
  const cardTemplateSelector = '#cards-template';
  const card = new Card(element, cardTemplateSelector);
  const elementList = card.getCardElement();
  elementContainer.prepend(elementList);
};

initialCards.forEach((data) => {
  const element = {
    name: data.name,
    link: data.link,
    openPhoto: openPhoto,
  }
  addCard(element);
});

function openPopup(popup) {
  popup.classList.add(popupOpenedClass);
  document.addEventListener('keydown', closeEscapePopup);
}

function closePopup(popup) {
  popup.classList.remove(popupOpenedClass);
  document.removeEventListener('keydown', closeEscapePopup);
}

function closeProfilePopup() {
  closePopup(popupProfile);
};

function closeCardPopup() {
  closePopup(popupCard);
};

function closePhoto() {
  closePopup(popupPhoto);
}

popupForms.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if(evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
  });
});

function closeEscapePopup (evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

profileForm.addEventListener('submit', handleProfileFormSubmit);
buttonProfileEdit.addEventListener('click', openProfilePopup);
buttonCloseProfile.addEventListener('click', closeProfilePopup);

cardForm.addEventListener('submit', handleCardSubmit);
buttonProfileAdd.addEventListener('click', openCardPopup);
buttonCloseCard.addEventListener('click', closeCardPopup);

buttonClosePhoto.addEventListener('click', closePhoto);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
