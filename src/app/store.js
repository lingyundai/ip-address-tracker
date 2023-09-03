import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import trackerReducer from '../features/tracker/trackerSlice';
import thunk from 'redux-thunk';
 
const store = configureStore({
  reducer: {
    tracker: trackerReducer,
  }
})

export default store;