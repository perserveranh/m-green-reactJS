import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../App.css';
import MessageBox from './messagebox'
import Loading from './loading'
import ConfirmBox from './conFirmbox'
class UI extends Component {
    render() {
        let uiStatus = this.props.uiState
        return (
            uiStatus ?
                (
                    <div className="Ui">
                        <MessageBox show={uiStatus.showMessage} message={uiStatus.message} title={uiStatus.titleMessage} />
                        <Loading show={uiStatus.showLoading} />
                        <ConfirmBox show={uiStatus.showConfirmBox} titleConfirm={uiStatus.titleConfirm} bodyConfirm={uiStatus.bodyConfirm} bodyConfirmOK={uiStatus.bodyConfirmOK} bodyConfirmNO={uiStatus.bodyConfirmNO} titleBtnOK={uiStatus.titleBtnOK} titleBtnNO={uiStatus.titleBtnNO} />
                    </div>

                )
                : null
        );
    }
}

const mapStateToProps = (state) => {
    return { uiState: state.uiReducer }
}
export default connect(mapStateToProps)(UI);
