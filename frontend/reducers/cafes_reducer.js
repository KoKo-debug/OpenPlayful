import { RECEIVE_CAFES, RECEIVE_CAFE } from '../actions/cafe_actions';

import {merge} from 'lodash';

const cafesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case  RECEIVE_CAFES:
      return action.cafes;
    case RECEIVE_CAFE:
     return merge({}, state, {[action.cafe.id]: action.cafe});
    default:
      return state;
  }
}

export default cafesReducer;