import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom';
import React from 'react';

import { mainApi } from '../../utils/MainApi';
import { currentUserContext } from '../../contexts/CurrentUserContext';

import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Movies from "../Movies/Movies";
import SavedMovies from '../SavedMovies/SavedMovies';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Register from "../Register/Register";
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curUserName: "",
      curUserMail: "",
      loggedIn: false,
    };
  }

  // check current user in cookies on mount
  componentDidMount() {
    mainApi.checkToken()
      .then(({ name, email }) => {
        this.setState({
          curUserName: name,
          curUserMail: email,
          loggedIn: true,
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleRegister = (name, email, password) => {
    return mainApi.register({
      name,
      email,
      password,
    })
      .then(() => {
        return mainApi.login({email, password});
      })
      .then(() => {
        this.props.history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  handleLogin = (email, password) => {
    return mainApi.login({
      email,
      password,
    })
      .then(mainApi.checkToken)
      .then(({ name, email }) => {
        this.setState({
          curUserName: name,
          curUserMail: email,
          loggedIn: true,
        });
        this.setState({serverError: "",});
        this.props.history.push("/movies");
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  handleLogout = () => {
    mainApi.logout()
      .then(() => {
        localStorage.removeItem("likedFilms");
        localStorage.removeItem("storedFilms");
        this.setState({
          curUserName: "",
          curUserMail: "",
          loggedIn: false,
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleProfileUpdate = (name, email) => {
    return mainApi.updateUser({name, email})
      .then(({ name, email }) => {
        this.setState({
          curUserName: name,
          curUserMail: email,
        });
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  render() {
    return (
      <currentUserContext.Provider value={{
        name: this.state.curUserName,
        email: this.state.curUserMail,
        loggedIn: this.state.loggedIn,
      }}>
        <Header />
        <Switch>
          <ProtectedRoute
            inverse={true}
            path="/signup"
            component={Register}
            onRegister={this.handleRegister}
          />
          <ProtectedRoute
            inverse={true}
            path="/signin"
            component={Login}
            onLogin={this.handleLogin}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            onProfileUpdate={this.handleProfileUpdate}
            onLogout={this.handleLogout}
          />
          <ProtectedRoute path="/movies" component={Movies} />
          <ProtectedRoute path="/saved-movies" component={SavedMovies} />
          <Route exact path="/" component={MainPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </currentUserContext.Provider>
    );
  }

}

export default withRouter(App);
