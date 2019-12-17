import React from 'react';

class CafeShowReservation extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      timeAMPM: ""
    };

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
  
  populateSize() {
    let size = [];
    for (let i = 1; i < 21; i ++) {
      size.push(i);
    }
    return size;
  }

  render() {

    let partySizeLis = this.populateSize().map(size =>
      <option value={size} key={size}>For {size}</option>
    );

    let timeLis = this.populateTime().map(time =>
      <option value={time.time} key={time.time}>{time.time}</option>
    );

    return(
      <div className="right-side-container">

        <div className="show-reservation-container">
          <h1 class="reservation-header">
            Make a reservation
          </h1>

          <section>
            <div className="party-size">
              <h2>Party Size</h2>
              <div className="size-dropdown">
                <select id="size">
                  {partySizeLis}
                </select>
                <div id="location-arrow-size">
                  <img id="arrow" src={window.arrow} alt="down arrow" />
                </div>
              </div>
            </div>
          </section>

          <section className="date-time-container">
            <span className="date">
              <h2>
                Date
              </h2>
              <div className="date-dropdown">
                <input id="date-pick" type="date"/>
                <div id="location-arrow-size">
                  <img id="arrow" src={window.arrow} alt="down arrow" />
                </div>
              </div>
            </span>

            <span className="time">
              <h2>
                Time
              </h2>
              <div className="time-dropdown">
                <select id="time" defaultValue={this.state.timeAMPM} onChange={this.update("timeAMPM")}>
                  {timeLis}
                </select>
                <div id="location-arrow-size">
                  <img id="arrow" src={window.arrow} alt="down arrow" />
                </div>
              </div>   
            </span>
          </section>

          <section className="select-time-container">
            <h1 className="select-time-header">
              Select a time:
            </h1>
            <div>
              time slot buttons
            </div>
          </section>

          <section>
            Booked this many times today
          </section>

          <section>
            You're in luck! We still have # timeslots left
          </section>
        </div>
      </div>
    )
  }

}

export default CafeShowReservation;