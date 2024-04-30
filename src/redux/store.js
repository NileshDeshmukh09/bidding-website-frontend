import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/user.slice";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
    user : userReducer
})

const persistConfig = {
    key : "user",
    storage, 
    version : 1
}

const persistedReducer = persistReducer( persistConfig , rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware : ( getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck : false
        })
    }
})

export const persistor = persistStore(store)