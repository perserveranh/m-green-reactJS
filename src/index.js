import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import Reducers from './reducers/index';
import {Provider} from 'react-redux';
import 'normalize.css';

const store= createStore(
    Reducers,
    applyMiddleware(thunkMiddleware,logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
    <Provider store={store} >
    <App /> 
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
