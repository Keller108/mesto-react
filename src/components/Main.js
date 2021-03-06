import {useContext} from 'react';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main({onEditAvatar, onEditProfile, onCardClick, onCardLike, cards, onCardDelete, onAddPlace}) {

    const { name, about, avatar } = useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
              <div className="profile__content-wrapper">
                    <button
                        className="profile__avatar-edit-btn"
                        type="button"
                        aria-label="Avatar Edit Button"
                        onClick={onEditAvatar}
                        style={{ backgroundImage: `url(${avatar})` }}
                    >
                        <div
                            className="profile__avatar-overlay">
                        </div>
                    </button>
                    <div className="profile__info ">
                     <div className="profile__info-top-container">
                        <h1 className="profile__name">
                            {name}
                        </h1>    
                        <button
                            className="profile__edit-button hover-transparency"
                            type="button"
                            aria-label="OpenPopup"
                            onClick={onEditProfile}
                        >
                        </button>
                     </div>
                     <p
                        className="profile__description"
                     >
                        {about}
                    </p>                             
                    </div>
                </div>
                <button 
                    onClick={onAddPlace}
                    className="profile__add-button hover-transparency"
                    type="button"
                    aria-label="Add"
                >
                </button>
            </section>
                <section className="elements">
                    <ul className="elements__cards">
                        {cards.map((card) => ( 
                            <Card
                                card={card}
                                onCardClick={onCardClick}
                                key={card._id}
                                onCardLike={onCardLike}
                                onCardDelete={onCardDelete}
                            />       
                        ))}
                    </ul>
            </section>
         </main>
    )
};

export default Main;