import { combineReducers } from 'redux';

import session from './session_reducer';
import errors from './errors_reducer';
import locations from './locations_reducer';
import entities from './entities_reducer';
import ui from './ui_reducer';

const rootReducer = combineReducers({
  session,
  errors,
  locations,
  entities,
  ui
});

export default rootReducer;

//gotta do errors reducer