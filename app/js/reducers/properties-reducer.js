import { actions } from '../resources/constants';

const initialState = {
  allProperties: [ ],
};

function reduce(state = initialState, action) {
  switch (action.type) {
    case (actions.PROPERTIES_UPDATE_OWNED_PROPERTIES): {
      const allProperties = action.payload;
      return Object.assign({ }, state, { allProperties });
    }
    default:
      break;
  }
  return state;
}

export default reduce;
