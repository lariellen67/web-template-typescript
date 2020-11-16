import React from 'react';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Languages from '~/locales';

import history from './routes/history';
import { store } from './store';

import Routes from './routes';

const App: React.FC = () => (
  <Provider store={store}>
    <Router history={history}>
      <Routes />
      <Languages />
    </Router>
  </Provider>
);

export default App;
