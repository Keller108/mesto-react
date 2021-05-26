import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <div className="page">
            <Header />
            <Main />
            <Footer />
            </div>
            <div className="popup popup_type_profile">
                <div className="popup__container">
                <button className="popup__close-btn hover-transparency" type="button" aria-label="Close" />
                <h2 className="popup__title">Редактировать профиль</h2>
                <form className="form edit-form" name="profile-popup" id="form-profile" noValidate>
                    <input className="form__input form__input_el_name" id="form__name" type="text" name="name" placeholder="Имя" minLength={2} maxLength={40} required />
                    <span className="form__name-error input-error" />
                    <input className="form__input form__input_el_descr" id="form__job" type="text" name="about" placeholder="Вид деятельности" minLength={2} maxLength={200} required />
                    <span className="form__job-error input-error" />
                    <button className="form__submit-btn" type="submit">Сохранить</button>
                </form>
                </div>
            </div>
            <div className="popup popup_type_card-add">
                <div className="popup__container">
                <button className="popup__close-btn hover-transparency" type="button" aria-label="Close" />
                <h2 className="popup__title">Новое место</h2>
                <form className="form add-form" name="places-popup" id="form-card" noValidate>
                    <input className="form__input form__input_el_place" id="form__place" type="text" name="name" placeholder="Название" minLength={2} maxLength={30} required />
                    <span className="form__place-error input-error" />
                    <input className="form__input form__input_el_pic-link" id="form__url" type="url" name="link" placeholder="Ссылка на картинку" required />
                    <span className="form__url-error input-error" />
                    <button className="form__submit-btn form__submit-btn_type_add" type="submit">Создать</button>
                </form>
                </div>
            </div>
            <div className="popup popup_type_lightbox">
                <figure className="popup__image-wrapper">
                <button className="popup__close-btn hover-transparency" type="button" aria-label="Close" />
                <img className="popup__image" src="#" alt="." />
                <figcaption className="popup__caption" />
                </figure>
            </div>
            <div className="popup popup_type_confirm">
                <div className="popup__container">
                <button className="popup__close-btn hover-transparency" type="button" aria-label="Close" />
                <h2 className="popup__title popup__title_place_popup-confirm">Вы уверены?</h2>
                <button className="submit-btn" type="button">Да</button>
                </div>
            </div>
            <div className="popup popup_type_update-avatar">
                <div className="popup__container">
                <button className="popup__close-btn hover-transparency" type="button" aria-label="Close" />
                <h2 className="popup__title">Обновить аватар</h2>
                <form className="form add-form" name="places-popup" id="form-avatar" noValidate>
                    <input className="form__input form__input_ava_pic-link" id="form__avatar-url" type="url" name="avatar" placeholder="Ссылка на картинку" required />
                    <span className="form__avatar-url-error input-error" />
                    <button className="form__submit-btn form__submit-btn_type_add" type="submit">Сохранить</button>
                </form>
                </div>
        </div>
    </div>
  );
}

export default App;
