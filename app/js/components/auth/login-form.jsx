import React from 'react';

import LabelledInput from '../forms/labelled-input';

import authenticationService from '../../services/authentication-service';
import notificationService from '../../services/notification-service';

class LoginForm extends React.Component {
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
    return !!this.state.username && !!this.state.password;
  }

  handleSubmit() {
    if (!this.canSubmit()) {
      notificationService.push('Please enter both a username and password', 'error');
      return;
    }
    authenticationService.login(this.state)
      .catch(() => notificationService.push('Invalid username and password', 'error'));
  }

  render() {
    return (
      <div className="login-form">
        <hr />
        <LabelledInput id="username" label="Username" type="text" value={this.state.username} onChange={this.handleChange('username')} />
        <hr />
        <LabelledInput id="password" label="Password" type="password" value={this.state.password} onChange={this.handleChange('password')} />
        <hr />
        <button onClick={this.handleSubmit}>Sign In</button>
      </div>
    );
  }
}

export default LoginForm;
