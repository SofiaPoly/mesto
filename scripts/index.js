//объявление элементов попапа с редактированием профиля
const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('#profile-popup');
const popupOpenedClass = 'popup_opened';
const buttonCloseProfile = document.querySelector('.popup__close-button');
const profileForm = document.querySelector('#profile-container');
const nameInput = profileForm.querySelector('#name-profile');
const activityInput = profileForm.querySelector('#activity-profile');
const nameProfile = document.querySelector('.profile__name');
const textProfile = document.querySelector('.profile__text');

//объявление элементов попапа с добавлением новых карточек
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

const buttonProfileAdd = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('#cards-popup');
const buttonCloseCard = document.querySelector('#cards-button-close');
const cardForm = document.querySelector('#cards-container');
const titleInput = cardForm.querySelector('#title-card');
const sourceInput = cardForm.querySelector('#source-card');
const elementContainer = document.querySelector('.elements');

//объявление элементов попапа с открытием карточки
const popupPhoto = document.querySelector('#photo-popup');
const buttonClosePhoto = document.querySelector('#photo-button-close');
const photoImage = document.querySelector('.popup__big-photo');
const photoName = document.querySelector('.popup__description');

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
  document.forms.card.reset();
};

initialCards.forEach(element => {
  addCard(element, elementContainer);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openProfilePopup() {
  nameInput.value = nameProfile.textContent;
  activityInput.value = textProfile.textContent;
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
  openPopup(popupCard);
};

function closeCardPopup() {
  closePopup(popupCard);
};

function closePhoto() {
  closePopup(popupPhoto);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);
buttonProfileEdit.addEventListener('click', openProfilePopup);
buttonCloseProfile.addEventListener('click', closeProfilePopup);

cardForm.addEventListener('submit', handleCardSubmit);
buttonProfileAdd.addEventListener('click', openCardPopup);
buttonCloseCard.addEventListener('click', closeCardPopup);

buttonClosePhoto.addEventListener('click', closePhoto);
