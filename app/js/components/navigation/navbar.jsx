import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import authService from '../../services/authentication-service';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.initHandlers();
  }

  initHandlers() {
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    authService.logout();
  }

  render() {
    const { isAuthenticated, isLandlord } = this.props;
    return (
      <div className="navbar">
        <NavLink exact to="/"> Home </NavLink>
        { !isAuthenticated ? <NavLink exact to="/login"> Login </NavLink> : null }
        { !isAuthenticated ? <NavLink exact to="/register"> Register </NavLink> : null }
        { isLandlord ? <NavLink exact to="/manage-properties"> Manage Properties </NavLink> : null }
        { isAuthenticated ? <NavLink exact to="/profile"> Profile </NavLink> : null }
        { isAuthenticated ? <a className="btn" href="#" onClick={this.handleLogout}> Logout </a> : null }
      </div>
    );
  }
}

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isLandlord: PropTypes.bool.isRequired,
};

const mapStateToProps = state => state.user;
export default connect(mapStateToProps)(NavBar);
