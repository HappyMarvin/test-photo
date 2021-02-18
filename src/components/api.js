class Api {
  constructor() {
    this._baseUrl = 'https://jsonplaceholder.typicode.com/';
  }

  _getResponseData(res) {
    if (res.ok) return res.json()
    return Promise.reject(new Error(`Ошибка: ${res.status}`))
  }

  getUsers() {
    return fetch(`${this._baseUrl}users`, {
    })
      .then(this._getResponseData)
  }

  getUser(userId) {
    return fetch(`${this._baseUrl}users/${userId}`, {
    })
      .then(this._getResponseData)
  }

  getAlbums(userId) {
    return fetch(`${this._baseUrl}albums?userId=${userId}`, {
    })
      .then(this._getResponseData)
  }
  getAlbum(id) {
    return fetch(`${this._baseUrl}albums/${id}`, {
    })
      .then(this._getResponseData)
  }

  getPhotos(albumId) {
    return fetch(`${this._baseUrl}photos?albumId=${albumId}`, {
    })
      .then(this._getResponseData)
  }
}

const api = new Api();
export default api;