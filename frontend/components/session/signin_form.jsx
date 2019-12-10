import React from 'react';


class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      Password: ""
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
    const user = Object.assign({}, this.state);
    this.props.submitForm(user);
  }

  renderErrors() {

  }

  render() {
    return(
      <div className="signin-form-container">
          <header>Please sign in</header>
          
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <input type="text"
                   value="email"
                   onFocus="if (this.value=='email') this.value=='';"
                  //  value={this.state.email}
                   onChange={this.update("email")}
            />
            <input type="password"
                   value={this.state.password}
                   onChange={this.update("password")}
            />
            <button>Sign In</button>
          </form>
      </div>
    )
  }
}

export default SigninForm;