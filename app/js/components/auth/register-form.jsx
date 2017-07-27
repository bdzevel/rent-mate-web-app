import React from 'react';

import LabelledInput from '../forms/labelled-input';

import authenticationService from '../../services/authentication-service';
import notificationService from '../../services/notification-service';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.initHandlers();
  }

  initHandlers() {
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(fieldName) {
    return function(e) {
      this.setState({ [fieldName]: e.target.value });
    }.bind(this);
  }

  canSubmit() {
    return !!this.state.username && !!this.state.password && !!this.state.confirmPassword
      && !!this.state.firstName && !!this.state.lastName
      && this.state.password === this.state.confirmPassword;
  }

  handleSubmit() {
    if (!this.canSubmit()) {
      notificationService.push('Noap', 'error');
      return;
    }
    authenticationService.register(this.state)
      .catch(() => notificationService.push('Noap', 'error'));
  }

  render() {
    return (
      <div className="register-form">
        <h3>Register</h3>
        <hr />
        <LabelledInput id="firstName" label="First Name" type="text" value={this.state.firstName} onChange={this.handleChange('firstName')} />
        <hr />
        <LabelledInput id="lastName" label="Last Name" type="text" value={this.state.lastName} onChange={this.handleChange('lastName')} />
        <hr />
        <LabelledInput id="username" label="Username" type="text" value={this.state.username} onChange={this.handleChange('username')} />
        <hr />
        <LabelledInput id="password" label="Password" type="password" value={this.state.password} onChange={this.handleChange('password')} />
        <br />
        <LabelledInput id="confirmPassword" label="Confirm Password" type="password" value={this.state.confirmPassword}
          onChange={this.handleChange('confirmPassword')} />
        <hr />
        <button onClick={this.handleSubmit}>Register</button>
      </div>
    );
  }
}

export default RegisterForm;
