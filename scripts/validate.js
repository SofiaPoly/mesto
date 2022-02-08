const config = {
  formSelector: '.form',
  inputSelector: '.form__item',
  inputErrorClass: 'form__item_type_error',
  errorClass: 'form__error_visible',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
}

const enableValidation = (data) => {
  const formList = Array.from(document.querySelectorAll(data.formSelector));
  formList.forEach((formElement) => {
    setEventListners(formElement, data);
  });
}

const setEventListners = (formElement, container) => {
  const inputList = Array.from(formElement.querySelectorAll(container.inputSelector));
  formElement.addEventListener('submit', handleSubmit);
  formElement.addEventListener('input', function() {
    toggleSubmitButtonState(formElement, container);
  });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      handleField(formElement, inputElement, container);
    });
  });
  toggleSubmitButtonState(formElement, container);
}

const handleSubmit = (evt) => {
  evt.preventDefault();
}

const handleField = (formElement, inputElement, container) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, container);
  } else {
    hideInputError(formElement, inputElement, container);
  }
}

const showInputError = (formElement, inputElement, container) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(container.inputErrorClass);
  errorElement.classList.add(container.errorClass);
  errorElement.textContent = inputElement.validationMessage;
}

const hideInputError = (formElement, inputElement, container) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(container.inputErrorClass);
  errorElement.classList.remove(container.errorClass);
  errorElement.textContent = '';
}

const toggleSubmitButtonState = (formElement, container) => {
  const buttonElement = formElement.querySelector(container.submitButtonSelector);
  buttonElement.disabled = !formElement.checkValidity();
  if (buttonElement.disabled) {
    buttonElement.classList.add(container.inactiveButtonClass);
  }
  else {
    buttonElement.classList.remove(container.inactiveButtonClass);
  }
}

enableValidation(config);
