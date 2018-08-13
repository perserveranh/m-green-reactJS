import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BackTop } from 'antd';
import 'antd/dist/antd.css';
import { resetIdCounter } from 'react-tabs';
import { strings, api } from './components';
import UI from './components/UI';
import { connect } from 'react-redux';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.setLang();
        this.state = {
            listMember: []
        }
    }
    setLang() {
        let Lang = localStorage.getItem('language');
        strings.setLanguage(Lang ? Lang : 'vi');

    }
    async getListMember() {
        const member = await api.dataService.getListMember(0)
        console.log('concac', member)
        if (member.code !== 0) return
        this.setState({
            listMember: member.data
        })
    }

    componentDidMount() {
        this.getListMember()
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
                <BackTop>
                    <div className="ant-back-top-inner"><i className="fas fa-angle-double-up"></i></div>
                </BackTop>
                <UI />
                <Router>
                    {this.showContentMenus(routes)}
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

        userReducer: state.userReducer
    }
}
export default connect(mapStateToProps)(AppContainer);
