import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import SigninFormContainer from '../session/signin_form_container';
import SignupFormContainer from '../session/signup_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  
  switch(modal) {
    case 'signin' :
      component = <SigninFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  )
}

const msp = state => ({
  modal: state.ui.modal
})

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(msp,mdp)(Modal);