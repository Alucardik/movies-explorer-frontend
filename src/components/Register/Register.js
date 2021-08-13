import './Register.css';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import { mainApi } from '../../utils/MainApi';
import isEmail from 'validator/es/lib/isEmail';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userMail: "",
      userPassword: "",
      userName: "",
      serverError: "",
      userMailError: "",
      userPasswordError: "",
      userNameError: "",
      formValid: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userMail !== this.state.userMail ||
      prevState.userPassword !== this.state.userPassword ||
      prevState.userName !== this.state.userName) {
      this.setState({formValid: this.checkInputValidity()});
    }
  }

  checkInputValidity = () => {
    return (this.state.userMailError === "" && this.state.userMail !== "") &&
      (this.state.userPasswordError === "" && this.state.userPassword !== "") &&
      (this.state.userNameError === "" && this.state.userName !== "");
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
    mainApi.register({
      name: this.state.userName,
      email: this.state.userMail,
      password: this.state.userPassword,
    })
      .then(() => {
        return mainApi.login({email: this.state.userMail, password: this.state.userPassword});
      })
      .then(() => {
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
            Добро пожаловать!
          </h1>
          <form className="auth-form__form-container" noValidate onSubmit={this.handleFormSubmit}>
            <label className="auth-form__field">
              Имя
              <input
                className="auth-form__input"
                name="userName"
                type="text"
                placeholder="Денис"
                pattern="[а-яА-Яa-zA-Z][а-яА-Яa-zA-Z -]*"
                minLength={2}
                maxLength={30}
                value={this.state.userName}
                onChange={this.handleInputChange}
                required
              />
            </label>
            <p className={`auth-form__input-error ${(this.state.userNameError !== "") && "auth-form__input-error_visible"}`}>
              {this.state.userNameError}
            </p>

            <label className="auth-form__field">
              E-mail
              <input
                className="auth-form__input"
                type="email"
                name="userMail"
                value={this.state.userMail}
                onChange={this.handleInputChange}
                placeholder="example@mail.ru"
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
                type="password"
                name="userPassword"
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
              className={`auth-form__submit-btn ${!this.state.formValid && "auth-form__submit-btn_disabled"}`}
              disabled={!this.state.formValid}
            >
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

}

export default withRouter(Register);
