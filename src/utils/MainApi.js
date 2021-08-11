import { mainApiBaseUrl } from "./constants";

class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkResponseJson(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then(errContent => Promise.reject(errContent.message));
  }

  _checkResponse(res) {
    if (res.ok) {
      return res;
    }
    return res.json().then(errContent => Promise.reject(errContent.message));
  }

  // user requests

  register = ({ name, email, password }) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then(this._checkResponseJson);
  }

  login = ({ email, password }) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(this._checkResponse);
  }

  logout = () => {
    return fetch(`${this._baseUrl}/signout`, {
      method: "DELETE",
      credentials: "include",
    })
      .then(this._checkResponse);
  }

  checkToken = () => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      credentials: "include",
    })
      .then(this._checkResponseJson);
  }

  updateUser = ({ name, email }) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    })
      .then(this._checkResponseJson);
  }
}

export const mainApi = new MainApi(mainApiBaseUrl);
