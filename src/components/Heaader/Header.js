import './Header.css';
import header__logo from '../../images/header__logo.svg';
import { Link, Route, Switch } from "react-router-dom";

export default function Header(props) {
  return(
    <header className={`header ${props.main && "header_main-page"}`}>
      <a href="/" target="_self" rel="noopener" className="header__logo">
        <img src={header__logo} alt="Логотип проекта" />
      </a>
      <nav className="header__navbar">
        <Switch>
          <Route path="/signup">
            <></>
          </Route>
          <Route path="/">
            <Link to={"/signup"} className="header__navbar-btn">
              Регистрация
            </Link>
            <Link to={"/signin"} className="header__navbar-btn header__navbar-btn_highlighted">
              Войти
            </Link>
          </Route>
        </Switch>
      </nav>
    </header>
  );
}
