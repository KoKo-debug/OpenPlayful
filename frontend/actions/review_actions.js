import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";


const receiveReview = ({ review, cafe }) => ({
  type: RECEIVE_REVIEW,
  review,
  cafe
})

const removeReview = ({ review, cafe }) => ({
  type: REMOVE_REVIEW,
  reviewId: review.id,
  cafe
})

export const createReview = review => dispatch => {
 return(
   APIUtil.createReview(review).then(review => dispatch(receiveReview(review)))
 ) 
}

export const updateReview = review => dispatch => {
  return (
    APIUtil.updateReview(review).then(review => dispatch(receiveReview(review)))
  )
}

export const deleteReview = review => dispatch => {
  APIUtil.deleteReview(review).then(review => dispatch(removeReview(review)))
}