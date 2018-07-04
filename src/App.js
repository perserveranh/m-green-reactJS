import React, { Component,Fragment } from 'react';
import './App.css';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {

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
    return (
      <div className="App">
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
