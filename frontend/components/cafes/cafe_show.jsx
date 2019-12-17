import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import Ratings from './rating';

class CafeShow extends React.Component {
  constructor(props) {
    super(props)
    this.overviewRef = React.createRef();
    this.photoRef = React.createRef();
    this.menuRef = React.createRef();
    this.reviewRef = React.createRef();
    // this.scrollToOverview = this.scrollToOverview.bind(this);
  }



  componentDidMount() {
    const {cafe} = this.props
    this.props.fetchCafe(this.props.match.params.cafeId)
  }

  scrollToOverview(ref) {
    return e => {
      let y;
      if (ref.current.id) { 
        y = ref.current.getBoundingClientRect().top + window.pageYOffset - 58;
      }
      window.scrollTo(0, y);
    };
  }

  scrollToPhoto(ref) {
    return e => {
      let y;
      if (ref.current.id) {
        y = ref.current.getBoundingClientRect().top + window.pageYOffset - 58;
      }
      window.scrollTo(0, y);
    };
  }

  scrollToMenu(ref) {
    return e => {
      let y;
      if (ref.current.id) {
        y = ref.current.getBoundingClientRect().top + window.pageYOffset - 58;
      }
      window.scrollTo(0, y);
    };
  }
  
  scrollToReview(ref) {
    return e => {
      let y;
      if (ref.current.id) {
        y = ref.current.getBoundingClientRect().top + window.pageYOffset - 58;
      }
      window.scrollTo(0, y);
    };
  }

  render() {

    let red = true;

    if (!this.props.cafe) return null;

    const {cafe} = this.props;

    const { cost, animal, average_rating, description, number_reviews, phone_number, url } = this.props.cafe

    const price = (cost) => {
      if (cost === 2) {
        return "$30 and under";
      } else if (cost === 3) {
        return "$31 to $50";
      } else {
        return "$50 and over";
      }
    };

    const photoLis = cafe.url.map((url, id) =>
      <div className="photo-gallery">
        <img className="gallery-images" key={id} src={url} />
      </div>
    );
    let randomUrl = cafe.url[Math.floor(Math.random() * cafe.url.length)]
    const bannerPhoto = <img className="bannerPhoto" src={randomUrl} />
    return(
      <div>

        <section className="cafe-show-banner-container">
          {bannerPhoto}
        </section>
        <section className="cafe-show-info-container">
          <div className="cafe-navBar">
            <div
              onClick={this.scrollToOverview(this.overviewRef)}
              className="cafe-nav overview">
                Overview
            </div>
            <div
              onClick={this.scrollToPhoto(this.photoRef)}
              className="cafe-nav photos">
                Photos
            </div>
            <div
              onClick={this.scrollToMenu(this.menuRef)}
              className="cafe-nav menu">
                Menu
            </div>
            <div
              onClick={this.scrollToReview(this.reviewRef)}
              className="cafe-nav reviews">
                Reviews
            </div>
          </div>
          
          <div id="overview" ref={this.overviewRef}>
            <h1 className="cafe-header">
              {cafe.name}
            </h1>

            <div className="cafe-details">
              <div className="rating">
                  <Ratings average_rating={3} red={red} /> 
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
          </div>

          <div id="photos" ref={this.photoRef}>
            <h1 className="photos-header">{url.length} Photos</h1>
            <section className="photo-list">
              {photoLis}
            </section>
          </div>

          <div id="menu" ref={this.menuRef}>
            <h1 className="menu-header">
              Menu
            </h1>
            <Link to={`/cafes/${cafe.id}`} className="menu-items">
              View menu on restaurant's website
            </Link>
          </div>

          <div id="reviews" ref={this.reviewRef}>
            <h1 className="review-header">
              What {number_reviews} People Are Saying
            </h1>

            <section>
              <div className="reviews-info-container">
                <h2>
                  Overall ratings and reviews
                </h2>
                <h3>
                  Reviews can only be made by diners who have eaten at this restaurant.
                </h3>
              </div>
            </section>
            <section>
              <div className="sort-by-dropdownn">
                <h1>Sort by</h1>
              </div>
              <div className="review-filters">
                <h1>Filters</h1>
              </div>
              <section className="reviewers" >
                <section className="user-info">
                  <div>
                    user icon
                  </div>
                  <div>
                    primary location
                  </div>
                  <div>
                    Num Reviews
                  </div>
                </section>
                <section>
                  <section>
                      <Ratings average_rating={3} red={red} />
                      Dined someNum ago
                  </section>
                  <div>
                    Overall * Food * Service * Ambience *
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga minima doloribus aperiam corporis animi aliquid, quisquam saepe ea incidunt minus reprehenderit molestiae accusamus, ipsum vel voluptas explicabo, ex voluptatem perspiciatis?
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus explicabo sapiente ab fugiat quo at mollitia architecto iste eveniet, molestiae autem quod molestias saepe deserunt reiciendis eius maxime temporibus dolorum?
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore sequi omnis explicabo veniam, id error adipisci amet fuga qui autem, culpa ea hic nostrum eum illo harum? Aut, praesentium maiores?
                      ctetur adipisicing elit. Quo, eaque, ullam praesentium quasi tempora nobis omnis eum aspernatur vero veniam reprehenderit nam accusamus voluptatibus esse itaque dolores sapiente commodi minus!
                    </p>
                  </div>
                </section>
              </section>
            </section>
            </div>
        </section>
      </div>
    )
  }

}


export default CafeShow;