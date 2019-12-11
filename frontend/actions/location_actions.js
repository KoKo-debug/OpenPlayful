import * as APIUtil from '../util/location_api.util';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';


export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations
});


export const fetchLocations = () => dispatch => (
  APIUtil.fetchLocations()
    .then(locations => dispatch(receiveLocations(locations)
    ))
);