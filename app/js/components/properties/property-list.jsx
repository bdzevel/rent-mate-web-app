import React from 'react';
import PropTypes from 'prop-types';

import PropertyCard from './property-card';

const PropertyList = function(props) {
  const properties = props.properties;
  return (
    <div className="property-card-container flexbox">
      { properties.map(p => <PropertyCard property={p} />) }
    </div>
  );
};

PropertyList.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.shape({
      line1: PropTypes.string.isRequired,
      line2: PropTypes.string,
      region: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }),
  })).isRequired,
};

export default PropertyList;
