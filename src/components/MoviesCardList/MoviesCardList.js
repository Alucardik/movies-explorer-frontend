import './MoviesCardList.css';
import React from 'react';

import { mockMovies } from '../../utils/constants';
import { getFilteredFilms } from '../../utils/MoviesApi';

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
      filmsShownCount: Math.min(12, storedSome ? storedFilms.length : 0),
    };
  }

  componentDidMount() {
    if (this.props.saved) {
      this.setState({showLoader: true});
    }
    mainApi.getSavedMovies()
      .then((res) => {
        res.forEach((film) => {
          film.liked = true;
        });
        this.setState({likedMoviesList: res});
        if (!this.props.saved) {
          this.setState((prevState) => ({
            moviesList: prevState.moviesList.map((film) => {
              if (res.find((matchingFilm) => matchingFilm.movieId === film.id)) {
                film.liked = true;
              }
              return film;
            }),
          }));
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
        moviesList: getFilteredFilms(this.props.formParams),
      });
    }
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
    this.setState({
      showLoader: true,
    });
    setTimeout(() => {
      this.setState((prevState) => ({
        showLoader: false,
        moviesList: [...prevState.moviesList, ...mockMovies.slice(0, 4)],
      }));
    }, 2000);
  }

  render() {
    return(
      <section className="movies-list">
        <div className="movies-list__gallery">
          {(this.props.saved)
            ? this.state.likedMoviesList.map((movie) =>
              (<MovieCard key={`saved-${movie.movieId}`} movie={movie} saved={true} onCardDelete={this.handleMovieDelete} />))
            : this.state.moviesList.slice(0, 12).map((movie) =>
              (<MovieCard key={`global-${movie.id}`} movie={movie} saved={false} />))
          }
        </div>
        <button
          type="button"
          onClick={this.handleMoreBtnClick}
          className={`movies-list__load-more-btn ${(this.props.saved || this.state.showLoader || this.state.moviesList.length < 12) && 'movies-list__load-more-btn_hidden'}`}
        >
          Ещё
        </button>
        <Preloader isShown={this.state.showLoader}/>
      </section>
    );
  }

}
