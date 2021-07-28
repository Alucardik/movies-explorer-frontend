import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';

function App() {
  return (
    <Switch>
      <Route path="/">
        <MainPage />
      </Route>
      <Route path="*">
        <></>
      </Route>
    </Switch>
  );
}

export default withRouter(App);
