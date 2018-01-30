import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Landing from './Landing';
import store from '../store/configureStore'

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Landing />
    </div>
  </Provider>
);

export default App;

