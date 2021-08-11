import './MoviesCardList.css';
import React from 'react';

import { mockMovies } from '../../utils/constants';
import { getFilteredFilms } from '../../utils/MoviesApi';

import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';

export default class MoviesCardList extends React.Component {
  constructor(props) {
    super(props);

    const storedFilms = JSON.parse(localStorage.getItem("storedFilms")),
      storedSome = !!storedFilms;

    this.state = {
      moviesList:
        (props.saved)
        ? mockMovies.filter((movie) => movie.liked)
        : (storedSome ? storedFilms : []),
      showLoader: false,
      filmsShownCount: Math.min(12, storedSome ? storedFilms.length : 0),
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.props.formParams);
    if (prevProps.formParams !== this.props.formParams) {
      this.setState({
        moviesList: getFilteredFilms(this.props.formParams),
      });
      // console.log(this.state.moviesList);
    }
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
          {this.state.moviesList.slice(0, 12).map((movie) =>
            (<MovieCard key={movie.id} movie={movie} saved={this.props.saved} />)
          )}
        </div>
        {/*<button*/}
        {/*  type="button"*/}
        {/*  onClick={this.handleMoreBtnClick}*/}
        {/*  className={`movies-list__load-more-btn ${(this.props.saved || this.state.showLoader || this.state.moviesList.length < 12) && 'movies-list__load-more-btn_hidden'}`}*/}
        {/*>*/}
        {/*  Ещё*/}
        {/*</button>*/}
        <Preloader isShown={this.state.showLoader}/>
      </section>
    );
  }

}
