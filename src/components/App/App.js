import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom';

import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import MainPage from '../MainPage/MainPage';
import Register from "../Register/Register";
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/signup" component={Register} />
        <Route path="/signin" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/movies" component={Preloader} />
        <Route exact path="/" component={MainPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default withRouter(App);
