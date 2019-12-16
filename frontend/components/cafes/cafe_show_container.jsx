import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CafeShow from './cafe_show';

import { fetchCafe } from '../../actions/cafe_actions'

const msp = (state, ownProps) => {
  return{
    cafe: state.entities.cafes[ownProps.match.params.cafeId],

  }

}


const mdp = dispatch => {
  return {
    fetchCafe: (cafeId) => dispatch(fetchCafe(cafeId))
  }
}

export default withRouter(connect(msp,mdp)(CafeShow));