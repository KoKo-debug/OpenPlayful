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
    this.props.submitForm(user).then(this.props.closeModal());
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
    if (e.target.id === "demo-singin") {
      let user = {
        emails: "demo@gmail.com",
        password: "demopass"
      }
      this.props.submitForm(user).then(user => this.props.closeModal())
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
          {this.renderErrors()}
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
            <button id="demo-signin" onClick={this.demoSignin}>
              Sign in as demo user
            </button>
            <h1>New to OpenTable?</h1>
            <button onClick={() => this.otherModalFunc()}>Create an account</button>
          </form>
      </div>
    )
  }
}

export default SigninForm;