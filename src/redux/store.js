import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

import { rootReducer } from './reducers'

const logMiddleware = () => next => action => {
  return next(action);
};

const stringMiddleware = () => next => action => {
  if (typeof action === 'string') {
    return next({
      type: action,
    });
  }

  return next(action);
};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)
);

const store = createStore(
  rootReducer,
  enhancer
);

export default store;