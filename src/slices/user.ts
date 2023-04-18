import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../stores/appStore";

export interface User {
    name? : string,
    auth? : boolean
}

export let initialState : User = {
    name : "Admin",
    auth : false
};

export const userController = createSlice({
    name : "user",
    initialState,
    reducers: {
        set_user: (state, action : PayloadAction<string>) => {
            state.name = action.payload;
        },
        set_auth: (state, action : PayloadAction<boolean>) => {
            state.auth = action.payload;
        }
    }
});

export const userNameState = (state : AppState) => state.user.name;
export const userAuthState = (state : AppState) => state.user.auth;

export const {
    set_user,
    set_auth
} = userController.actions;

export const userReducer = userController.reducer;
