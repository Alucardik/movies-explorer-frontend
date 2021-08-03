import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function Movies() {
  return(
    <div className="page">
      <main className="content">
        <SearchForm />
        <MoviesCardList />
      </main>
      <Footer />
    </div>
  );
}
