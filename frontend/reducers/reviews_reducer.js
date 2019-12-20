import { RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_actions';
import { merge } from 'lodash'
import { RECEIVE_CAFE } from '../actions/cafe_actions';


const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_REVIEW:
      return merge({}, state, {[action.review.id]: action.review})
    case REMOVE_REVIEW:
      newState = merge({}, state);
      delete newState[action.reviewId];
      return newState;
    case RECEIVE_CAFE:
      return merge({}, action.reviews)
    default:
      return state;
  }
}

export default reviewsReducer;