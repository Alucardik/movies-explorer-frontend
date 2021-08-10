import './Movies.css';
import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function Movies() {
  const [formParams, setFormParams] = useState({
    searchStr: "",
    shortsEnabled: true,
  });

  useEffect(() => {

  });

  return(
    <div className="page">
      <main className="content">
        <SearchForm setFormParams={setFormParams} />
        <MoviesCardList formParams={formParams} />
      </main>
      <Footer />
    </div>
  );
}
