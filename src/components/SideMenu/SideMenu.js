import './SideMenu.css';
import {NavLink} from "react-router-dom";
import profile__icon from "../../images/icons/profile-icon.svg";

export default function SideMenu(props) {
  return(
    <div className={`side-menu ${props.opened && 'side-menu_opened'}`}>
      <div className={`side-menu__container ${props.opened && 'side-menu__container_opened'}`}>
        <nav className="side-menu__links">
          <NavLink
            exact
            to={"/"}
            className="side-menu__link"
            activeClassName="side-menu__link_chosen"
            onClick={props.onLinkClick}
          >
            Главная
          </NavLink>

          <NavLink
            to={"/movies"}
            className="side-menu__link"
            activeClassName="side-menu__link_chosen"
            onClick={props.onLinkClick}
          >
            Фильмы
          </NavLink>

          <NavLink
            to={"/saved-movies"}
            className="side-menu__link"
            activeClassName="side-menu__link_chosen"
            onClick={props.onLinkClick}
          >
            Сохранённые фильмы
          </NavLink>
          <NavLink
            to={"/profile"}
            className="side-menu__link side-menu__link_type_profile"
            onClick={props.onLinkClick}
          >
            Аккаунт <img src={profile__icon} alt="иконка профиля" className="header__navbar-account-icon"/>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
