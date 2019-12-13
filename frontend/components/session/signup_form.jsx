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
      location_id: 0,
      pass: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.passwordCheck = this.passwordCheck.bind(this);
    this.dynamicPasswordCheck = this.dynamicPasswordCheck.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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

  //can't do it

  locationCheck() {
    const { location_id } = this.state;
    let msg3 = document.getElementById("location-error");
    const redColor = "#ff0000";
    if (location_id === "") {
      msg3.style.color = redColor;
      msg3.innerHTML = "Select a dining city";
    } else {
      msg3.innerHTML = "";
    }
  }

  //not working, pass is never turning true.
  dynamicPasswordCheck() {
    let msg1 = document.getElementById("pass-error");
    if (this.state.password.length > 7 || this.state.pass) {
      if (this.state === false) this.setState({pass: true});
    }
    if (this.state.pass) {
      if (password.length < 8) {
        msg1.style.color = redColor;
        msg1.innerHTML = "Passwords must be 8 characters or more.";
      } else {
        msg1.innerHTML = "";
      }
    }
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let msg1 = document.getElementById("pass-error");
    let msg2 = document.getElementById("pass2-error");
    const user = merge({}, this.state);
    delete user.password2;
    if (msg1 === "" & msg2 === "" ) {
    } this.props.submitForm(user).then(user => this.props.closeModal());
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
        <header className="form-header">
          Welcome to OpenPlayful!
        </header>
        
        <ul className="errors">
          {this.renderErrors()}
        </ul>

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
                 placeholder="Enter password *"
                 onChange={this.update("password")}
                 onInput={this.dynamicPasswordCheck()}
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
          <div id="location-arrow">
            <img id="letterV" src={window.letterV} alt="V" />
          </div>
          <select id="location" defaultValue="" onChange={this.update("location_id")}>
            <option selected disabled>Primary Dining Location *</option>
            {locationLis}
          </select>
          <div id="location-error"></div>
          <button className ="create-account-button">Create Account</button>
          <span id="dontWantForm">Don't want to complete the form?</span>
          <button id="demo-signin" onClick={this.demoSignin}>
            Sign in as demo user
          </button>
        </form>
      </div>
    )

  }
}

export default SignupForm

