import { actions, roles } from '../resources/constants';

const initialState = {
  profile: {
  },
  isAuthenticated: false,
  isLandlord: false,
};

function reduce(state = initialState, action) {
  switch (action.type) {
    case (actions.USER_UPDATE_CONTEXT): {
      const profile = action.payload;
      const isAuthenticated = profile.isAuthenticated;
      const isLandlord = profile.isAuthenticated && profile.roles.some(r => r === roles.LANDLORD);
      return Object.assign({ }, state, { profile, isAuthenticated, isLandlord });
    }
    default:
      break;
  }
  return state;
}

export default reduce;
