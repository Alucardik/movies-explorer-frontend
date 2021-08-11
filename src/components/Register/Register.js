import './Register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { mainApi } from '../../utils/MainApi';

export default function Register() {
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [serverErrorShown, setServerErrorShown] = useState(false);
  const [inputErrorShown, setInputErrorShown] = useState(false);

  function handleInputChange(e) {
    switch (e.target.name) {
      case "userName":
        setUserName(e.target.value);
        break;
      case "userMail":
        setUserMail(e.target.value);
        break;
      case "userPassword":
        setUserPassword(e.target.value);
        break;
      default:
        return;
    }
  }

  function handleFormSubmit() {
    mainApi.register({
      name: userName,
      email: userMail,
      password: userPassword,
    })
      .then(() => {
        return "/signin";
      })
      .catch((err) => {
        console.log(err);
        setServerErrorShown(true);
        return "/signup";
      })
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
              name="userName"
              type="text"
              placeholder="Денис"
              minLength={2}
              maxLength={30}
              value={userName}
              onChange={handleInputChange}
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
              name="userMail"
              value={userMail}
              onChange={handleInputChange}
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
              name="userPassword"
              value={userPassword}
              onChange={handleInputChange}
              required
            />
          </label>
          <p className="auth-form__input-error">
            Что-то пошло не так...
          </p>

          <Link to={handleFormSubmit} className="auth-form__submit-btn">
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
