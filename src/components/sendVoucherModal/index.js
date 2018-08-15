import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { strings } from '../../components';
export default class SendVoucherModal extends React.Component {
    handleClose() { }
    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} >
                <ModalHeader >{strings.SendVoucherEmail}</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleText">{strings.email}</Label>
                            <Input type="textarea" name="text" id="exampleText" placeholder={strings.emailReciverVoucher} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" style={{ background: '#ff5c00' }} onClick={this.props.toggle}>{strings.sendVoucher}</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>{strings.cancel}</Button>
                </ModalFooter>
            </Modal>
        );
    }
}
