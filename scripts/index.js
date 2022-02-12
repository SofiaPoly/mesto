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

//объявление элементов для валидации форм
const formElementProfile = document.querySelector('#form-profile');
const formElementCard = document.querySelector('#form-card');

const getCardElement = (element) => {
  const cardTemplate = document.querySelector('#cards-template').content;
  const elementList = cardTemplate.cloneNode(true);
  const cardName = elementList.querySelector('.element__title');
  const cardImage = elementList.querySelector('.element__picture');
  const likeButton = elementList.querySelector('.element__like-button');
  const deleteButton = elementList.querySelector('.element__delete-button');

  cardName.textContent = element.name;
  cardImage.src = element.link;
  cardImage.alt = element.name;

  function openPhoto() {
    openPopup(popupPhoto);
    photoName.textContent = element.name;
    photoImage.src = element.link;
    photoImage.alt = element.name;
  }

  likeButton.addEventListener('click', toggleLike);
  deleteButton.addEventListener('click', deleteCard);
  cardImage.addEventListener('click', openPhoto);

  return elementList;
}

const addCard = (element, wrap) => {
  const elementList = getCardElement(element);
  wrap.prepend(elementList);
};

const toggleLike = (evt) => {
  evt.target.classList.toggle('element__like-button_active');
};

const deleteCard = (evt) => {
  evt.target.closest('.element').remove();
};

const handleCardSubmit = (evt) => {
  evt.preventDefault();
  const elementList = {
    name: titleInput.value,
    link: sourceInput.value,
  }
  addCard(elementList, elementContainer);
  closeCardPopup();
  cardForm.reset();
};

initialCards.forEach(element => {
  addCard(element, elementContainer);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEscapePopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEscapePopup);
}

function openProfilePopup() {
  nameInput.value = nameProfile.textContent;
  activityInput.value = textProfile.textContent;
  toggleSubmitButtonState(formElementProfile, config);
  openPopup(popupProfile);
};

function closeProfilePopup() {
  closePopup(popupProfile);
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  textProfile.textContent = activityInput.value;
  closeProfilePopup();
};

function openCardPopup() {
  toggleSubmitButtonState(formElementCard, config);
  openPopup(popupCard);
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
