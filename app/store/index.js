// src/routes.js
import React from 'react';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "../reducers";

let initialState = {};

const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;
