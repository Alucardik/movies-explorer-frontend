import './Profile.css';

import React from 'react';
import { withRouter } from 'react-router-dom';

import { currentUserContext } from '../../contexts/CurrentUserContext';
import isEmail from "validator/es/lib/isEmail";


class Profile extends React.Component {
  static contextType = currentUserContext;

  constructor(props) {
    super(props);

    this.nameRef = React.createRef();

    this.state = {
      editAllowed: false,
      formValid: true,
      userName: "Денис",
      userMail: "example@mail.ru",
      userNameError: "",
      userMailError: "",
      serverRespondMsg: "",
      serverError: "",
    }
  }


  // get cur user's data from context
  componentDidMount() {
    this.setState({
      userName: this.context.name,
      userMail: this.context.email,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userMail !== this.state.userMail || prevState.userName !== this.state.userName) {
      this.setState({formValid: this.checkInputValidity()});
    }
  }

  checkInputValidity = () => {
    return (this.state.userMailError === "") &&
      (this.state.userNameError === "");
  }

  handleChange = (e) => {
    this.setState({serverRespondMsg: ""});
    this.setState({serverError: ""});
    const {name, value} = e.target;
    this.setState({[name]: value});
    (!e.target.validity.valid)
      ? this.setState({[`${name}Error`]: e.target.validationMessage})
      : this.setState({[`${name}Error`]: ""});

    if (name === "userMail") {
      isEmail(value)
        ? this.setState({[`${name}Error`]: ""})
        : this.setState({[`${name}Error`]: "Пожалуйста, введите корректный email"});
    }

    if ((name === "userName")
      ? (value !== this.context.name || this.state.userMail !== this.context.email)
      : (value !== this.context.email || this.state.userName !== this.context.name)) {
      this.setState({
        editAllowed: true,
      });
    } else {
      this.setState({
        editAllowed: false,
      });
    }
  }

  handleEditClick = (e) => {
    e.preventDefault();
    this.setState({editAllowed: false});
    this.props.onProfileUpdate(this.state.userName, this.state.userMail)
      .then(() => {
        this.setState({serverRespondMsg: "Данные обновлены"});
      })
      .catch((err) => {
        this.setState({serverError: err, editAllowed: true});
      });
  }

  render() {
    return(
      <div className="page">
        <div className="profile">
          <h1 className="profile__title">
            Привет, {this.context.name}!
          </h1>
          <form className="profile__info" noValidate>
            <label className="profile__info-field">
              Имя
              <input
                ref={this.nameRef}
                className="profile__input"
                name="userName"
                type="text"
                placeholder="Денис"
                value={this.state.userName}
                pattern="[а-яА-Яa-zA-Z][а-яА-Яa-zA-Z -]*"
                minLength={2}
                maxLength={30}
                onChange={this.handleChange}
                required
              />
            </label>
            <p className={`profile__input-error ${(this.state.userNameError !== "") && "profile__input-error_visible"}`}>
              {this.state.userNameError}
            </p>

            <label className="profile__info-field">
              E-mail
              <input
                className="profile__input"
                name="userMail"
                placeholder="example@mail.ru"
                value={this.state.userMail}
                type="email"
                onChange={this.handleChange}
                required
              />
            </label>
            <p className={`profile__input-error ${(this.state.userPasswordError !== "" || this.state.serverError !== "") && "profile__input-error_visible"}`}>
              {(this.state.userMailError !== "") ? this.state.userMailError : this.state.serverError}
            </p>
            <p className={`profile__server-response-positive ${(this.state.serverRespondMsg !== "") && "profile__server-response-positive_visible"}`}>
              {this.state.serverRespondMsg}
            </p>
          </form>
          <div className="profile__controls">
            <button
              type="submit"
              className={`profile__btn ${(!this.state.editAllowed || !this.state.formValid) && "profile__btn_type_disabled"}`}
              onClick={this.handleEditClick}
              disabled={!this.state.editAllowed || !this.state.formValid}
            >
              Редактировать
            </button>
            <button type="button" className="profile__btn profile__btn_type_exit" onClick={this.props.onLogout}>
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
