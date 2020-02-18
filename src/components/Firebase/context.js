// We created a firebase class in firebase.js but are not using it in our React application yet. In this file, we'll connect the Firebase with the React world. The simple approach 
// is to create a Firebase instance with the Firebase class, and then import the instance (or class) in every React component where it's needed. That's not the best approach though, 
// for two reasons:
// 1. It is more difficult to test your React components.
// 2. It is more error prone, because Firebase should only be initialized once in your application (singleton) and by exposing the Firebase class to every React component, you could 
// end up by mistake with multiple Firebase instances.
// An alternative way is to use React's Context API to provide a Firebase instance once at the top-level of your component hierarchy

import React, { Component } from 'react';

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;

