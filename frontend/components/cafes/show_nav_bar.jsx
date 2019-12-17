//ignore this file ()

import React from 'react';

class ShowNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.overviewRef = React.createRef();
    this.photoRef = React.createRef();
    this.menuRef = React.createRef();
    this.reviewRef = React.createRef();

  }


  
  render() {

    return(
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
    )
  }
};

export default ShowNavBar;