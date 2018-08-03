import React, { Component, Fragment } from 'react';
import { Header, Footer } from '../../components';
import { connect } from 'react-redux';
import '../../css/volunteer.css';

class CollectorMgreen extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <img className="img-volunteer" src="/mgreen-img.png" alt="mgreen" />
                <Footer />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        uiReducers: state.uiReducers
    }
}
export default connect(mapStateToProps)(CollectorMgreen);
