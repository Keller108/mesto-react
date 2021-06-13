class Api {
    constructor(config) {
        this._baseUrl = config.baseUrl;
        this._config = config;
    }

    // Получение карточек с сервера
    getAllCards() {
        return fetch(`${this._baseUrl}/cards`, this._config)
            .then(this._checkResponse)
    }

    // Получение информации о профиле с сервера
    getInfo() {
        return fetch(`${this._baseUrl}/users/me`, this._config)
            .then(this._checkResponse)
    }

    // Отправка информации профиля
    sendInfo(userData) {
        const dataObject = {
            method: 'PATCH',
            ...this._config,
            body: JSON.stringify(userData),
        }
        return fetch(`${this._baseUrl}/users/me`, dataObject)
            .then(this._checkResponse)
    }

    // Добавление карточек на сервак
    uploadCard(inputsValue) {
        const dataObject = {
            method: 'POST',
            ...this._config,
            body: JSON.stringify(inputsValue),
        }
        return fetch(`${this._baseUrl}/cards`, dataObject)
            .then(this._checkResponse)
    }

    // Удаление карточки
    removeCard(cardId) {
        const dataObject = {
            method: 'DELETE',
            ...this._config
        }
        return fetch(`${this._baseUrl}/cards/${cardId}`, dataObject)
            .then(this._checkResponse)
    }

    //Обновляем лайк
    changeLikeCardStatus(cardId, isLiked) {
        const removeLike = {
            method: 'DELETE',
            ...this._config
        }
        const updateLike = {
            method: 'PUT',
            ...this._config
        }
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, isLiked ? removeLike : updateLike)
        .then(this._checkResponse)
    }

    updateAvatar(data) {
        const dataObject = {
            method: 'PATCH',
            ...this._config,
            body: JSON.stringify(data)
        }
        return fetch(`${this._baseUrl}/users/me/avatar`, dataObject)
            .then(this._checkResponse)
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }


}

export default new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-23',
    headers: {
        Authorization: 'd5de609a-b67a-44fe-8387-d8a318d2487b',
        'Content-Type': 'application/json'
    }
})