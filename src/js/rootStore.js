import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';


const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(promiseMiddleware()))
);

export default rootStore;
