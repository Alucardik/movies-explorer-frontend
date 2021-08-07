import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from "../Footer/Footer";

export default function SavedMovies() {
  return(
    <div className="page">
      <main className="content">
        <SearchForm />
        <MoviesCardList saved={true} />
      </main>
      <Footer />
    </div>
  );
}
