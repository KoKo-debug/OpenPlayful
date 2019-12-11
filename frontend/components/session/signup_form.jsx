import React from 'react';
import { merge } from 'lodash';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password2: "",
      location_id: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.passwordCheck = this.passwordCheck.bind(this);
    // this.dynamicPasswordCheck = this.dynamicPasswordCheck.bind(this);
  }


  passwordCheck() {
    const {password, password2} = this.state;
    let msg1 = document.getElementById("pass-error");
    let msg2 = document.getElementById("pass2-error");
    const redColor = "#ff0000";
    if (password.length < 8 && password.length !== 0) {
      msg1.style.color = redColor;
      msg1.innerHTML = "Passwords must be 8 characters or more.";
    } else {
      msg1.innerHTML ="";
    }

    if (password2 !== "" && password !== password2) {
      msg2.style.color = redColor;
      msg2.innerHTML = "Passwords do not match";
    } else {
      msg2.innerHTML = "";
    }
  }

  //not working, pass is never turning true.
  // dynamicPasswordCheck() {
  //   let pass = false;
  //   const {password, password2} = this.state;
  //   if (password.length > 7 || pass) {
  //     pass = true;
  //   }
  //   debugger
  //   if (pass) {
  //     if (password.length < 8) {
  //       msg1.style.color = redColor;
  //       msg1.innerHTML = "Passwords must be 8 characters or more.";
  //     } else {
  //       msg1.innerHTML = "";
  //     }
  //   }
  // }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    delete user.password2;
    this.props.submitForm(user);
  }
  
  componentDidMount() {
    this.props.fetchLocations();
  }



  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }


  render() {
    const { locations } = this.props;
    let locationLis = locations.map(location => <option value={location.id} key={location.id}>{location.name}</option>);
    return(
      <div className="signup-form-container">
        <header>Welcome to OpenTable!</header>
        
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <input type="text" 
                 placeholder="First Name *"
                 onChange={this.update("first_name")}
          />
          <input type="text"
                 placeholder="Last Name *"
                 onChange={this.update("last_name")}
          />
          <input type="email"
                 placeholder="Enter email *"
                 onChange={this.update("email")}
          />
          <input type="password"
                 placeholder="Enter passwrord *"
                 onChange={this.update("password")}
                //  onChange={this.dynamicPasswordCheck}
                 onBlur={this.passwordCheck}
                 id="password"
          />
          <div id="pass-error"></div>
          <input type="password"
                 placeholder="Re-enter password *"
                 onChange={this.update("password2")}
                 onBlur={this.passwordCheck}
                 id="password2"
          />
          <div id="pass2-error"></div>
          <select id="location" onChange={this.update("location_id")}>
            <option value="None">Primary Dining Location *</option>
            {locationLis}
          </select>
          <button className ="create-account">Create Account</button>
        </form>
      </div>
    )

  }
}

export default SignupForm

