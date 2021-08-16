import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { currentUserContext } from "../../contexts/CurrentUserContext";

export default function ProtectedRoute ({component: Component, inverse=false, ...props}) {
  const { loggedIn } = useContext(currentUserContext);

  return (
    <Route>
      {() => {
        if (inverse) {
          return (!loggedIn) ? <Component {...props} /> : <Redirect to="/" />
        } else {
          return (loggedIn) ? <Component {...props} /> : <Redirect to={props.path}/>
        }
      }}
    </Route>
  );
}
