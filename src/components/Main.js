function Main({onEditAvatar, onEditProfile, onAddPlace}) {
    return (
        <main>
            <section className="profile">
              <div className="profile__content-wrapper">
                    <button
                    className="profile__avatar-edit-btn"
                    type="button"
                    aria-label="Avatar Edit Button"
                    onClick={onEditAvatar}>
                        <div className="profile__avatar-overlay">
                        </div>
                    </button>
                    <div className="profile__info ">
                     <div className="profile__info-top-container">
                        <h1 className="profile__name" />
                        <button
                        className="profile__edit-button hover-transparency"
                        type="button"
                        aria-label="OpenPopup"
                        onClick={onEditProfile}>
                        </button>
                     </div>
                     <p className="profile__description" />
                    </div>
                </div>
                <button 
                className="profile__add-button hover-transparency"
                type="button"
                aria-label="Add"
                onClick={onAddPlace}>
                </button>
            </section>
                <section className="elements">
                    <ul className="elements__cards">
                    </ul>
            </section>
         </main>
    )
};

export default Main;