import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import * as ROUTES from "../../constants/routes";
// import { withFirebase } from '../Firebase';
// import { AuthUserContext } from '../Session';
import { withAuthentication } from '../Session';

const App = () => (
  // Router makes it possible to navigate from url to url on the client-side application without another request to a web server for every route change.
  // The application is only fetched once from a web server, after which all routing is done on the client-side with React Router.
    <Router>
      <div>
        <Navigation />
        <hr />
        {/* If a route matches a path prop, the respective component will be displayed; thus, all the page components in the App component are exchangeable by changing the route,
        but the Navigation component stays fixed independently of any route changes. This is how you enable a static frame with various components (e.g. Navigation) around your 
        dynamic pages driven by routes. It's all made possible by React's powerful composition. */}
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </div>
    </Router>
);

export default withAuthentication(App);
