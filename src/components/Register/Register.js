import './Register.css';

import { Link } from "react-router-dom";

import Header from "../Heaader/Header";

export default function Register() {
  return(
    <div className="page page_type_auth">
      <Header auth={true} />
      <div className="auth-form">
        <h1 className="auth-form__title">
          Добро пожаловать!
        </h1>
        <form className="auth-form__form-container" noValidate>
          <label className="auth-form__field">
            Имя
            <input
              className="auth-form__input"
              type="text"
              minLength={2}
              maxLength={30}
              required
            />
          </label>
          <p className="auth-form__input-error">
            Недопустимое имя
          </p>

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

          <button type="submit" className="auth-form__submit-btn">
            Зарегистрироваться
          </button>
          <p className="auth-form__hint">
            Уже зарегистрированы?
            <Link to="/signin" className="auth-form__redirect-link">
              Войти
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
