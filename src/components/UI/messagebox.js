import React, { Component } from 'react';
// import '../../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { strings, api } from '../../components';
class MessageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className="static-modal">
             
                <Modal isOpen={this.props.isOpen} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.title ? this.props.title : strings.warning}</ModalHeader>
                    <ModalBody>
                        {this.props.message}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => { api.api.hideMessage() }} >{strings.close}</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default MessageBox
