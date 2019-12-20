
import merge from 'lodash/merge';
import { RECEIVE_CAFE } from '../actions/cafe_actions';


const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  
  let newState;
  switch(action.type) {
    // case RECEIVE_REVIEW:
    //   return merge({}, state, {[action.review.id]: action.review})
    case RECEIVE_CAFE:
      return merge({}, state, action.cafe.reviews);
    default:
      return state;
  }
};

export default reviewsReducer;