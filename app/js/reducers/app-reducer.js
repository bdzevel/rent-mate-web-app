import { combineReducers } from 'redux';

import navReducer from './nav-reducer';
import userReducer from './user-reducer';

export default combineReducers({
  nav: navReducer,
  user: userReducer,
});
