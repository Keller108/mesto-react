
import {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({isOpened: false});
    
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        api.getInfo()
        .then((data) => {
            setCurrentUser(data)
        })
        .catch(err => console.log(err))
    }, [])


// ОБРАБОТЧИКИ ОТКРЫТИЯ, ЗАКРЫТИЯ ПОПАПОВ

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
    }

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
    }

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
    }

    const handleConfirmClick = () => {
        setIsConfirmPopupOpen(!isConfirmPopupOpen)
    }

    const handleCardClick = ({link, name, isOpened}) => {
        setSelectedCard({
            link,
            name,
            isOpened: !isOpened
        })
    }

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsConfirmPopupOpen(false)
        setSelectedCard({isOpened: false})
    }

  return (
  <CurrentUserContext.Provider value={currentUser}>    
    <div className="App">
        <div className="page">
            <Header />
            <Main 
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
            /> 
            <Footer />
        </div>
        <ImagePopup 
            onClose={closeAllPopups}
            card={selectedCard}
        />
        <PopupWithForm
            name='profile'
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
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
                required
            />
            <span
                className="form__job-error input-error"
            />
        </PopupWithForm>

        <PopupWithForm
            name='card-add'
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            title='Новое место'
            buttonText='Создать'
        >
            <input
                className="form__input form__input_el_place"
                id="form__place" type="text"
                name="name" placeholder="Название"
                minLength={2}
                maxLength={30}
                required
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
            />
            <span
                className="form__url-error input-error"
            />
        </PopupWithForm>

        <PopupWithForm
            name='update-avatar'
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
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
        <PopupWithForm
            name='confirm'
            isOpen={isConfirmPopupOpen}
            onClose={closeAllPopups}
            title='Вы уверены?'
            buttonText='Да'
        />
    </div>
    </CurrentUserContext.Provider>    
  );
}

export default App;
