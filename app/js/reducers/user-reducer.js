import { actions } from '../resources/constants';

const initialState = {
  profile: undefined,
};

function reduce(state = initialState, action) {
  switch (action.type) {
    case (actions.USER_UPDATE_CONTEXT):
      return Object.assign({ }, state, { profile: action.profile });
    default:
      break;
  }
  return state;
}

export default reduce;
