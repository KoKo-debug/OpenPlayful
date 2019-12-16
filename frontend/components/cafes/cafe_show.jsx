import React from 'react';
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import Ratings from './rating';

class CafeShow extends React.Component {
  constructor(props) {
    super(props)

  }



  componentDidMount() {
    const {cafe} = this.props
    this.props.fetchCafe(this.props.match.params.cafeId)
  }

  render() {
    if (!this.props.cafe) return null;

    const {cafe} = this.props

    const { cost, animal, average_rating, description, number_reviews, phone_number, url } = this.props.cafe

    const price = (cost) => {
      if (cost === 2) {
        return "$30 and under"
      } else if (cost === 3) {
        return "$31 to $50"
      } else {
        return "$50 and over"
      }
    }
    return(
      <div className="cafe-show-outer-container">
        <div className="cafe-show-info-container">
          <div className="cafe-navBar">
            {/* if HashLink is okay */}
            <HashLink 
              to={`/cafes/${cafe.id}#overview`}
              className="cafe-nav overview">
                Overview
            </HashLink>

            <HashLink
              to={`/cafes/${cafe.id}#photos`}
              className="cafe-nav photos">
                Photos
            </HashLink>

            <HashLink
              to={`/cafes/${cafe.id}#menu`}
              className="cafe-nav menu">
                Menu
            </HashLink>


            <HashLink
              to={`/cafes/${cafe.id}#reviews`}
              className="cafe-nav reviews">
                Reviews
            </HashLink>
          </div>
          
          <div id="overview">
            <h1 className="cafe-header">
              {cafe.name}
            </h1>

            <div className="cafe-details">
              <div className="rating">
                  <Ratings average_rating={3} /> 
                  <h3 className="average">
                    {3.2}
                  </h3>
              </div>
              

      
              <div className="num-reviews">
                <div>
                  {number_reviews}
                </div>
                <h3 className="info-review">Reviews</h3>
              </div>

              <div className="cost">
                {price(cost)}
              </div>

              <div className="animal">
                {animal}
              </div>
            </div>

            <div className="description">
              {description}
            </div>

            <div id="photos">
              <h1 className="photos-header">{url.length} Photos</h1>
              Somehow PhotoAlbum
            </div>

            <div id="menu">
              <h1 className="menu-header">
                Menu
              </h1>
              <Link to="" className="menu-items">
                View menu on restaurant's website
              </Link>
            </div>

            <div id="reviews">
              <h1 className="review-header">
                What {number_reviews} People Are Saying
              </h1>
              <div className="reviews-info-container">
                <h2>
                  Overall ratings and reviews
                </h2>
              </div>
            </div>

          </div>
       
        </div>
      </div>
    )
  }

}


export default CafeShow;