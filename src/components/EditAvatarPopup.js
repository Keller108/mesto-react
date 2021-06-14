import PopupWithForm from './PopupWithForm';
import { useRef} from 'react';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        })
        e.target.reset()
    }
    return (
        <PopupWithForm
            name='update-avatar'
            isOpen={isOpen}
            onClose={onClose}
            title='Обновить аватар'
            buttonText='Сохранить'
            handleSubmit={handleSubmit}
        >
            <input
                className="form__input form__input_ava_pic-link"
                id="form__avatar-url"
                type="url"
                name="avatar" placeholder="Ссылка на картинку"
                required
                defaultValue=''
                ref={avatarRef}
            />
            <span
                className="form__avatar-url-error input-error"
            />
        </PopupWithForm>
    )
}

export default EditAvatarPopup;