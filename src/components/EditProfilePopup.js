import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useState, useContext, useEffect} from 'react';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const currentUser = useContext(CurrentUserContext);
    
    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen])

    function handleChangeAbout(e) {
        setDescription (e.target.value)
    }

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({ 
            name,
            about: description,
         })
    }

    return(
        <PopupWithForm
            name='profile'
            isOpen={isOpen}
            onClose={onClose}
            handleSubmit = {handleSubmit}
            title='Редактировать профиль'
            buttonText='Редактировать'
        >    
            <input
                className="form__input form__input_el_name"
                id="form__name"
                type="text"
                name="name"
                placeholder="Имя"
                minLength={2}
                maxLength={40}
                onChange={handleChangeName}
                value={name || ''}
                required
                />
            <span
            className="form__name-errorinput-error"/>
            <input
                className="form__input form__input_el_descr"
                id="form__job"
                type="text"
                name="about"
                placeholder="Вид деятельности"
                minLength={2}
                maxLength={200}
                onChange={handleChangeAbout}
                value={description || ''}
                required
            />
            <span
                className="form__job-error input-error"
            />
        </PopupWithForm>
    )
}

export default EditProfilePopup;