//объявление элементов попапа с редактированием профиля
const buttonProfileEdit = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('#profile-popup');
const popupOpenedClass = 'popup_opened';
const closeProfileButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.form__save-button');
const formElement = document.querySelector('#profile-container');
const nameInput = formElement.querySelector('#name');
const activityInput = formElement.querySelector('#activity');
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
const popupCards = document.querySelector('#cards-popup');
const closeCardsButton = document.querySelector('#cards-button-close');
const cardsElement = document.querySelector('#cards-container');
const titleInput = cardsElement.querySelector('#title');
const sourceInput = cardsElement.querySelector('#source');
const elementContainer = document.querySelector('.elements');

//объявление элементов попапа с открытием карточки
const popupPhoto = document.querySelector('#photo-popup');
const closePhotoButton = document.querySelector('#photo-button-close');
const photoLink = document.querySelector('.popup__big-photo');
const photoName = document.querySelector('.popup__description');

const getCardsElement = (element) => {
  const cardsTemplate = document.querySelector('#cards-template').content;
  const elementList = cardsTemplate.cloneNode(true);
  const nameCards = elementList.querySelector('.element__title');
  const linkCards = elementList.querySelector('.element__picture');
  const likeButton = elementList.querySelector('.element__like-button');
  const deleteButton = elementList.querySelector('.element__delete-button');

  nameCards.textContent = element.name;
  linkCards.src = element.link;

  function openPhoto() {
    popupPhoto.classList.toggle(popupOpenedClass);
    photoName.textContent = element.name;
    photoLink.src = element.link;
  }

  likeButton.addEventListener('click', likeButtonHandler);
  deleteButton.addEventListener('click', deleteButtonHandler);
  linkCards.addEventListener('click', openPhoto);

  return elementList;
}

const addCards = (element, wrap) => {
  const elementList = getCardsElement(element);
  wrap.prepend(elementList);
}

const likeButtonHandler = (evt) => {
  evt.target.classList.toggle('element__like-button_active');
};

const deleteButtonHandler = (evt) => {
  evt.target.closest('.element').remove();
}

const cardsSubmitHandler = (evt) => {
  evt.preventDefault();
  const elementList = {
    name: titleInput.value,
    link: sourceInput.value,
  }
  addCards(elementList, elementContainer);
  closeCardsPopup();
};

initialCards.forEach(element => {
  addCards(element, elementContainer);
});

function openProfilePopup() {
  popupProfile.classList.toggle(popupOpenedClass);
  nameInput.value = nameProfile.textContent;
  activityInput.value = textProfile.textContent;
};

function closeProfilePopup() {
  popupProfile.classList.remove(popupOpenedClass);
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  textProfile.textContent = activityInput.value;
  closeProfilePopup();
};

function openCardsPopup() {
  popupCards.classList.toggle(popupOpenedClass);
};

function closeCardsPopup() {
  popupCards.classList.remove(popupOpenedClass);
};

function closePhoto() {
  popupPhoto.classList.remove(popupOpenedClass);
}

formElement.addEventListener('submit', formSubmitHandler);
buttonProfileEdit.addEventListener('click', openProfilePopup);
closeProfileButton.addEventListener('click', closeProfilePopup);

cardsElement.addEventListener('submit', cardsSubmitHandler);
buttonProfileAdd.addEventListener('click', openCardsPopup);
closeCardsButton.addEventListener('click', closeCardsPopup);

closePhotoButton.addEventListener('click', closePhoto);

