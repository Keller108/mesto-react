import PopupWithForm from "./PopupWithForm";
import { useState } from 'react';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handlePlaceChange(e) {
        setLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        onAddPlace({
            name,
            link,
        })
        setName('')
        setLink('')
    }

return(
<PopupWithForm
            name='card-add'
            isOpen={isOpen}
            onClose={onClose}
            title='Новое место'
            buttonText='Создать'
            handleSubmit={handleSubmit}
        >
            <input
                className="form__input form__input_el_place"
                type="text"
                name="name"
                placeholder="Название"
                minLength={2}
                maxLength={30}
                required
                onChange={handleNameChange}
                value={name}
                />
            <span
                className="form__place-error input-error"
            />
            <input
                className="form__input form__input_el_pic-link"
                id="form__url"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
                onChange={handlePlaceChange}
                value={link}
            />
            <span
                className="form__url-error input-error"
            />
</PopupWithForm>
)
}

export default AddPlacePopup;