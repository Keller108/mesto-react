function PopupWithForm ({title, name, children, text}) {
    return (
        <div className={`popup popup_type_${name}`}>
             <div className="popup__container">
                <button
                    className="popup__close-btn hover-transparency"
                    type="button"
                    aria-label="Close">
                </button>                   
                <h2 className="popup__title">
                    {title}
                </h2>
                <form 
                    className="form"
                    name={name}
                    noValidate>
                </form>
                {children}
                <button
                    className="submit-btn"
                    type="button">
                    {text}
                </button>
            </div>
        </div>
    )
}

export default PopupWithForm;