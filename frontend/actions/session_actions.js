import * as APIUtil from '../util/session_api.util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
  });
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});


export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
          err => dispatch(receiveErrors(err.responseJSON)))
); 

export const signin = user => dispatch => (
  APIUtil.signin(user)
  .then(user => dispatch(receiveCurrentUser(user)),
        err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(() => dispatch(logoutCurrentUser()))
);
