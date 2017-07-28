import 'whatwg-fetch';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import userService from './services/user-service';
import propertyService from './services/property-service';

import store from './store/app-store';

import Layout from './components/layout/layout';

function initializeApp() {
  const getProfileTask = userService.retrieveUserProfile();
  propertyService.retrieveOwnedProperties();
  return getProfileTask;
}

const App = function() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
};

initializeApp()
  .then(() => render(<App />, document.getElementById('app')));
