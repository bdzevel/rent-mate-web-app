import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const HomePage = function(props) {
  if (!props.isAuthenticated) {
    return <h1>Please sign in!</h1>;
  }
  return <h1>Hello, {props.profile.firstName}!</h1>;
};

HomePage.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => state.user;
export default connect(mapStateToProps)(HomePage);
