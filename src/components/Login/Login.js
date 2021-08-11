import './Login.css';
import { Link, withRouter } from 'react-router-dom';
import { useState } from 'react';
import {mainApi} from '../../utils/MainApi';

function Login(props) {
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [serverErrorShown, setServerErrorShown] = useState(false);
  const [inputErrorShown, setInputErrorShown] = useState(false);

  function handleInputChange(e) {
    switch (e.target.name) {
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

  function handleFormSubmit(e) {
    e.preventDefault();
    mainApi.login({
      email: userMail,
      password: userPassword,
    })
      .then(mainApi.checkToken)
      .then(({ name, email }) => {
        console.log(props);
        props.setters.setName(name);
        props.setters.setMail(email);
        props.setters.setLogged(true);
        props.history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
        setServerErrorShown(true);
      });
  }

  return(
    <div className="page page_type_auth">
      <div className="auth-form">
        <h1 className="auth-form__title">
          Рады видеть!
        </h1>
        <form className="auth-form__form-container" noValidate onSubmit={handleFormSubmit}>
          <label className="auth-form__field">
            E-mail
            <input
              className="auth-form__input"
              name="userMail"
              type="email"
              placeholder="example@mail.ru"
              value={userMail}
              onChange={handleInputChange}
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
              name="userPassword"
              type="password"
              value={userPassword}
              onChange={handleInputChange}
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

export default withRouter(Login);
