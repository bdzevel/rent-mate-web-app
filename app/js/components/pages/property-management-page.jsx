import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CreatePropertyForm from '../properties/create-property-form';

const PropertyManagementPage = function(props) {
  if (!props.isAuthenticated || !props.isLandlord) {
    return <Redirect to="/" />;
  }
  return <CreatePropertyForm />;
};

PropertyManagementPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isLandlord: PropTypes.bool.isRequired,
};

const mapStateToProps = state => state.user;
export default connect(mapStateToProps)(PropertyManagementPage);
