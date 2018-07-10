import LangReducers from './LangReducers';
import uiReducers from './uiReducer';
import {combineReducers} from 'redux';
import paramsReducer from './paramsReducers';
import userReducer from './userReducers';

const Reducers = combineReducers({LangReducers,paramsReducer,uiReducers,userReducer});

export default Reducers;