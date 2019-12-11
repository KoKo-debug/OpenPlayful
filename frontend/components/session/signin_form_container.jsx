import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import SigninForm from './signin_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const msp = (state) => ({
  errors: state.errors.session
});

const mdp = dispatch => ({
  submitForm: (user) => dispatch(signin(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('signup'))}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(SigninForm);