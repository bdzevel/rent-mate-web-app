import React from 'react';
import PropTypes from 'prop-types';

const PropertyCard = function(props) {
  const property = props.property;
  return (
    <div className="card">
      <div className="card-header">
        { property.name }
      </div>
      <div className="card-body flexbox">
        <div className="flex-half">
          <div>{ property.description }</div>
        </div>
        <div className="flex-half">
          <div>{ property.address.line1 }</div>
          { property.address.line2 ? <div>{ property.address.line2 }</div> : null }
          <div>{ property.address.city }, { property.address.region }</div>
          <div>{ property.address.postalCode }</div>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.shape({
      line1: PropTypes.string.isRequired,
      line2: PropTypes.string,
      region: PropTypes.string.isRequired,
      postalCode: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default PropertyCard;
