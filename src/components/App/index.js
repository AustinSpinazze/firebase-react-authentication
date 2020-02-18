import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import * as ROUTES from "../../constants/routes";
import { withFirebase } from '../Firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { authUser: null };
  }

  // The helper function onAuthStateChanged() receives a function as parameter that has access to the authenticated user. Also, the passed function is 
  // called every time something changes for the authenticated user. It is called when a user signs up, signs in, and signs out. If a user signs out, 
  // the authUser object becomes null, so the authUser property in the local state is set to null and all components depending on it adjust their behavior 
  // (e.g. display different options like the Navigation component).

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStatechanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
    // We also want to avoid memory leaks that lead to performance issues, so we'll remove the listener if the component unmounts.
    this.listener();
  }

  render() {
    return (
      // Router makes it possible to navigate from url to url on the client-side application without another request to a web server for every route change.
      // The application is only fetched once from a web server, after which all routing is done on the client-side with React Router.
      <Router>
        <div>
          <Navigation authUser={this.state.authUser}/>
          <hr />
      {/* If a route matches a path prop, the respective component will be displayed; thus, all the page components in the App component are exchangeable by changing the route,
      but the Navigation component stays fixed independently of any route changes. This is how you enable a static frame with various components (e.g. Navigation) around your 
      dynamic pages driven by routes. It's all made possible by React's powerful composition. */}
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
