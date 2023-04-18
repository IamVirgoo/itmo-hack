import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slices/user";
import { locationReducer } from "../slices/location";
import { DataMiddleware } from "../middlewares/dataMiddleware";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const AppStore = configureStore({
    reducer: {
        [DataMiddleware.reducerPath] : DataMiddleware.reducer,
        location : locationReducer,
        user : userReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware()
        .prepend(
            DataMiddleware.middleware
        )
});

export type AppState = ReturnType<typeof AppStore.getState>
export type AppDispatch = typeof AppStore.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
