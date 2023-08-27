import { FETCH_GEO_REQUESTED, 
        FETCH_GEO_SUCCEEDED, 
        FETCH_GEO_FAILED,
        GEOLOCATION_KEY } from '../constants/constants';
import axios from 'axios';

const fetchGeoRequest = () => {
    return {
        type: FETCH_GEO_REQUESTED,
    }
}

const fetchGeoSuccess = (data) => {
    return {
        type: FETCH_GEO_SUCCEEDED,
        payload: data,
    }
}

const fetchGeoFailure = (error) => {
    return {
        type: FETCH_GEO_FAILED,
        payload: error,
    }
}


const fetchGeoData = () => {
    return function(dispatch) {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${GEOLOCATION_KEY}&ipAddress=8.8.8.8`)
    }
}