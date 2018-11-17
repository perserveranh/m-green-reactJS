import React, { Component } from 'react';
// import '../../App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { strings } from '../../components'
class ConfirmBox extends Component {
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
                    <ModalHeader toggle={this.toggle}>{this.props.titleConfirm ? this.props.titleConfirm : 'thong bao'}</ModalHeader>
                    <ModalBody>
                        {this.props.bodyConfirm}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.props.bodyConfirmOK} >{this.props.titleBtnOK ? this.props.titleBtnOK : strings.OkBox}</Button>
                        <Button onClick={this.props.bodyConfirmNO} >{this.props.titleBtnNO ? this.props.titleBtnNO : strings.NoBox}</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ConfirmBox
