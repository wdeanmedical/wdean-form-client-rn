import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './root_reducer';
import rootSaga from './root_saga';
import {APP_INIT} from './action_types';

const middleware = createSagaMiddleware();

export default () => {
  const {createLogger} = require('redux-logger');
  const logger = createLogger({
    collapsed: (getState, action) => action.type === APP_INIT,
    duration: true,
  });

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(middleware)),
  );

  middleware.run(rootSaga);

  return store;
};
