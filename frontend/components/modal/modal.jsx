import React from 'react';
import SigninFormContainer from '../session/signin_form_container';
import SignupFormContainer from '../session/signup_form_container';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    // this.displayModal = this.displayModal.bind(this);
    // this.modal = this.modal.bind(this);
  }
  
  // const {modal, closeModal } = this.props;
  modal() {
    if (!modal) {
      return null;
    }
  }
  // // if (!modal) {
  // //   return null;
  // // }
  

  
  render() {
    let component;
    switch(this.props.modal) {
      case 'signin':
        component = <SigninFormContainer />;
        break;
      case 'signup':
        component = <SignupFormContainer />;
        break;
      default:
        return null;
    }

    const { closeModal } = this.props;

    return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            { component }
          </div>
        </div>
    )
  }
}

export default Modal;

