import React from 'react';
import Ratings from '../cafes/rating';

class Review extends React.Component {
  constructor(props) {
    super(props);
  
  }
  
  changeColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    
    let style = { backgroundColor: `rgb(${x}, ${y}, ${z})`};
    return(
      style
    );
  }
  
  render() {
    const {reviews} = this.props;
    
 
    if (!reviews) return(
      <h3>
        There are no reviews for this cafe.
      </h3>  
    );

    const reviewsLis = reviews.map((review, id) =>
    <section className="review-info" key={id}>
      <section className="user-info">
        <span className="initials-circle">
          <h3 className="initials">{review.first_name.charAt(0)}{review.last_name.charAt(0)}</h3>
          <div style={this.changeColor()} className="circle"></div>
        </span>
        <div className="reviewer-name">
          {review.first_name}{review.last_name.charAt(0)}
        </div>
        <div className="reviewer-location">
          {review.name}
        </div>
      </section>

      <section className="review-main-info">
          <section>
            <Ratings average_rating={review.rating} red={true} />
          </section>

          {/* <section>
            {`Overall ${review.overall} * Food ${review.food} * Service ${review.service} * Ambience ${review.ambience}`}
          </section> */}


          <section className="four-ratings">
            <h3 className="four-rating-title">Overall</h3>
            <div className="four-score">{review.overall}</div>
            <div className="dot">*</div>

            <h3 className="four-rating-title">Food</h3>
            <div className="four-score">{review.food}</div>
            <div className="dot">*</div>

            <h3 className="four-rating-title">Service</h3>
            <div className="four-score">{review.service}</div>
            <div className="dot">*</div>

            <h3 className="four-rating-title">Ambience</h3>
            <div className="four-score">{review.ambience}</div>

          </section>

          <section>
            <p>
              {review.body}
            </p>
          </section>
      </section >
    </section>
  );
  return(
    <ul>
        {reviewsLis}
    </ul>
  )
  }
}

export default Review;

