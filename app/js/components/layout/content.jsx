import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home-page';
import LoginPage from '../pages/login-page';
import RegisterPage from '../pages/register-page';
import PropertyManagementPage from '../pages/property-management-page';
import UserProfilePage from '../pages/user-profile-page';

const Content = function() {
  return (
    <div className="main-content">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/manage-properties" component={PropertyManagementPage} />
        <Route exact path="/profile" component={UserProfilePage} />
      </Switch>
    </div>
  );
};

export default Content;
