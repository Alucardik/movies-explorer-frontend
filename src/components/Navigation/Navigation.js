import './Navigation.css';
import {Link, NavLink, Route, Switch} from "react-router-dom";
import profile__icon from "../../images/icons/profile-icon.svg";

export default function Navigation() {
  return(
    <nav className="header__navbar">
      <Switch>
        <Route path={["/profile", "/movies", "/saved-movies"]}>
          <NavLink
            to={"/movies"}
            className="header__navbar-btn header__navbar-btn_type_profile"
            activeClassName="header__navbar-btn_selected"
          >
            Фильмы
          </NavLink>

          <NavLink
            to={"/saved-movies"}
            className="header__navbar-btn header__navbar-btn_type_profile"
            activeClassName="header__navbar-btn_selected"
          >
            Сохранённые фильмы
          </NavLink>

          <NavLink
            to={"/profile"}
            className="header__navbar-btn header__navbar-btn_type_profile"
            activeClassName="header__navbar-btn_selected"
          >
            Аккаунт <img src={profile__icon} alt="иконка профиля" className="header__navbar-account-icon"/>
          </NavLink>
        </Route>

        <Route exact path="/">
          <Link to={"/signup"} className="header__navbar-btn">
            Регистрация
          </Link>
          <Link to={"/signin"} className="header__navbar-btn header__navbar-btn_highlighted">
            Войти
          </Link>
        </Route>

        <Route path="*" />
      </Switch>
    </nav>
  );
}