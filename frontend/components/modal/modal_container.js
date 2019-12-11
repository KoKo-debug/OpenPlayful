import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal, openModal } from '../../actions/modal_actions';

const msp = state => {
  return ({
    modal: state.ui.modal,
  });
};

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  openModal: (form) => dispatch(openModal(form))
});

export default connect(msp, mdp)(Modal);