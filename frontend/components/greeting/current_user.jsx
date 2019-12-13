import React from 'react';


class PersonalGreetings extends React.Component {
  constructor(props) {
    super(props);
    this.openDrop = this.openDrop.bind(this);
    this.reference = React.createRef();
    this.state = {
      dropdown: false
    };
  }

  openDrop() {
    if (this.state.dropdown === false) {
      this.setState({
        dropdown: true
      })
    } else {
      this.setState({
        dropdown: false
      })
    }
  }

  // openDrop() {
  //     this.setState({
  //       dropdown: true
  //   });
  // }


  someFunction(ref) {
    return event => {
      if (ref.current.contains(event.relatedTarget) === false) {
        this.setState({
          dropdown: false
        });
      }
    };
  }

  render() {
    const {currentUser, logout} = this.props;
    return(
      <hgroup className="header-group">
        <div className="dropdown" ref={this.reference}>
          <button onBlur={this.someFunction(this.reference)} onClick={() => this.openDrop()} className="drop-button1">
            <h2 className="hi-user">Hi, {currentUser.first_name}</h2>
          </button>
          <button onBlur={this.someFunction(this.reference)} onClick={() => this.openDrop()} className="drop-button2">
            <img id="letterV" src={window.letterV} alt="V" />
          </button>
          <div className={ this.state.dropdown ? "notch-container show" : "notch-container" }>
              <div className="notch"></div>
              <div className="outer-notch"></div>
              <div id="drop-items" className={ this.state.dropdown ? "drop-content show" : "drop-content"}>
                <a className="profile-link">My Profile</a>
                <a className="history-link">My Dining History</a>
                <a className="saved-link">My Saved Restaurants</a>
                <button className="signout-button" onClick={logout}>Sign out</button>
              </div>
          </div>
        </div>
      </hgroup>
    )
  }
}

export default PersonalGreetings;


// onBlur = { this.someFunction(this.reference) }  NEXT TO ON CLICK= this.openDop()