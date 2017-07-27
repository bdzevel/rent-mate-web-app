import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LabelledInput from '../forms/labelled-input';

import userService from '../../services/user-service';
import notificationService from '../../services/notification-service';

import { roles } from '../../resources/constants';

class UserProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.profile.firstName,
      lastName: props.profile.lastName,
      isLandlord: props.isLandlord,
      isDirty: false,
    };
    this.initHandlers();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      firstName: nextProps.profile.firstName,
      lastName: nextProps.profile.lastName,
      isLandlord: nextProps.isLandlord,
      isDirty: false,
    });
  }

  initHandlers() {
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeIsLandlord = this.handleChangeIsLandlord.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFirstName(e) {
    this.setState({ isDirty: true, isFirstNameDirty: true, firstName: e.target.value });
  }

  handleChangeLastName(e) {
    this.setState({ isDirty: true, isLastNameDirty: true, lastName: e.target.value });
  }

  handleChangeIsLandlord() {
    this.setState({ isDirty: true, isLandlordFlagDirty: true, isLandlord: !this.state.isLandlord });
  }

  canSubmit() {
    return !!this.state.isDirty && !!this.state.firstName && !!this.state.lastName;
  }

  handleSubmit() {
    if (!this.canSubmit()) {
      return;
    }
    const props = { };
    if (this.state.isFirstNameDirty) {
      props.firstName = this.state.firstName;
    }
    if (this.state.isLastNameDirty) {
      props.lastName = this.state.lastName;
    }
    if (this.state.isLandlordFlagDirty) {
      props.roles = { [roles.LANDLORD]: this.state.isLandlord };
    }
    userService.updateProfile(props)
      .catch(err => notificationService.push(`Error: ${err.message}`, 'error'));
  }

  render() {
    return (
      <div className="create-property-form">
        <h3>User Profile { this.state.isDirty ? '*' : '' }</h3>
        <hr />
        <LabelledInput id="firstName" label="First Name" type="text" value={this.state.firstName} onChange={this.handleChangeFirstName} />
        <hr />
        <LabelledInput id="lastName" label="Last Name" type="text" value={this.state.lastName} onChange={this.handleChangeLastName} />
        <hr />
        <LabelledInput id="isLandlord" label="Landlord?" type="checkbox" value={this.state.isLandlord} onChange={this.handleChangeIsLandlord} />
        <hr />
        <button onClick={this.handleSubmit}>Save</button>
      </div>
    );
  }
}

UserProfileForm.propTypes = {
  profile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  isLandlord: PropTypes.bool.isRequired,
};

const mapStateToProps = state => state.user;
export default connect(mapStateToProps)(UserProfileForm);
