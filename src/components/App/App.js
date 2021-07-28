import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom';

import NotFound from '../NotFound/NotFound';
import MainPage from '../MainPage/MainPage';
import Register from "../Register/Register";
import Login from '../Login/Login';

function App() {
  return (
    <Switch>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default withRouter(App);
