import { connect } from 'react-redux';
import React from 'react';
import {signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { fetchLocations } from '../../actions/location_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const msp = (state) => {
  return {
  errors: state.errors.session,
  locations: Object.values(state.locations),
};
};

const mdp = dispatch => ({
  submitForm: (user) => dispatch(signup(user)),
  fetchLocations: () => dispatch(fetchLocations()),
  otherForm: (
    <button onClick={() => dispatch(openModal('signin'))}>
      Signin
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(SignupForm);