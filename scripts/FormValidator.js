export default class FormValidator {
  constructor (settings, form) {
    this._form = form;
    this._inputSelector = settings.inputSelector;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._buttonElement = form.querySelector(this._submitButtonSelector);
  }

  enableValidation() {
    this._setEventListners(this._form);
  }

  _setEventListners() {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this.toggleSubmitButtonState();
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._handleField(inputElement);
        this.toggleSubmitButtonState();
      });
    });
  }

  _handleField(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  toggleSubmitButtonState() {
    this._buttonElement.disabled = !this._form.checkValidity();
    if (this._buttonElement.disabled) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
    }
    else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }
}
