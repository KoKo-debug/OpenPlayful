import React from 'react';
import { merge } from 'lodash';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSignin = this.demoSignin.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.signinForm(user).then(this.props.closeModal());
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  demoSignin(e) {
    e.preventDefault();
    if (e.target.id === "demo-signin") {
      let user = {
        email: "demo@gmail.com",
        password: "demopass"
      }
      this.props.signinForm(user).then(user => this.props.closeModal())
    }
  }

  otherModalFunc() {
    this.props.closeModal();
    this.props.otherModal();
  }

  render() {
    return(
      <div className="signin-form-container">
          <header className="form-header">Please sign in</header>
          <ul className="errors">
            {this.renderErrors()}
          </ul>
          <form onSubmit={this.handleSubmit} className="signin-form-box">
            <input type="email"
                   placeholder="Email"
                   onChange={this.update("email")}
            />
            <input type="password"
                   placeholder="Password"
                   onChange={this.update("password")}
            />
            <button className="signin-button">Sign In</button>
            <span id="dontWantForm">Don't want to complete the form?</span>
            <button id="demo-signin" onClick={this.demoSignin}>
              Sign in as demo user
            </button>
            <div className="newToContainer">
            <span id="newToPlay">New to OpenPlayful?</span>
            <button id="newToButton" onClick={() => this.otherModalFunc()}>Create an account</button>
            </div>
          </form>
      </div>
    )
  }
}

export default SigninForm;