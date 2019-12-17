import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CafeInfoShow from './cafe_info_show';

import { fetchCafe } from '../../actions/cafe_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    cafe: state.entities.cafes[ownProps.match.params.cafeId],

  };

};


const mdp = dispatch => {
  return {
    fetchCafe: (cafeId) => dispatch(fetchCafe(cafeId)),
    openModal: (url) => dispatch(openModal(url)),
    closeModal: (url) => dispatch(closeModal(url)),
  };
};

export default withRouter(connect(msp, mdp)(CafeInfoShow));