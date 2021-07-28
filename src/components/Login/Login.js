import './Login.css';

import { Link } from "react-router-dom";

import Header from "../Header/Header";

export default function Login() {
  return(
    <div className="page page_type_auth">
      <Header auth={true} />
      <div className="auth-form">
        <h1 className="auth-form__title">
          Рады видеть!
        </h1>
        <form className="auth-form__form-container" noValidate>
          <label className="auth-form__field">
            E-mail
            <input
              className="auth-form__input"
              type="email"
              required
            />
          </label>
          <p className="auth-form__input-error">
            Недействительный e-mail
          </p>

          <label className="auth-form__field">
            Пароль
            <input
              className="auth-form__input"
              type="password"
              required
            />
          </label>
          <p className="auth-form__input-error">
            Что-то пошло не так...
          </p>

          <button type="submit" className="auth-form__submit-btn auth-form__submit-btn_login-offset">
            Войти
          </button>
          <p className="auth-form__hint">
            Ещё не зарегистрированы?
            <Link to="/signup" className="auth-form__redirect-link">
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
