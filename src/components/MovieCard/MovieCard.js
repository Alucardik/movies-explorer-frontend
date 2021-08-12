import './MovieCard.css';
import { useEffect, useState } from 'react';
import { mainApi } from "../../utils/MainApi";

export default function MovieCard(props) {
  const [liked, setLiked] = useState(false);
  const { movieId } = props.movie;

  useEffect(() => {
    setLiked(props.movie.liked);
  }, [props.movie.liked]);

  function getHoursAndMinutes(mins) {
    const hours = Math.floor(mins / 60);
    return `${hours}ч ${mins - hours * 60}м`;
  }

  function handleBtnClick() {
    if (!props.saved) {
      // liked actually
      if (!liked) {
        mainApi.saveMovie(props.movie)
          .then(() => {
            setLiked(!liked);
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        mainApi.removeMovie(props.movie.id)
          .then(() => {
            setLiked(!liked);
          })
          .catch((err) => {
            console.log(err);
          })
      }
    } else {
      mainApi.removeMovie(movieId)
        .then(() => {
          props.onCardDelete(movieId);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  return(
    <div className="movie-card">
      <a
        href={(props.saved) ? props.movie.trailer : props.movie.trailerLink}
        rel="noopener noreferrer"
        target="_blank"
        className="movie-card__image-link"
      >
        <img
          src={`${(props.saved) ? (props.movie.image) : (`https://api.nomoreparties.co${props.movie.image.url}`)}`}
          alt="Превью фильма"
          className="movie-card__image"
        />
      </a>
      <div className="movie-card__title-container">
        <h2 className="movie-card__title">
          {props.movie.nameRU}
        </h2>
        <button
          type="button"
          className={`movie-card__btn
          ${props.saved ? 'movie-card__btn_type_delete' : 'movie-card__btn_type_like'}
          ${(!props.saved && liked) && 'movie-card__btn_liked'}`}
          onClick={handleBtnClick}
        />
      </div>
      <div className="movie-card__info">
        {getHoursAndMinutes(props.movie.duration)}
      </div>
    </div>
  );
}
