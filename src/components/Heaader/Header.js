import './Header.css';
import header__logo from '../../images/header__logo.svg';

export default function Header(props) {
  return(
    <header className={`header ${props.main && "header_main-page"}`}>
      <img src={header__logo} alt="Логотип проекта" className="header__logo" />
      <nav className="header__navbar">
        <button type="button" className="header__navbar-btn">
          Регистрация
        </button>
        <button type="button" className="header__navbar-btn header__navbar-btn_highlighted">
          Войти
        </button>
      </nav>
    </header>
  );
}
