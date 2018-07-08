import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {createStore} from 'redux';
import Reducers from './reducers/index';
import {Provider} from 'react-redux';

const store= createStore(
    Reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
    <Provider store={store} >
    <App /> 
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
