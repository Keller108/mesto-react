import {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({isOpened: false});
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        api.getInfo()
        .then((data) => {
            setCurrentUser(data)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        api.getAllCards() 
        .then((data) => {
            setCards(data)
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

    const handleAddPlace = (data) => {
        api.uploadCard(data)
        .then(newCard => {
            setCards([newCard, ...cards])
            closeAllPopups()
        })
        .catch(err => console.log(err))
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

    function handleUpdateAvatar(newAvatar) {
        api.updateAvatar(newAvatar)
        .then((data) => {
            setCurrentUser(data)
            closeAllPopups()
        })
        .catch(err => console.log(err))

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
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                cards={cards}
                onCardDelete={handleCardDelete}
                onAddPlace={handleAddPlaceClick}
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
        <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
        />
    </div>
    </CurrentUserContext.Provider>    
  );
}

export default App;
