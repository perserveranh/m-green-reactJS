import LangReducers from './LangReducers';
import uiReducer from './uiReducer';
import { combineReducers } from 'redux';
import paramsReducer from './paramsReducers'
import userReducer from './userReducers';
import cateState from './categoryReducer';

const Reducers = combineReducers({ LangReducers, uiReducer ,cateState,userReducer,paramsReducer});

export default Reducers;