import { combineReducers } from 'redux';

import users from './users_reducer';
import cafes from './cafes_reducer';


export default combineReducers({
  users,
  cafes
});