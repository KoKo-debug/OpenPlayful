import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import SigninForm from './signin_form';
import { openModal, closeModal, clearErrors } from '../../actions/modal_actions';
import React from 'react';

const msp = (state) => ({
  errors: state.errors.session
});

const mdp = dispatch => ({
  signinForm: (user) => dispatch(signin(user)),
  otherModal: () => dispatch(openModal('signup')),
  clearErrors: () => dispatch(clearErrors()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(msp, mdp)(SigninForm);