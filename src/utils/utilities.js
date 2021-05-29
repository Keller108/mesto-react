export const userDataElements = {
    name: document.querySelector('.profile__name'),
    about: document.querySelector('.profile__description'),
    avatar: document.querySelector('.profile__avatar-edit-btn')
}

export const validationObject = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-btn',
    inactiveButtonClass: 'form__submit-btn_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active',
    errorElement: '.input-error'
};

export const btnDelConfirm = document.querySelector('.submit-btn');
export const popupEditAvatarSelector = '.popup_type_update-avatar';
export const popupEditAvatar = document.querySelector('.popup_type_update-avatar');
export const popupEdit = document.querySelector('.popup_type_profile');
export const popupAdd = document.querySelector('.popup_type_card-add');
export const cardSelector = '.elements__card';
export const formUpdateAvatar = document.querySelector('#form-avatar');
export const formCard = document.querySelector('#form-card');
export const formProfile = document.querySelector('#form-profile');
export const lightBoxSelector = '.popup_type_lightbox';
export const fieldName = document.querySelector('#form__name');
export const fieldDescr = document.querySelector('#form__job');
export const popupEditOpenBtn = document.querySelector('.profile__edit-button');
export const popupAddOpenBtn = document.querySelector('.profile__add-button');
export const templateCard = document.querySelector('.template');
export const cardsContainer = document.querySelector('.elements__cards');
export const popupConfirmSelector = '.popup_type_confirm';
export const popupUserFormSelector = '.popup_type_profile';
export const popupFormSelector = '.popup_type_card-add';
export const submitBtns = document.querySelectorAll('.form__submit-btn');
export const lightboxImage = document.querySelector('.popup__image');
export const lightboxCaption = document.querySelector('.popup__caption');
export const btnEditAvatar = document.querySelector('.profile__avatar-edit-btn');
export const buttonEdit = popupEdit.querySelector('.form__submit-btn');
export const buttonAdd = popupAdd.querySelector('.form__submit-btn');
export const buttonEditAvatar = popupEditAvatar.querySelector('.form__submit-btn');