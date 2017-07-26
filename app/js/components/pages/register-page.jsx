import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import RegisterForm from '../auth/register-form';

const RegisterPage = function(props) {
  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return <RegisterForm />;
};

RegisterPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => state.user;
export default connect(mapStateToProps)(RegisterPage);
