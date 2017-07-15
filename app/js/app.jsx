import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Layout from './components/layout/layout';

import store from './store/app-store';

const App = function() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};
render(<App />, document.getElementById('app'));
