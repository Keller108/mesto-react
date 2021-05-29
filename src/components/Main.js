import {useState, useEffect} from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace}) {

    const [userName, setUserInfo] = useState("");
    const [userDescription, setUserDesciption] = useState("");
    const [userAvatar, setUserAvatar] =  useState("");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getInfo()
        .then(({avatar, about, name}) => {
            setUserInfo(name) 
            setUserDesciption(about)
            setUserAvatar(avatar)
        })
        .catch(err => console.log(err))    

        api.getAllCards() 
        .then((data) => {
            setCards(data)
        })         
        .catch(err => console.log(err))   
    }, [])

    return (
        <main>
            <section className="profile">
              <div className="profile__content-wrapper">
                    <button
                        className="profile__avatar-edit-btn"
                        type="button"
                        aria-label="Avatar Edit Button"
                        onClick={onEditAvatar}
                        style={{ backgroundImage: `url(${userAvatar})` }}
                    >
                        <div
                            className="profile__avatar-overlay">
                        </div>
                    </button>
                    <div className="profile__info ">
                     <div className="profile__info-top-container">
                        <h1 className="profile__name">
                            {userName}
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
                        {userDescription}
                    </p>                             
                    </div>
                </div>
                <button 
                    className="profile__add-button hover-transparency"
                    type="button"
                    aria-label="Add"
                    onClick={onAddPlace}
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
                            />       
                        ))}
                    </ul>
            </section>
         </main>
    )
};

export default Main;