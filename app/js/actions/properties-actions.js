import { actions } from '../resources/constants';

const updateOwnedProperties = function(properties) {
  return {
    type: actions.PROPERTIES_UPDATE_OWNED_PROPERTIES,
    payload: properties,
  };
};

export {
  updateOwnedProperties,
};

export default {
  updateOwnedProperties,
};
