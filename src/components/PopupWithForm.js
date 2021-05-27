function PopupWithForm ({title, name}) {
    return (
        <div className="popup popup_type_profile">
             <div className="popup__container">
                <button 
                    className={`popup popup_type_${props.name}`}
                    type="button" 
                    aria-label="Close">
                </button>
                <h2 className="popup__title">
                    {title}
                </h2>
                <form 
                    className={`form ${props.name}`}
                    name="profile-popup"
                    id="form-profile"
                    noValidate>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;