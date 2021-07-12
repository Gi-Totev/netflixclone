import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Browse from "./pages/Browse";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import useAuthListener from "./hooks/useAuthListener";

const App = () => {
  const user = useAuthListener();

  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.SIGN_IN}
      >
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.SIGN_UP}
      >
        <SignUp />
      </IsUserRedirect>

      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.HOME}
      >
        <Home />
      </IsUserRedirect>

      <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
    </Router>
  );
};

export default App;
