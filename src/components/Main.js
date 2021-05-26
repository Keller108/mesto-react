function Main() {
    return (
        <main>
            <section className="profile">
              <div className="profile__content-wrapper">
                    <button className="profile__avatar-edit-btn" type="button" aria-label="Avatar Edit Button">
                        <div className="profile__avatar-overlay" />
                    </button>
                    <div className="profile__info ">
                     <div className="profile__info-top-container">
                        <h1 className="profile__name" />
                        <button className="profile__edit-button hover-transparency" type="button" aria-label="OpenPopup" />
                     </div>
                     <p className="profile__description" />
                    </div>
                </div>
                <button className="profile__add-button hover-transparency" type="button" aria-label="Add" />
            </section>
                <section className="elements">
                    <ul className="elements__cards">
                    </ul>
            </section>
         </main>
    )
};

export default Main;