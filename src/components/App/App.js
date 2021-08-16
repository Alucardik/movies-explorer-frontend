import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

function App() {
  const [curUserName, setCurUserName] = useState("");
  const [curUserMail, setCurUserMail] = useState("");
  const [curUserId, setCurUserId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // check current user in cookies on mount
  useEffect(() => {
    mainApi.checkToken()
      .then(({ name, email, _id }) => {
        setCurUserId(_id);
        setCurUserName(name);
        setCurUserMail(email);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <currentUserContext.Provider value={{
      name: curUserName,
      email: curUserMail,
      id: curUserId,
      loggedIn: loggedIn,
    }}>
      <Header />
      <Switch>
        <ProtectedRoute inverse={true} path="/signup" component={Register} />
        <ProtectedRoute
          inverse={true}
          path="/signin"
          component={Login}
          setters={{
            setName: setCurUserName,
            setMail: setCurUserMail,
            setLogged: setLoggedIn,
          }}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          setters={{
            setName: setCurUserName,
            setMail: setCurUserMail,
            setLogged: setLoggedIn,
          }}
        />
        <ProtectedRoute path="/movies" component={Movies} />
        <ProtectedRoute path="/saved-movies" component={SavedMovies} />
        <Route exact path="/" component={MainPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </currentUserContext.Provider>
  );
}

export default withRouter(App);
