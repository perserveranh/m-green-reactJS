import React , {Component} from 'react';
import Loading from './uiLoading';
import { connect } from 'react-redux';
import MessageBox from './messagebox';  
import './../../App.css';
class UI extends Component{

    render(){
        let {uiState} = this.props;
        return (
            uiState ? 
            (
                <div className="ui">
                <MessageBox show={uiState.showMessage} message={uiState.message}  />
                    <Loading show={uiState.showLoading} />
                </div>
            ) 
            : null
        );
    }
}

const mapStateToProps = state => {
    return {
        uiState: state.uiReducers
    }
}
export default connect(mapStateToProps)(UI);