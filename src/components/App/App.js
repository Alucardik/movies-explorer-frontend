import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <Switch>
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
