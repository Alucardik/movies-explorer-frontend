import './SearchForm.css';

export default function SearchForm() {
  return(
    <form className="search-form">
      <div className="search-form__search-container">
        <input
          type="search"
          placeholder="Фильм"
          className="search-form__input"
          required
        />
        <button type="submit" className="search-form__submit-btn" />
      </div>
      <div className="search-form__search-options">
        <div className="search-form__search-option">
          Короткометражки
          <label className="search-form__toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="search-form__toggle-switch-slider" />
          </label>
        </div>
      </div>
    </form>
  );
}
