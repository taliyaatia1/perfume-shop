import { version } from "mongoose";
import { combineReducers, createStore, applyMiddleware } from "redux";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistStore, persistReducer as reduxPersistReducer } from 'redux-persist';
import { productListReducer, productReducer } from "./Reducers/Product";
import { userLoginReducer, userRegisterReducer } from "./Reducers/User";
import { cartReducer } from "./Reducers/Cart";

import { thunk } from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  version: 1 
};

const rootReducer = combineReducers({
  productListReducer,
  productReducer,
  userLoginReducer,
  userRegisterReducer,
  cartReducer

});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cartReducer: { cartItems: cartItemsFromStorage }
};

const middleware = [thunk];
const persistedReducer = reduxPersistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);

export let persistor = persistStore(store);
