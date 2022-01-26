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
    link: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib.jpg'
  },
  {
    name: 'Щенок Дейзи',
    link: 'https://images.unsplash.com/photo-1591856419156-3979c9edd30f?ixlib.jpg'
  }
];

const elementContainer = document.querySelector('.elements');
const cardsTemplate = document.querySelector('#cards-template').content;

const addCards = (element) => {
  const elementList = cardsTemplate.cloneNode(true);
  elementList.querySelector('.element__picture').src = element.link;
  elementList.querySelector('.element__title').textContent = element.name;

  elementContainer.append(elementList);
}

// const cardSubmitHandler = (evt) => {
// evt.preventDefault();
// const card ={
// name:
// link:
// }
// addCards(card);
//};


initialCards.forEach(element => {
  addCards(element);
})
