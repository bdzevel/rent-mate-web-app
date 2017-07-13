import { actions } from '../resources/constants';

const updateUserContext = function(profile) {
  return {
    type: actions.USER_UPDATE_CONTEXT,
    profile,
  };
};

export {
  updateUserContext,
};

export default {
  updateUserContext,
};
