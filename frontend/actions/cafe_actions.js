import * as CafeAPIUtil from '../util/cafes_api_util';

export const RECEIVE_CAFES = "RECEIVE_CAFES";
export const RECEIVE_CAFE = "RECEIVE_CAFE";

const receiveCafes = (cafes) => ({
  type: RECEIVE_CAFES,
  cafes
});

export const receiveCafe = (cafe) => ({
  type: RECEIVE_CAFE,
  cafe
});


export const fetchAllCafes = () => dispatch => (
  CafeAPIUtil.fetchAllCafes().then(cafes => dispatch(receiveCafes(cafes)))
);

export const fetchCafe = (cafeId) => dispatch => (
  CafeAPIUtil.fetchCafe(cafeId).then(cafe => dispatch(receiveCafe(cafe)))
);