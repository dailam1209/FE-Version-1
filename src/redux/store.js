import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/fetchUserApi";
import reviewRedux from "./reviewRedux";
import cartbuyRedux from "./cartbuyRedux";
import thunk from "redux-thunk";
import { applyMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import productSlice from "./product/fetchProductApi";

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    user: userSlice.reducer,
    review: reviewRedux,
    cart: cartbuyRedux,
    product : productSlice.reducer,
});

const persistedreducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedreducer,
    middleware: [thunk],
})

export let persistor = persistStore(store);