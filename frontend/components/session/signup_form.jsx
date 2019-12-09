import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: "",
      location: ""
    };
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.submitForm(this.props)
  // }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  render() {

    return(
      <div className="Signup">
        <header>
          Welcome to OpenTable!
        </header>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
                 value={this.state.firstName} 
                 onChange={this.update("firstName")}
          />
          <input type="text"
                 value={this.state.lastName}
                 onChange={this.update("lastName")}
          />
          <button>Create Account</button>
        </form>
      </div>
    )

  }
}

export default SignupForm

