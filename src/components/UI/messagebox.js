import React, { Component } from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { connect } from 'react-redux';
class MessageBox extends Component {
    render() {

        return (

            <div className="static-modal">
                <Modal show={this.props.show} >
                    <ModalHeader>
                        <Modal.Title>{this.props.title ? this.props.title : 'Thông báo'}</Modal.Title>
                    </ModalHeader>

                    <ModalBody>{this.props.message}</ModalBody>

                    <ModalFooter>
                        <Button onClick={() => { this.props.dispatch({ type: 'HIDE_MESSAGE', showMessage: false }) }} >Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        uiState: state.uiReducers
    }
}
export default connect(mapStateToProps)(MessageBox);
