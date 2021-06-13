
import {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

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

    function handleUpdateUser(userData) {
        api.sendInfo(userData)
        .then((data) => {
            setCurrentUser(data)
            closeAllPopups()
        })
        .catch(err => console.log(err));
    }

    const handleCardDelete = (card) => {
        api.removeCard(card._id)
        .then(() => {
            setCards(state => state.filter(c => c._id !== card._id))
        })
        .catch(err => console.log(err));
    }

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch(err => console.log(err));
    } 

    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsConfirmPopupOpen(false)
        setSelectedCard({isOpened: false})
    }

    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getAllCards() 
        .then((data) => {
            setCards(data)
        })         
        .catch(err => console.log(err))   
    }, [])

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
                onCardLike={handleCardLike}
                cards={cards}
                onCardDelete={handleCardDelete}
            /> 
            <Footer />
        </div>
        <ImagePopup 
            onClose={closeAllPopups}
            card={selectedCard}
        />
        <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
        />

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
