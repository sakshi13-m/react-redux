import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';
import history from './history';

const middlewares = [routerMiddleware(history), thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares)),
);
