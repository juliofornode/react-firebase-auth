import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {saveUser} from './actions/actions';
import {Router, Route, browserHistory} from 'react-router';
import {firebaseApp} from './firebase';
import reducers from './reducers';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import ConfidentialData from './components/ConfidentialData';


firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    console.log('authorized user: ', user);
    store.dispatch(saveUser(user.email));
    browserHistory.push('/confidential-data');
  } else {
    console.log('non-authorized user');
    browserHistory.push('/signin');
  }
});

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
        <Route path="signin" component={SignIn} />
        <Route path="signup" component={SignUp} />
        <Route path="signout" component={SignOut} />
        <Route path="confidential-data" component={ConfidentialData} />
    </Router>
  </Provider>
  , document.getElementById('app')
);
