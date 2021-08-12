import './MoviesCardList.css';
import React from 'react';

import { getFilms, getFilteredFilms } from '../../utils/MoviesApi';

import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';
import {mainApi} from "../../utils/MainApi";

export default class MoviesCardList extends React.Component {
  constructor(props) {
    super(props);

    const storedFilms = JSON.parse(localStorage.getItem("storedFilms"));
    const storedSome = !!storedFilms;

    this.state = {
      likedMoviesList: [],
      moviesList: storedSome ? storedFilms : [],
      showLoader: false,
      filmsShownCount: 0,
      filmsShownIncrement: 0,
      notification: "",
    };
  }

  componentDidMount() {
    // determine screen size and make appropriate adjustments
    this.determineMoviesCount(true);
    window.addEventListener("resize", this.handleWindowResize);


    if (this.props.saved) {
      this.setState({showLoader: true});
    }
    mainApi.getSavedMovies()
      .then((res) => {
        res.forEach((film) => {
          film.liked = true;
        });
        this.setState({likedMoviesList: res});
        localStorage.setItem("likedFilms", JSON.stringify(res));
        if (!this.props.saved) {
          this.sortOutLikedMovies();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        if (this.props.saved) {
          this.setState({showLoader: false});
        }
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.formParams !== this.props.formParams) {
      this.setState({
        showLoader: true,
        notification: "",
      });
      if (!this.props.saved) {
        getFilms()
          .then(() => {
            this.determineMoviesCount(true);
            this.setState({
              moviesList: getFilteredFilms(this.props.formParams, "storedFilms"),
            });
            if (this.state.moviesList.length === 0) {
              this.setState({notification: "Ничего не найдено."});
            }
            this.sortOutLikedMovies();
          })
          .catch((err) => {
            this.setState({notification:
                "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."});
            console.log(err);
          })
          .finally(() => {
            this.setState({showLoader: false});
          })
      } else {
        this.setState({
          likedMoviesList: getFilteredFilms(this.props.formParams, "likedFilms"),
          showLoader: false,
        });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  determineMoviesCount = (initial=false) => {
    let initialCount = 12, incr = 4;
    if (window.innerWidth > 760 && window.innerWidth <= 1190) {
      initialCount = 8;
      incr = 2;
    } else if (window.innerWidth <= 760) {
      initialCount = 5;
      incr = 2;
    }
    if (initial) {
      this.setState({filmsShownCount: initialCount});
    } else {
      this.setState((prevState) => ({
        filmsShownCount: (prevState.filmsShownCount % incr !== 0)
          ? (prevState.filmsShownCount + incr - (prevState.filmsShownCount % incr))
          : prevState.filmsShownCount,
      }));
    }
    this.setState({filmsShownIncrement: incr});
  }

  handleWindowResize = () => {
    setTimeout(this.determineMoviesCount, 200);
  }

  // highlight cur filmsList like-buttons correctly
  sortOutLikedMovies() {
    this.setState((prevState) => ({
      moviesList: prevState.moviesList.map((film) => {
        if (this.state.likedMoviesList.find((matchingFilm) => matchingFilm.movieId === film.id)) {
          film.liked = true;
        }
        return film;
      }),
    }));
  }

  handleMovieDelete = (movieId) => {
    // think about why splice doesn't work correctly
    this.setState((prevState) => {
      return {
        likedMoviesList: prevState.likedMoviesList.filter((movie) => movie.movieId !== movieId),
      };
    });
  }

  handleMoreBtnClick = () => {
    this.setState((prevState) => ({
      filmsShownCount: prevState.filmsShownCount + prevState.filmsShownIncrement,
    }));
  }

  render() {
    return(
      <section className="movies-list">
        <p className={`movie-list__notification ${(this.state.notification !== "") && "movie-list__notification_shown"}`} >
          {this.state.notification}
        </p>
        <div className="movies-list__gallery">
          {(this.props.saved)
            ? this.state.likedMoviesList.map((movie) =>
              (<MovieCard key={`saved-${movie.movieId}`} movie={movie} saved={true} onCardDelete={this.handleMovieDelete} />))
            : this.state.moviesList.slice(0, Math.min(this.state.filmsShownCount, this.state.moviesList.length)).map((movie) =>
              (<MovieCard key={`global-${movie.id}`} movie={movie} saved={false} />))
          }
        </div>
        <button
          type="button"
          onClick={this.handleMoreBtnClick}
          className={`movies-list__load-more-btn ${(this.props.saved || this.state.showLoader || this.state.moviesList.length < this.state.filmsShownCount) && 'movies-list__load-more-btn_hidden'}`}
        >
          Ещё
        </button>
        <Preloader isShown={this.state.showLoader}/>
      </section>
    );
  }

}
