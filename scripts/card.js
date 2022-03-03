export default class Card {
  constructor (element, cardTemplateSelector) {
    this._name = element.name;
    this._link = element.link;
    this.openPhoto = element.openPhoto;
    this._template = document.querySelector(cardTemplateSelector).content;
  }

  _toggleLike() {
    this._likeButton.classList.toggle('element__like-button_active');
  };

  _deleteCard() {
    this._elementList.remove();
  };

  _setEventListeners() {
    this._likeButton = this._elementList.querySelector('.element__like-button');
    this._likeButton.addEventListener('click', () => {
      this._toggleLike();
    });

    this._deleteButton = this._elementList.querySelector('.element__delete-button');
    this._deleteButton.addEventListener('click', () => {
      this._deleteCard();
    });

    this._elementList.querySelector('.element__picture').addEventListener('click', () => {
      this.openPhoto(this);
    });
  }

  getCardElement() {
    this._elementList = this._template.querySelector('.element').cloneNode(true);
    this._setEventListeners();

    this._cardName = this._elementList.querySelector('.element__title');
    this._cardImage = this._elementList.querySelector('.element__picture');

    this._cardName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    return this._elementList;
  }
}
