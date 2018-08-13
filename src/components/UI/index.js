import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../App.css';
import MessageBox from './messagebox'
import Loading from './loading'
import ConfirmBox from './conFirmbox'
class UI extends Component {
    render() {
        let {uiReducer} = this.props
        return (
            uiReducer ?
                (
                    <div className="Ui">
                        <MessageBox show={uiReducer.showMessage} message={uiReducer.message} title={uiReducer.titleMessage} />
                        <Loading show={uiReducer.showLoading} />
                        <ConfirmBox show={uiReducer.showConfirmBox} titleConfirm={uiReducer.titleConfirm} bodyConfirm={uiReducer.bodyConfirm} bodyConfirmOK={uiReducer.bodyConfirmOK} bodyConfirmNO={uiReducer.bodyConfirmNO} titleBtnOK={uiReducer.titleBtnOK} titleBtnNO={uiReducer.titleBtnNO} />
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
