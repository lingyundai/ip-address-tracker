import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GEOLOCATION_KEY } from '../../constants/constants';

const initialState = {
    status: 'idle',
    data: [],
    error: null,
}

export const fetchIpAddress = createAsyncThunk("tracker/fetchIpAddress", 
    async (userInput = "") => {
        let apiUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${GEOLOCATION_KEY}`;
        
        if (userInput.length > 0) {
            apiUrl += `&ipAddress=${userInput}`;
        }

        const response = await axios.get(apiUrl);

        console.log(response);
        return response.data;
})

const trackerSlice = createSlice({
    name: 'tracker',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchIpAddress.pending, (state, action) => {
            state.status = 'loading';
            console.log(state.status);
        })
        .addCase(fetchIpAddress.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
            console.log(state.status);
        })
        .addCase(fetchIpAddress.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
            console.log(state.status);
        })
    }
})

export const selectIpData = (state) => state.tracker.data;
export const selectTrackerStatus = (state) => state.tracker.status;
export const selectTrackerError = (state) => state.tracker.error;
 
export default trackerSlice.reducer;
