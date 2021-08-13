import './Login.css';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import {mainApi} from '../../utils/MainApi';
import isEmail from "validator/es/lib/isEmail";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userMail: "",
      userPassword: "",
      serverError: "",
      userMailError: "",
      userPasswordError: "",
      formValid: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userMail !== this.state.userMail || prevState.userPassword !== this.state.userPassword) {
      this.setState({formValid: this.checkInputValidity()});
    }
  }

  checkInputValidity = () => {
    return (this.state.userMailError === "" && this.state.userMail !== "") &&
      (this.state.userPasswordError === "" && this.state.userPassword !== "");
  }

  handleInputChange = (e) => {
    // resetting error message from server
    this.setState({serverError: ""});
    const { name, value } = e.target;
    this.setState({[name]: value});
    (!e.target.validity.valid)
      ? this.setState({[`${name}Error`]: e.target.validationMessage})
      : this.setState({[`${name}Error`]: ""});
    if (name === "userMail") {
      isEmail(value)
        ? this.setState({[`${name}Error`]: ""})
        : this.setState({[`${name}Error`]: "Пожалуйста, введите корректный email"});
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    mainApi.login({
      email: this.state.userMail,
      password: this.state.userPassword,
    })
      .then(mainApi.checkToken)
      .then(({ name, email }) => {
        this.props.setters.setName(name);
        this.props.setters.setMail(email);
        this.props.setters.setLogged(true);
        this.setState({serverError: "",});
        this.props.history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
        this.setState({serverError: err});
      });
  }

  render() {
    return(
      <div className="page page_type_auth">
        <div className="auth-form">
          <h1 className="auth-form__title">
            Рады видеть!
          </h1>
          <form className="auth-form__form-container" noValidate onSubmit={this.handleFormSubmit}>
            <label className="auth-form__field">
              E-mail
              <input
                className="auth-form__input"
                name="userMail"
                type="email"
                placeholder="example@mail.ru"
                value={this.state.userMail}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <p className={`auth-form__input-error ${(this.state.userMailError !== "") && "auth-form__input-error_visible"}`}>
              {this.state.userMailError}
            </p>

            <label className="auth-form__field">
              Пароль
              <input
                className="auth-form__input"
                name="userPassword"
                type="password"
                value={this.state.userPassword}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <p className={`auth-form__input-error ${(this.state.userPasswordError !== "" || this.state.serverError !== "") && "auth-form__input-error_visible"}`}>
              {(this.state.userPasswordError !== "") ? this.state.userPasswordError : this.state.serverError}
            </p>

            <button
              type="submit"
              className={`auth-form__submit-btn auth-form__submit-btn_login-offset ${!this.state.formValid && "auth-form__submit-btn_disabled"}`}
              disabled={!this.state.formValid}
            >
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

}

export default withRouter(Login);
