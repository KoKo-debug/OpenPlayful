import React from 'react';
import Map from './map';

class CafeShowReservation extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      timeAMPM: "",
      clickedOn: false,
    };
    
    this.handleClickOn = this.handleClickOn.bind(this);
  }


  timeSlots() {

    const {cafe} = this.props;

    return (
      <>

        <input
          type="submit"
          className="timeSlot"
          key={1}
          // onClick={}
          value={"1:30 PM"}
        />

        <input
          type="submit"
          className="timeSlot"
          key={2}
          // onClick={}
          value={"1:45 PM"}
        />

        <input
          type="submit"
          className="timeSlot"
          key={3}
          // onClick={}
          value={"2:00 PM"}
        />

        <input
          type="submit"
          className="timeSlot"
          key={4}
          // onClick={}
          value={"2:15 PM"}
        />

        <input
          type="submit"
          className="timeSlot"
          key={5}
          // onClick={}
          value={"2:30 PM"}
        />
      </>
    )
  }

  handleClickOn() {
    this.setState({
      clickedOn: true
    })
  }

  findTable(e) {
    if (this.state.clickedOn === false) {
      return(
        <button onClick={() => this.handleClickOn()} className="findTableButton">
          Find a Table
        </button>
      )
    } else {
      return(
        <>
          <h1 className="select-time-header">
            Select a time:
          </h1>
          <div>
            {this.timeSlots()}
          </div>
        </>
      )
    }

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
      <option value={size} key={size}>{size}</option>
    );

    let timeLis = this.populateTime().map(time =>
      <option value={time.time} key={time.time}>{time.time}</option>
    );

    const {cafe, cafes, fetchCafe} = this.props
    return(
      <div className="right-side-container">

        <div className="show-reservation-container">
          <h1 className="reservation-header">
            Make a reservation
          </h1>

          <section>
            <div className="party-size">
              <h2>Party Size</h2>
              <div className="size-dropdown">
                <div className="for-num">
                  For
                </div>
                <select defaultValue="2" id="size">
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
            {this.findTable()}
          </section>

          <section className="res-booked">
            <div>
              <img id="graphIcon" src={window.graphIcon} alt="graph icon"/>
            </div>
            <div>
              Booked 0 times today
            </div>
          </section>
        </div>
        <section>
          <Map cafe={cafe} singleCafe={true} cafes={cafes} fetchCafe={fetchCafe}/>
        </section>
      </div>
    ) 
  }

}

export default CafeShowReservation;