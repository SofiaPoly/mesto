const buttonProfileEdit = document.querySelector('.profile__edit-button');
const buttonProfileAdd = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('#profile-popup');
const popupCards = document.querySelector('#cards-popup');
const popupOpenedClass = 'popup_opened';
const closeProfileButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.form__save-button');
const closeCardsButton = document.querySelector('#cards-button-close');
const formElement = document.querySelector('#profile-container');
const cardsElement = document.querySelector('#cards-container');
const nameInput = formElement.querySelector('#name');
const activityInput = formElement.querySelector('#activity');
const titleInput = cardsElement.querySelector('#title');
const sourceInput = cardsElement.querySelector('#source');
const nameProfile = document.querySelector('.profile__name');
const textProfile = document.querySelector('.profile__text');

function openProfilePopup() {
  nameInput.value = nameProfile.textContent;
  activityInput.value = textProfile.textContent;
  popupProfile.classList.toggle(popupOpenedClass);
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
buttonProfileEdit.addEventListener('click', openProfilePopup);
closeProfileButton.addEventListener('click', openProfilePopup);


const initialCards = [
  {
    name: 'Щенок Ричард',
    link: 'https://images.unsplash.com/photo-1591703291603-2150887a3db5?ixlib.jpg'
  },
  {
    name: 'Щенок Стич',
    link: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib.jpg'
  },
  {
    name: 'Щенок Винни',
    link: 'https://images.unsplash.com/photo-1530041539828-114de669390e?ixlib.jpg'
  },
  {
    name: 'Щенок Рокси',
    link: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib.jpg'
  },
  {
    name: 'Щенок Френки',
    link: 'https://images.unsplash.com/photo-1583513702411-9dade5d3cb12?ixlib.jpg'
  },
  {
    name: 'Щенок Дейзи',
    link: 'https://images.unsplash.com/photo-1591856419156-3979c9edd30f?ixlib.jpg'
  }
];

const elementContainer = document.querySelector('.elements');

function openCardsPopup() {
  popupCards.classList.toggle(popupOpenedClass);
};

function closeCardsPopup() {
  popupCards.classList.remove(popupOpenedClass);
};

const addCards = (element) => {
  const cardsTemplate = document.querySelector('#cards-template').content;
  const elementList = cardsTemplate.cloneNode(true);
  elementList.querySelector('.element__title').textContent = element.name;
  elementList.querySelector('.element__picture').src = element.link;
  elementContainer.prepend(elementList);
}

//const newCards = (element) => {
  //const elementList = addCards(element);
  //elementContainer.prepend(elementList);
//}

const cardsSubmitHandler = (evt) => {
  evt.preventDefault();
  const card = {
    name: titleInput.value,
    link: sourceInput.value,
  }
  addCards(card);
  closeCardsPopup();
};

cardsElement.addEventListener('submit', cardsSubmitHandler);
buttonProfileAdd.addEventListener('click', openCardsPopup);
closeCardsButton.addEventListener('click', openCardsPopup);

initialCards.forEach(element => {
  addCards(element);
})
