import './Profile.css';

import React from 'react';
import { withRouter } from 'react-router-dom';

import { currentUserContext } from '../../contexts/CurrentUserContext';
import {mainApi} from "../../utils/MainApi";


class Profile extends React.Component {
  static contextType = currentUserContext;

  constructor(props) {
    super(props);

    this.nameRef = React.createRef();

    this.state = {
      editAllowed: false,
      userName: "Денис",
      userMail: "example@mail.ru",
    }
  }

  // get cur user's data from context
  componentDidMount() {
    this.setState({
      userName: this.context.name,
      userMail: this.context.email,
    });
  }

  handleEditClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      if (!prevState.editAllowed) {
        // waiting for form to be enabled for editing,
        // otherwise focus won't work
        setTimeout(() => {
          this.nameRef.current.focus();
        }, 0);
      }
      return {
        editAllowed: !prevState.editAllowed,
      };
    });
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleExit = () => {
    mainApi.logout()
      .then(() => {
        this.props.setters.setName("");
        this.props.setters.setMail("");
        this.props.setters.setLogged(false);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return(
      <div className="page">
        <div className="profile">
          <h1 className="profile__title">
            Привет, {this.state.userName}!
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
                minLength={2}
                maxLength={30}
                disabled={!this.state.editAllowed}
                onChange={this.handleChange}
              />
            </label>

            <label className="profile__info-field">
              E-mail
              <input
                className="profile__input"
                name="userMail"
                placeholder="example@mail.ru"
                value={this.state.userMail}
                type="email"
                disabled={!this.state.editAllowed}
                onChange={this.handleChange}
              />
            </label>
          </form>
          <div className="profile__controls">
            <button
              type="submit"
              className={`profile__btn ${this.state.editAllowed && "profile__btn_type_save"}`}
              onClick={this.handleEditClick}
            >
              {this.state.editAllowed ? "Сохранить" : "Редактировать"}
            </button>
            <button type="button" className="profile__btn profile__btn_type_exit" onClick={this.handleExit}>
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
