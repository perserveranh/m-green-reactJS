import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import Loading from './loading';
class UI extends Component {
    render() {
        let uiStatus = this.props.uiState
        return (

            uiStatus ?
                (
                    <div className="Ui">
                        <Loading show={uiStatus.showLoading} />
                    </div>

                )
                : null
        );
    }
}

const mapStateToProps = (state) => {
    return { uiReducer: state.uiReducer }
}
export default connect(mapStateToProps)(UI);
