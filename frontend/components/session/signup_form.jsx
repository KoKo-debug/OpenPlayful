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
      <div className="Signup">
        <header>Welcome to OpenTable!</header>
        
        <form onSubmit={this.handleSubmit} className="signup-form-box">
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

