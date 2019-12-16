import React from 'react';
import { Link } from 'react-router-dom';

import Ratings from './rating';

class CafeIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.cost = this.cost.bind(this)
    this.numReviews = this.numReviews.bind(this)
  }


  cost() {
    switch(this.props.cafe.cost) {
      case 2:
        return "$$";
      case 3:
        return "$$$";
      case 4:
        return "$$$$";
      default:
        return "Unavailable"
    }
  }

  numReviews() {
    return `(${this.props.cafe.number_reviews})`
  }

  //for now, just dummy time slot. I would map over time slots
  timeSlots() {
    return(
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

  render() {

    const { cafe } = this.props
    const {name, animal, city} = this.props.cafe

    return (
      <div className="cafe-item-container">
        {/* <div className="cafe-picture">
          <Link to={`/cafes/${this.props.cafe.id}`}>
              <img src={this.props.cafe.url[0]} alt="cafe picture" crossOrigin="true"/>
          </Link>
        </div> */}

        <Link to={`/cafes/${cafe.id}`} className="cafe-index-name">
          {name}  
        </Link>

        <div className="rating">
          <Ratings average_rating={5} /> 
        </div>

        <div className="num-reviews">
          {this.numReviews()}
        </div>
        
        <div className="cost">
          {this.cost()}
        </div>

        <div className="animal-type">
          {animal}
        </div>

        <div>
          {city}
        </div>

        <div>
          number of booked times today
        </div>

        <div>
          {this.timeSlots()}
        </div>


      </div>
    )
  }
}

export default CafeIndexItem;