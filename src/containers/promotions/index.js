import React, { Component } from 'react';
import { Footer, Header, api } from '../../components';
import { connect } from 'react-redux';

class Endow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 1,
            listMember: [],
            promotionType: 'percent,stamp,billPoint',
            isLoading: true,
            dataList: [],

        }
    }
    render() {
        return (
            <div className="home">
                <Header />
                <h1>dsafgh</h1>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { userReducer: state.userReducer, LangReducers: state.LangReducers, cateState: state.cateState, paramsReducer: state.paramsReducer }
}
export default connect(mapStateToProps)(Endow);