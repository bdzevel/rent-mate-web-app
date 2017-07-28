import { combineReducers } from 'redux';

import userReducer from './user-reducer';
import propertiesReducer from './properties-reducer';
import notificationReducer from './notification-reducer';

export default combineReducers({
  user: userReducer,
  properties: propertiesReducer,
  notification: notificationReducer,
});
