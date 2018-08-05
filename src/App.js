import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import { resetIdCounter } from 'react-tabs';
import { strings } from './components';
import UI from './components/UI';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.setLang();
  }
  setLang() {
    let Lang = localStorage.getItem('language');
    strings.setLanguage(Lang ? Lang : 'vi');

  }
  UNSAFE_componentWillMount() {
    this.props.dispatch({ type: "SHOW_LOADING", showLoading: true });
  }
  componentDidMount() {
    setTimeout(
      function () {
        this.props.dispatch({ type: "HIDE_LOADING", showLoading: false });
      }.bind(this),
      700
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
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
        <UI />
        <BackTop>
          <div className="ant-back-top-inner"><i className="fas fa-angle-double-up"></i></div>
        </BackTop>
        <Router>
          {this.showContentMenus(routes)}
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    uiReducers: state.uiReducers
  }
}
export default connect(mapStateToProps)(App);
