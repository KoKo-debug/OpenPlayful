import React from 'react';
import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';


import ReviewForm from './review_form';


const msp = (state, ownProps) => {
  debugger;
  return {
  currentUser: state.entities.users[state.session.id],
  cafe: state.entities.cafes[ownProps.match.params.id],
}}

const mdp = dispatch => ({
  createReview: review => dispatch(createReview(review))
})

export default connect(msp, mdp)(ReviewForm);