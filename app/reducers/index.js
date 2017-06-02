import {combineReducers} from 'redux';
import * as API from '../api';
import {categories} from './categories';

let rootReducer = combineReducers({
  categories
});

export {rootReducer};
