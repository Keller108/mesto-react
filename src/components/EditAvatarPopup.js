function EditAvatarPopup({isOpen, onClose}) {
    return (
        <PopupWithForm
            name='update-avatar'
            isOpen={isOpen}
            onClose={onClose}
            title='Обновить аватар'
            buttonText='Сохранить'
        >
            <input
                className="form__input form__input_ava_pic-link"
                id="form__avatar-url"
                type="url"
                name="avatar" placeholder="Ссылка на картинку"
                required
            />
            <span
                className="form__avatar-url-error input-error"
            />
        </PopupWithForm>
    )
}

export default EditAvatarPopup;