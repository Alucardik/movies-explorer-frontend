import './Register.css';
import { Link } from "react-router-dom";

export default function Register() {

  function handleRegister() {
    // register logic will later be described here
    return "/signin";
  }

  return(
    <div className="page page_type_auth">
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
              placeholder="Денис"
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

          <Link to={handleRegister} className="auth-form__submit-btn">
            Зарегистрироваться
          </Link>
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
