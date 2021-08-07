import './MoviesCardList.css';
import React from 'react';
import { mockMovies } from '../../utils/constants';

import MovieCard from '../MovieCard/MovieCard';
import Preloader from '../Preloader/Preloader';

export default class MoviesCardList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moviesList:
        (props.saved)
        ? mockMovies.filter((movie) => movie.liked)
        : mockMovies,
      showLoader: false,
    };
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
          {this.state.moviesList.map((movie, index) =>
            (<MovieCard key={index} movie={movie} saved={this.props.saved} />)
          )}
        </div>
        <button
          type="button"
          onClick={this.handleMoreBtnClick}
          className={`movies-list__load-more-btn ${(this.props.saved || this.state.showLoader) && 'movies-list__load-more-btn_hidden'}`}
        >
          Ещё
        </button>
        <Preloader isShown={this.state.showLoader}/>
      </section>
    );
  }

}
