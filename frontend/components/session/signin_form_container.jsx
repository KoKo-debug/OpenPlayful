import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import SigninForm from './signin_form';


const msp = (state) => ({
  errors: state.errors
});

const mdp = dispatch => ({
  submitForm: (user) => dispatch(signin(user))
});

export default connect(msp, mdp)(SigninForm);