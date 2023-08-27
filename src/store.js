import { applyMiddleware, createStore, getState } from 'react-redux';
import logger from 'redux-logger';
import { ThunkMiddleware } from 'redux-thunk';

const store = createStore(
  applyMiddleware(logger),
  geoReducer,
  applyMiddleware(ThunkMiddleware),
)

console.log("inital state ", store.getState());