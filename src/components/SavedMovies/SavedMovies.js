import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useState } from 'react';

export default function SavedMovies() {
  const [formParams, setFormParams] = useState({
    searchStr: "",
    shortsEnabled: true,
  });

  return(
    <div className="page">
      <main className="content">
        <SearchForm saved={true} setFormParams={setFormParams} />
        <MoviesCardList saved={true} formParams={formParams} />
      </main>
      <Footer />
    </div>
  );
}
