import React, {Component} from 'react';
import './../../css/uiLoading.css';
import {connect} from 'react-redux';
class Loading extends Component {
    render() {
        return this.props.uiState.showLoading ? (
            <div id="wrap-loading">
              <div className="sk-circle">
                <div className="sk-circle1 sk-child" />
                <div className="sk-circle2 sk-child" />
                <div className="sk-circle3 sk-child" />
                <div className="sk-circle4 sk-child" />
                <div className="sk-circle5 sk-child" />
                <div className="sk-circle6 sk-child" />
                <div className="sk-circle7 sk-child" />
                <div className="sk-circle8 sk-child" />
                <div className="sk-circle9 sk-child" />
                <div className="sk-circle10 sk-child" />
                <div className="sk-circle11 sk-child" />
                <div className="sk-circle12 sk-child" />
              </div>
            </div>
          ) : null;
    }
}
const mapStateToProps = state => {
    return {
        uiState: state.uiReducers
    }
}
export default connect(mapStateToProps)(Loading);
