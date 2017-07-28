import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PropertyList from '../properties/property-list';
import CreatePropertyForm from '../properties/create-property-form';

const PropertyManagementPage = function(props) {
  if (!props.user.isAuthenticated || !props.user.isLandlord) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <PropertyList properties={props.properties.allProperties} />
      <hr />
      <CreatePropertyForm />
    </div>
  );
};

PropertyManagementPage.propTypes = {
  user: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
    isLandlord: PropTypes.bool.isRequired,
  }).isRequired,
  properties: PropTypes.shape({
    allProperties: PropTypes.array.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({ user: state.user, properties: state.properties });
export default connect(mapStateToProps)(PropertyManagementPage);
