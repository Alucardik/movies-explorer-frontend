import './Header.css';
import {Route, Switch} from "react-router-dom";
import header__logo from '../../images/header__logo.svg';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return(
      <Switch>
        <Route path={["/signup", "/signin"]}>
          <header className="header  header_type_auth">
            <a
              href="/"
              target="_self"
              rel="noopener"
              className="header__logo header__logo_initial-pos"
            >
              <img src={header__logo} alt="Логотип проекта" />
            </a>
            <Navigation />
          </header>
        </Route>
        <Route path={["/movies", "/saved-movies", "/profile"]}>
          <header className="header">
            <a
              href="/"
              target="_self"
              rel="noopener"
              className="header__logo"
            >
              <img src={header__logo} alt="Логотип проекта" />
            </a>
            <Navigation />
          </header>
        </Route>
        <Route exact path="/">
          <header className="header  header_type_main-page">
            <a
            href="/"
            target="_self"
            rel="noopener"
            className="header__logo"
            >
            <img src={header__logo} alt="Логотип проекта" />
            </a>
            <Navigation />
          </header>
        </Route>
        <Route path="*" />
      </Switch>
  );
}
