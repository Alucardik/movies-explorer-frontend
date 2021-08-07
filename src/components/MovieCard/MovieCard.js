import './MovieCard.css';
import { useState } from 'react';

export default function MovieCard(props) {
  const [triggered, setTriggered] = useState(props.movie.liked);


  function getHoursAndMinutes(mins) {
    const hours = Math.floor(mins / 60);
    return `${hours}ч ${mins - hours * 60}м`;
  }

  function handleBtnClick() {
    if (!props.saved) {
      setTriggered(!triggered);
    }
    // card deletion logic will be here
  }

  return(
    <div className="movie-card">
      <img src={props.movie.imgSrc} alt="Превью фильма" className="movie-card__image" />
      <div className="movie-card__title-container">
        <h2 className="movie-card__title">
          {props.movie.name}
        </h2>
        <button
          type="button"
          className={`movie-card__btn
          ${props.saved ? 'movie-card__btn_type_delete' : 'movie-card__btn_type_like'}
          ${(!props.saved && triggered) && 'movie-card__btn_liked'}`}
          onClick={handleBtnClick}
        />
      </div>
      <div className="movie-card__info">
        {getHoursAndMinutes(props.movie.duration)}
      </div>
    </div>
  );
}
