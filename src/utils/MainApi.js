import { mainApiBaseUrl } from "./constants";

class MainApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkResponseJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Encountered error: ${res.status}`);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res;
    }
    return Promise.reject(`Encountered error: ${res.status}`);
  }

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
}

export const mainApi = new MainApi(mainApiBaseUrl);
