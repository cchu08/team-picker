import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/index';

const logger = createLogger();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);

export default store;