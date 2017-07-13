import { actions } from '../resources/constants';

const initialState = {
  pageName: undefined,
  state: undefined,
};

function reduce(state = initialState, action) {
  switch (action.type) {
    case (actions.APP_NAVIGATE):
      return Object.assign({ }, state, { pageName: action.pageName, state: action.state });
    default:
      break;
  }
  return state;
}

export default reduce;
