import {useContext} from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = useContext(CurrentUserContext)

    const handleClick = () => {
        onCardClick(card)
    } 
    
    const handleCardLike = () => {
        onCardLike(card)
    }

    const handleDeleteClick = () => {
        onCardDelete(card)
    }

    // Определяем, являемся ли мы владельцем текущей карточки с лайком
    const isOwn = card.owner._id = currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);   


    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `elements__delete-btn ${isOwn ? 'elements__delete-btn_visible' : ''}`
    ); 
    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
        `elements__like-btn ${isLiked ? 'elements__like-btn_is_active' : ''}`
    ); 

    return (
        <li
            className="elements__card"
        >
            <button
                className="elements__delete-btn"
                type="button"
                aria-label="Delete"
                onCardDelete={handleDeleteClick}
            >
            </button>
            <img
                onClick={handleClick}
                src={card.link}
                alt={card.name}
                className="elements__card-image"
            />
            <div
                className="elements__place-name-wrapper"
            >
                <h2
                    className="elements__place-name">
                    {card.name}
                </h2>
                <div
                    className="elements__btn-like-wrapper"
                >
                <button
                    className={cardLikeButtonClassName}
                    type="button"
                    aria-label="Like"
                    onClick={handleCardLike}
                >
                </button>
                <span
                    className="elements__likes-counter"
                >
                    {card.likes.length}    
                </span>
                </div>
            </div>
    </li>
    )
}

export default Card