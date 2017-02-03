import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class SignOut extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="signin">Sign In</Link>
        <span> | </span>
        <Link to="signup">Sign Up</Link>
        <h1>Sign Out</h1>
        <button onClick={this.signOut}>Sign Out</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state: ', state);
  return {};
}


export default connect(mapStateToProps)(SignOut);
