function PopupWithForm ({title, name, children, buttonText, isOpen, onClose, handleSubmit}) {
    return (
        <div className={isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}>
             <div className="popup__container">
                <button
                    onClick={onClose}
                    className="popup__close-btn hover-transparency"
                    type="button"
                    aria-label="Close">   
                </button>                   
                <h2 className="popup__title">
                    {title}
                </h2>
                <form 
                    className={`form form-${name}`}
                    name={name}
                    onSubmit={handleSubmit}
                >
                {children}
                <button
                    className="submit-btn"
                    type="submit">
                    {buttonText}
                </button>
            </form>
            </div>
        </div>
    )
}

export default PopupWithForm;