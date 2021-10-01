import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import formState from './formstateReducer';
// import userSessionReducer from 'auth0-sdk';

const rootReducer = combineReducers({
  formState,
  // userSession: userSessionReducer,
  router: connectRouter(history),
});

export default rootReducer;
