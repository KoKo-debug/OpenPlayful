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
    this.scrollToOverview = this.scrollToOverview.bind(this);
  }



  componentDidMount() {
    const {cafe} = this.props
    this.props.fetchCafe(this.props.match.params.cafeId)
  }

  scrollToOverview(ref) {
    return e => {
      if (ref) {
        ref.current.scrollIntoView(true)
      }
    }
  }


  // scrollToOverview(ref) {
  //   //65 is height of nav bar;
  //   let y;
  //   if (ref.current.id) { 
  //     y = ref.current.getBoundingClientRect().top + window.pageYOffset - 65;
  //   }

  //   window.scrollTo(0, y)
  // }

  

  scrollToPhoto() {
    this.photoRef.current.scrollIntoView(true)
  }

  scrollToMenu() {
    this.menuRef.current.scrollIntoView(true)
  }

  scrollTOReview() {
    this.reviewRef.current.scrollIntoView(true)
  }

  render() {

    let red = true;

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

    const photoLis = cafe.url.map((url, id) =>
      <div className="photo-gallery">
        <img className="gallery-images" key={id} src={url} width="100" height="300" />
      </div>
    );
    
    debugger;
    return(
      <div>

      <section className="cafe-show-outer-container">
      </section>
        <section className="cafe-show-info-container">
          <div className="cafe-navBar">
            {/* if HashLink is okay */}
            <div
              onClick={this.scrollToOverview(this.overviewRef)}
              className="cafe-nav overview">
                Overview
            </div>

            {/* For hashLink

            Window.scrollTo(0, 200)

            Function()

            Y = menu.height + overview.height

            window.scrollTo (0, y) */}

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

            <div id="photos">
              <h1 className="photos-header">{url.length} Photos</h1>
              <section className="photo-list">
                {photoLis}
              </section>
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

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga minima doloribus aperiam corporis animi aliquid, quisquam saepe ea incidunt minus reprehenderit molestiae accusamus, ipsum vel voluptas explicabo, ex voluptatem perspiciatis?
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus explicabo sapiente ab fugiat quo at mollitia architecto iste eveniet, molestiae autem quod molestias saepe deserunt reiciendis eius maxime temporibus dolorum?
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore sequi omnis explicabo veniam, id error adipisci amet fuga qui autem, culpa ea hic nostrum eum illo harum? Aut, praesentium maiores?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, temporibus? Saepe libero ratione aliquid iure ut illo soluta eveniet, laborum accusantium aspernatur quidem fuga error nobis alias, ipsum facilis ducimus?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore beatae debitis doloremque sit, nisi repudiandae voluptas saepe nemo non nostrum laboriosam voluptatum ullam cupiditate aut sint tempore sequi, vitae dicta.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, eaque, ullam praesentium quasi tempora nobis omnis eum aspernatur vero veniam reprehenderit nam accusamus voluptatibus esse itaque dolores sapiente commodi minus!
                </p>
              </div>
            </div>

          </div>
       
        </section>
      </div>
    )
  }

}


export default CafeShow;