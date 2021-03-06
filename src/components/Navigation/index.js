import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import styles from './navigation.module.css';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div className={styles.navigationContainer}>
    <Link to={ROUTES.HOME}>Home</Link>
    <Link to={ROUTES.ACCOUNT}>Account</Link>
    <Link to={ROUTES.ADMIN}>Admin</Link>
    <SignOutButton />
  </div>
);

const NavigationNonAuth = () => (
  <div className={styles.navigationContainer}>
    <Link to={ROUTES.HOME}>React Authentication</Link>
  </div>
);

export default Navigation;