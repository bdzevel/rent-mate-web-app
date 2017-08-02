import React from 'react';
import PropTypes from 'prop-types';

const PropertyCard = function(props) {
  const property = props.property;
  return (
    <div className="card">
      <div className="card-header">
        <p>{ property.name }</p>
      </div>
      <div className="card-body flexbox">
        <div>
          <p>{ property.description }</p>
        </div>
        <div>
          <p>{ property.address.line1 }</p>
          { property.address.line2 ? <p>{ property.address.line1 }</p> : null }
          <p>{ property.address.city }, { property.address.region }</p>
          <p>{ property.address.postalCode }</p>
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
