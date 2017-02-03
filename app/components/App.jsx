import React, {Component} from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <Link to="signin">Sign In</Link>
        <span> | </span>
        <Link to="signup">Sign Up</Link>
        <span> | </span>
        <Link to="signout">Sign Out</Link>
        <h1>
          Home Page
        </h1>
      </div>
    );
  }
}

export default App;
