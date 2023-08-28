import { combineReducers } from 'redux';
import geoReducer from './GeoLocationReducer';

const rootReducers = combineReducers({
    geoLocation: geoReducer,
})

export default rootReducers;