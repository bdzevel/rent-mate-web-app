import { actions } from '../resources/constants';

const navigate = function(pageName, state) {
  return {
    type: actions.APP_NAVIGATE,
    pageName,
    state,
  };
};

export {
  navigate,
};

export default {
  navigate,
};
