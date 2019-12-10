import { connect } from 'react-redux';
import React from 'react';
import {signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { fetchLocations } from '../../actions/location_actions';


const msp = (state) => {
  return {
  errors: state.errors,
  locations: Object.values(state.locations)
};
};

const mdp = dispatch => ({
  submitForm: (user) => dispatch(signup(user)),
  fetchLocations: () => dispatch(fetchLocations())
});

export default connect(msp, mdp)(SignupForm);