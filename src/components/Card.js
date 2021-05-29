function Card({card, onCardClick}) {

    const handleClick = () => {
        onCardClick(card)
    } 

    return (
        <li
            className="elements__card"
            >
            <button
                className="elements__delete-btn"
                type="button"
                aria-label="Delete">
            </button>
            <img
                onClick={handleClick}
                src={card.link}
                alt={card.name}
                className="elements__card-image"
            />
            <div
                className="elements__place-name-wrapper"
            >
                <h2
                    className="elements__place-name">
                    {card.name}
                </h2>
                <div
                    className="elements__btn-like-wrapper"
                >
                <button
                    className="elements__like-btn"
                    type="button"
                    aria-label="Like">
                </button>
                <span
                    className="elements__likes-counter"
                >
                    {card.likes.length}    
                </span>
                </div>
            </div>
    </li>
    )
}

export default Card