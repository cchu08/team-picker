import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { loadState, saveState } from '../../../localStorage';
import throttle from 'lodash/throttle';
import rootReducer from '../reducers/index';

const persistedFavorites = loadState();

const logger = createLogger();

const store = createStore(
  rootReducer,
  persistedFavorites,
  compose(
    applyMiddleware(thunk, logger),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);

store.subscribe(throttle(() => {
  saveState({
    favorites: store.getState().favorites
  });
}, 1000));

export default store;