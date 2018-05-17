import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import reducers from '../reducers/';

import middlewares from '../middleware/';
import {logger} from '../middleware/';

const store = createStore(
  reducers,
  applyMiddleware(middlewares.logger, middlewares.validator)
);

import Dashboard from './dashboard.jsx';

console.log('Public URL', process.env.PUBLIC_URL);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    )
  }
}

export default App;