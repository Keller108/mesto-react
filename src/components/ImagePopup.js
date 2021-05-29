function ImagePopup({card, onClose}) {
    return (
        <div
            className={card.isOpened ? `popup popup_type_lightbox popup_opened` : `popup popup_type_lightbox`}>
            <figure
                className="popup__image-wrapper">
                <button
                    onClick= {onClose}
                    className="popup__close-btn hover-transparency"
                    type="button"
                    aria-label="Close">
                </button>
                 <img
                    className="popup__image" src={card.link} alt={card.name}
                />
                <figcaption
                    className="popup__caption">
                    {card.name}                        
                 </figcaption>                       
            </figure>
        </div>
    )
}

export default ImagePopup;