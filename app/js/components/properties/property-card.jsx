import React from 'react';
import PropTypes from 'prop-types';

import UploadImageForm from './upload-image-form';

const PropertyCard = function(props) {
  const property = props.property;
  const pictureUrls = property.pictureUrls;
  const hasPictures = pictureUrls && pictureUrls.length;
  return (
    <div className="card">
      <div className="card-header">
        { property.name }
      </div>
      <div className="flexbox card-body">
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
      <div className="card-images">
        { hasPictures ? pictureUrls.map(url => <img src={url} alt="" width="100" />) : null }
      </div>
      <UploadImageForm propertyId={property._id} />
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    _id: PropTypes.string.isRequired,
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
