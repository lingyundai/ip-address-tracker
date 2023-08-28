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
        dispatch(fetchGeoRequest)
        axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${GEOLOCATION_KEY}&ipAddress=8.8.8.8`)
        .then((response) => {
            const responseData = response.data;
            dispatch(fetchGeoSuccess(responseData));
            console.log("here, ", responseData);
            const ipAddress = responseData.ip;
            console.log("ip ", ipAddress);
            const location = responseData.location.city + ", " + responseData.location.region + 
                " " + responseData.location.postalCode;
            console.log("region ", location);
            const timezone = responseData.location.timezone;
            console.log("timezone, ", timezone);
            const isp = responseData.isp;
            console.log("isp, ", isp);
        }).catch((error) => {
            dispatch(fetchGeoFailure(error));
            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the 
                // browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
    }
}