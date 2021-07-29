import './Login.css';
import { Link } from "react-router-dom";

export default function Login() {
  function handleLogin() {
    // login logic will later be described here
    return "/movies";
  }

  return(
    <div className="page page_type_auth">
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
              placeholder="example@mail.ru"
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

          <Link to={handleLogin} className="auth-form__submit-btn auth-form__submit-btn_login-offset">
            Войти
          </Link>
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
