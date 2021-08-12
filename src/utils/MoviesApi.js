import { movieApiBaseUrl } from './constants';

function getFilms() {
  if (localStorage.getItem("storedFilms")) {
    return;
  }
  fetch(movieApiBaseUrl, {
    method: "GET",
  })
    .then(((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Encountered error: ${res.status}`);
    }))
    .then((filmList) => {
      filmList.forEach((film) => {
        film.liked = false;
      });
      localStorage.setItem("storedFilms", JSON.stringify(filmList));
    })
    .catch((err) => {
      console.log(err);
    });
}

function getFilteredFilms({ searchStr, shortsEnabled }) {
  searchStr = searchStr.toLocaleLowerCase();
  return JSON.parse(localStorage.getItem("storedFilms")).filter((film) => {
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
