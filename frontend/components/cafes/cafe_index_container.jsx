import { connect } from 'react-redux';

import CafeIndex from './cafe_index';
import { fetchAllCafes } from '../../actions/cafe_actions';
// import { openModal, closeModal } from '../../actions/modal_actions';


const msp = (state, ownProps) => {
  return {
    cafes: Object.values(state.entities.cafes)
  };
};


const mdp = dispatch => {
  return {
    fetchAllCafes: () => dispatch(fetchAllCafes())
  };
};

export default connect(msp, mdp)(CafeIndex);
