import { createReview } from '../util/review_api_util';

import { receiveCafe } from '../actions/cafe_actions';
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";


const receiveReview = ({ review, cafe }) => ({
  type: RECEIVE_REVIEW,
  review,
  cafe
});

const removeReview = ({ review, cafe }) => ({
  type: REMOVE_REVIEW,
  reviewId: review.id,
  cafe
});

export const createTheReview = review => dispatch => {
 return (
   createReview(review)
    .then(cafe => dispatch(receiveCafe(cafe)))
 ); 
};

export const updateReview = review => dispatch => {
  return (
    APIUtil.updateReview(review).then(review => dispatch(receiveReview(review)))
  );
};

export const deleteReview = review => dispatch => {
  APIUtil.deleteReview(review).then(review => dispatch(removeReview(review)));
};