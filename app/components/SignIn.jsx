import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    };
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getEmail(eventObject) {
    this.setState({ email: eventObject.target.value });
  }

  getPassword(eventObject) {
    this.setState({ password: eventObject.target.value });
  }

  handleClick() {
    this.setState({ errorMessage: '' });
    let self = this;
    firebaseApp.auth()
      .signInWithEmailAndPassword(self.state.email, self.state.password)
      .catch(function(err) {
        const errorMessage = err.message;
        self.setState({ errorMessage: errorMessage });
      });
    this.setState({ email: '', password: ''});
  }


  render() {
    return (
      <div>
        <div>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="signup">Sign Up</Link>
          <span> | </span>
          <Link to="signout">Sign Out</Link>
          <h1>
            Sign In Page
          </h1>
          <div className="form-inline">
            <div className="form-group">
              <input className="form-control" type="text" placeholder="email" onChange={this.getEmail}></input>
              <input className="form-control" type="password" placeholder="password" onChange={this.getPassword}></input>
              <button className="btn btn-success" type="button" onClick={this.handleClick}>Sign In</button>
            </div>
          </div>
          <div>{this.state.errorMessage}</div>
        </div>
      </div>
    );
  }
}

export default SignIn;
