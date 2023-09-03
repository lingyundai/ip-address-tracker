import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GEOLOCATION_KEY } from '../../constants/constants';

const initialState = {
    status: 'idle',
    data: [],
    error: null,
}

export const fetchIpAddress = createAsyncThunk("fetchIpAddress", async () => {
    const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${GEOLOCATION_KEY}&ipAddress=8.8.8.8`);
    console.log(response.data);
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
        })
        .addCase(fetchIpAddress.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
            console.log(state.data);
        })
        .addCase(fetchIpAddress.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export const getIpAddressData = (state) => state.tracker.data;
export const getTrackerStatus = (state) => state.tracker.status;
export const getTrackerError = (state) => state.tracker.error;
 
export default trackerSlice.reducer;