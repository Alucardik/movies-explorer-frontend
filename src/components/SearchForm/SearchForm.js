import './SearchForm.css';
import { useState } from 'react';

export default function SearchForm(props) {
  const [searchStr, setSearchStr] = useState("");
  const [shortsEnabled, setShortsEnabled] = useState(true);

  function handleSearchChange(e) {
   setSearchStr(e.target.value);
  }

  function handleToggleChange(e) {
    setShortsEnabled(e.target.checked);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    props.setFormParams({
      searchStr,
      shortsEnabled,
    });
  }

  return(
    <form className="search-form" noValidate onSubmit={handleFormSubmit}>
      <div className="search-form__search-container">
        <input
          type="search"
          placeholder="Фильм"
          className="search-form__input"
          value={searchStr}
          onChange={handleSearchChange}
          minLength={1}
          required
        />
        <button type="submit" className="search-form__submit-btn" />
      </div>
      <div className="search-form__search-options">
        <div className="search-form__search-option">
          Короткометражки
          <label className="search-form__toggle-switch">
            <input type="checkbox" value={shortsEnabled} onChange={handleToggleChange} defaultChecked/>
            <span className="search-form__toggle-switch-slider" />
          </label>
        </div>
      </div>
    </form>
  );
}
