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
    const {name, animal, city, reviews} = this.props.cafe
    let ratings = [];
    let totalRating = 0;

    Object.values(reviews).forEach(review => {
      ratings.push(review.rating)
    })

    ratings.forEach(rating => {
      totalRating += rating
    })

    let avgRating = (totalRating / Object.values(reviews).length)

    let red = false;
    return (
      <div className="cafe-item-container">
        <div className="cafe-picture">
          <Link to={`/cafes/${this.props.cafe.id}`}>
            <img id="cafeMainPic" src={cafe.urls[0]} alt="cafe picture"/>
          </Link>
        </div>

        <section className="index-info">
          <span>
            <Link to={`/cafes/${cafe.id}`} className="cafe-index-name">
              {name}  
            </Link>
          </span>

          <span className="ratings-row">
            <div className="index-rating">
              <Ratings average_rating={avgRating} red={red} /> 
            </div>
            <div className="index-num-reviews">
              {this.numReviews()}
            </div>
          </span>

          <span className="cost-animal-city">
            <div className="index-cost">
              {this.cost()}
            </div>

            <div className="animal-type">
              {animal}
            </div>

            <div className="city">
              {city}
            </div>
          </span>
          
          <span className="booked-today">
            <div className="booked-text">
              number of booked times today
            </div>
          </span>

          {/* <span className> */}
            <div className="index-timeslots">
              {this.timeSlots()}
            </div>
          {/* </span> */}
        </section>


      </div>
    )
  }
}

export default CafeIndexItem;