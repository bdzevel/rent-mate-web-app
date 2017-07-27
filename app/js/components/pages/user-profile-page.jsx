import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UserProfileForm from '../profile/user-profile-form';

const UserProfilePage = function(props) {
  if (!props.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return <UserProfileForm />;
};

UserProfilePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => state.user;
export default connect(mapStateToProps)(UserProfilePage);
