
import React from "react";


const rating = ({average_rating, red}) => {

  const starTotal = 5;
  let starPercentage;
  let starPercentageRounded;
  starPercentage = (average_rating/starTotal) * 100;
  starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
  
  if (red) {
    return(
      <div className="outer-star"> 
        <img id="grayStars" src={window.grayStars} alt="star ratings" />
        <div className="fill-star" width="15%" >
          <img id="redStars" src={window.redStars} alt="red star ratings" />
        </div>
      </div>
    )
  } else {
    return (
      <div className="outer-star">
        <img id="grayStars" src={window.grayStars} alt="star ratings" />
        <div className="fill-star" width="15%" >
          <img id="goldStars" src={window.goldStars} alt="gold star ratings" />
        </div>
      </div>
    )
  }
}

export default rating;