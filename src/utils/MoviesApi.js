import { movieApiBaseUrl } from './constants';

function getFilms() {
  if (localStorage.getItem("storedFilms")) {
    return Promise.resolve();
  }

  return fetch(movieApiBaseUrl, {
    method: "GET",
  })
    .then(((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then(errContent => Promise.reject(errContent.message));
    }))
    .then((filmList) => {
      filmList.forEach((film) => {
        film.liked = false;
      });
      localStorage.setItem("storedFilms", JSON.stringify(filmList));
    });
}

function getFilteredFilms({ searchStr, shortsEnabled }, key) {
  searchStr = searchStr.toLocaleLowerCase();
  return JSON.parse(localStorage.getItem(key)).filter((film) => {
    if (shortsEnabled) {
      return (film.nameRU && film.nameRU.toLocaleLowerCase().includes(searchStr))
        || (film.nameEN && film.nameEN.toLocaleLowerCase().includes(searchStr));
    } else {
      return film.duration > 40 &&
        ((film.nameRU && film.nameRU.toLocaleLowerCase().includes(searchStr))
        || (film.nameEN && film.nameEN.toLocaleLowerCase().includes(searchStr)));
    }
  });
}

export {
  getFilms,
  getFilteredFilms,
}
