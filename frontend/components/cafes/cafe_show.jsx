import React from 'react';
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

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
              className="cafe-nav">
                Overview
            </HashLink>

            <HashLink
              to={`/cafes/${cafe.id}#photos`}
              className="cafe-nav">
                Photos
            </HashLink>

            <HashLink
              to={`/cafes/${cafe.id}#menu`}
              className="cafe-nav">
                Menu
            </HashLink>

            <HashLink
              to={`/cafes/${cafe.id}#specials`}
              className="cafe-nav">
                Specials
            </HashLink>

            <HashLink
              to={`/cafes/${cafe.id}#reviews`}
              className="cafe-nav">
                Reviews
            </HashLink>
          </div>
          
          <div id="overview">
            <h1 className="cafe-header">
              {cafe.name}
            </h1>
            <div className="cafe-details">
              <div className="rating">
                  stars 1-5 {average_rating}
              </div>
              
              <div className="num-reviews">
                {number_reviews} Reviews
              </div>

              <div className="cost">
                {price(cost)}
              </div>

              <div className="animal">
                {animal}
              </div>

              <div className="description">
                {description}
              </div>
            </div>

            <div id="photos">
              <h1>{url.length} Photos</h1>
              Somehow PhotoAlbum
            </div>

            <div id="menu">
              <h1>
                Menu
              </h1>
              <Link to="">
                View menu on restaurant's website
              </Link>
            </div>

            <div id="speicals">
                <h1>
                  Specials
                </h1>
            </div>

            <div id="reviews">
              <h1>
                What {number_reviews} People Are Saying
              </h1>

              <h2>
                Overall ratings and reviews
              </h2>
            </div>

          </div>
       
        </div>
      </div>
    )
  }

}


export default CafeShow;