import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Reducers from './index';
const configureStore = () => {
    const store = createStore(
        Reducers,
        applyMiddleware(thunkMiddleware, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
    return store
}

export default configureStore;