import React from 'react';
import CafeInfoShow from './cafe_info_show';
import CafeShowReservation from './cafe_show_reservation';

const CafeShow = props => {
  return(
    <>
      <CafeInfoShow props={props}/>
      <CafeShowReservation props={props}/>
    </>
  )
};

export default CafeShow;