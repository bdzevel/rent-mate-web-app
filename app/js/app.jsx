import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import LoginForm from './components/auth/login-form';

import store from './store/app-store';

const App = function() {
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );
};
render(<App />, document.getElementById('app'));
