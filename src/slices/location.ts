import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../stores/appStore";

export interface Geolocation {
    lat? : number,
    lon? : number
}

export interface Location {
    address? : string,
    options : Geolocation
}

export let initialState : Location = {
    address : "",
    options : {
        lat : 52.604527,
        lon : 39.586688
    }
};

export const locationController = createSlice({
    name : "location",
    initialState,
    reducers: {
        set_address: (state, action : PayloadAction<string>) => {
            state.address = action.payload;
        },
        set_options: (state, action : PayloadAction<Geolocation>) => {
            state.options = action.payload;
        }
    }
});

export const locationState = (state : AppState) => state.location.address
export const geolocationState = (state : AppState) => state.location.options

export const {
    set_address,
    set_options
} = locationController.actions

export const locationReducer = locationController.reducer
