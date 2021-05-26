import './App.css';

function App() {
  return (
    <div classname="App">
      <div className="page">
        <header className="header">
          <a href="#" target="_blank"><img src="<%=require('/src/images/logo_clr_white.svg')%>" alt="Логотип Mesto" className="logo" /></a>
        </header>
        <main>
          <section className="profile">
            <div className="profile__content-wrapper">
              <button className="profile__avatar-edit-btn" type="button" aria-label="Avatar Edit Button">
                <div className="profile__avatar-overlay" />
              </button>
              <div className="profile__info ">
                <div className="profile__info-top-container">
                  <h1 className="profile__name">
                    <button className="profile__edit-button hover-transparency" type="button" aria-label="OpenPopup">
                    </button></h1></div>
                <p className="profile__description">
                </p></div>
            </div>
            <button className="profile__add-button hover-transparency" type="button" aria-label="Add">
            </button></section>
          <section className="elements">
            <ul className="elements__cards">
            </ul>
          </section>
        </main>
        <footer className="footer">
          <p className="footer__copyright ">© 2020 Mesto Russia</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
