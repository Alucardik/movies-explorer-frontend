import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { currentUserContext } from "../../contexts/CurrentUserContext";

export default function ProtectedRoute ({component: Component, ...props}) {
  const { loggedIn } = useContext(currentUserContext);

  return (
    <Route>
      {() =>
        (loggedIn) ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  );
}
