import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import superheroes from './superheroes';

const App = function() {
  return (
    <div className="superheroes">
      { superheroes.map(h => <p key={h}>{h}</p>) }
    </div>
  );
};
render(<App />, document.getElementById('app'));
