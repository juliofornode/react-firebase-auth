import React, {Component} from 'react';
import {Link} from 'react-router';

class ConfidentialData extends Component {
  render() {
    return (
      <div>
        <Link to="signin">Sign In</Link>
        <span> | </span>
        <Link to="signup">Sign Up</Link>
        <span> | </span>
        <Link to="signout">Sign Out</Link>
        <h1>
          Confidential Data
        </h1>
        <p>This data is confidential. Only authorized users can see it.</p>
      </div>
    );
  }
}

export default ConfidentialData;
