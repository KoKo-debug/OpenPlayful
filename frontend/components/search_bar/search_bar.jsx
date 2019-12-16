import React from 'react';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeAMPM: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  populateTime() {
    let times = [];
    let hours, minutes, ampm;
    for (let i = 0; i < 1440; i += 30) {
      hours = Math.floor(i / 60);
      minutes = i % 60;
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      ampm = hours % 24 < 12 ? "AM" : "PM";
      hours = hours % 12;
      if (hours === 0) {
        hours = 12;
      }
      times.push({
        time: hours + ":" + minutes + " " + ampm
        // hours: hours,
        // minutes: minutes,
        // ampm: ampm
      });
    }
    return times;
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  
  //for now just fetches all kitches disregarding options selected
  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchAllCafes().then( cafes => 
      this.props.history.push('/cafes'))
  }

  render() {
    let timeLis = this.populateTime().map(time => 
      <option value={time.time} key={time.time}>{time.time}</option>
    );
    
    // fix this later as bonus
    // let now = new Date()

    return(
      <div className="search-bar">
        <header className="search-header">
          Find your animal for any occasion
        </header>
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <input type="date" name="" id=""/>
          
          <select id="time" defaultValue={this.state.timeAMPM} onChange={this.update("timeAMPM")}>
            {timeLis}
          </select>

          <button>Let's go</button>
        </form>
      </div>

    );
  }
}

export default SearchBar;