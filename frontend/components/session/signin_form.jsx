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

  }

  otherModalFunc() {
    this.props.closeModal();
    this.props.otherModal();
  }

  render() {
    return(
      <div className="signin-form-container">
          <header className="form-header">Please sign in</header>
          
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
            <h1>New to OpenTable?</h1>
            <button onClick={() => this.otherModalFunc()}>Create an account</button>
          </form>
      </div>
    )
  }
}

export default SigninForm;