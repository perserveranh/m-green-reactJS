import React, { Component,Fragment } from 'react';
import './App.css';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import { resetIdCounter } from 'react-tabs';

class App extends Component {

  componentDidMount(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  showContentMenus = (routes) => {
    var result = null;
    if(routes.length >0) {
      result=routes.map((route,index) => {
        return (
          <Route
           key={index}
          path={route.path}
          exact={route.exact}
          component ={route.main}
          />
        )
      })
    }
    return <Switch>{result}</Switch>
  }
  render() {
    resetIdCounter();
    return (
      <div className="App">
      <BackTop>
      <div className="ant-back-top-inner"><i class="fas fa-angle-double-up"></i></div>
    </BackTop>
      <Router>
      <Fragment>
      {this.showContentMenus(routes)}
      </Fragment>
      </Router>
      </div>
    );
  }
}

export default App;
