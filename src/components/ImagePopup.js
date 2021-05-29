function ImagePopup({place}) {
    return (
        <div
            className="popup popup_type_lightbox">
                <figure
                    className="popup__image-wrapper">
                <button
                    className="popup__close-btn hover-transparency" type="button" aria-label="Close" />
                <img
                    className="popup__image" src="/" alt="." />
                <figcaption
                    className="popup__caption">
                    {place}                        
                 </figcaption>                       
                </figure>
            </div>
    )
}


export default ImagePopup;