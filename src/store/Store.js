/* eslint-disable prettier/prettier */
import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../pages/UserSLice';
import thunk from 'redux-thunk';
export const store = configureStore({ reducer: { userReducer: userReducer.reducer } }, applyMiddleware(thunk));
export default store;
