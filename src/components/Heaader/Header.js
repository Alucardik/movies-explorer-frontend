import './Header.css';
import header__logo from '../../images/header__logo.svg';
import { Link, Route, Switch } from "react-router-dom";

export default function Header(props) {
  return(
    <header className={`header ${(props.main && "header_type_main-page") || (props.auth && "header_type_auth")}`}>
      <a href="/" target="_self" rel="noopener" className={`header__logo ${props.auth && "header__logo_initial-pos"}`}>
        <img src={header__logo} alt="Логотип проекта" />
      </a>
      <nav className="header__navbar">
        <Switch>
          <Route exact path="/">
            <Link to={"/signup"} className="header__navbar-btn">
              Регистрация
            </Link>
            <Link to={"/signin"} className="header__navbar-btn header__navbar-btn_highlighted">
              Войти
            </Link>
          </Route>
          <Route path="*">
            <></>
          </Route>
        </Switch>
      </nav>
    </header>
  );
}
