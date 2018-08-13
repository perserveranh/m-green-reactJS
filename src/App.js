import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import AppContainer from './AppContainer';
import { api } from './components';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducers from './redux/index';


const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger),
)
class App extends Component {
  constructor(props) {
    super(props);
    api.api.setStore(store);

  }
  render() {
    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    );
  }
}


export default App;
