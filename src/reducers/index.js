import LangReducers from './LangReducers';
import uiReducer from './uiReducer';
import { combineReducers } from 'redux';
import paramsReducer from './paramsReducers'
import userReducer from './userReducers';

const Reducers = combineReducers({ LangReducers, uiReducer ,userReducer,paramsReducer});

export default Reducers;