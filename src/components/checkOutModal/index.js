import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { api, strings } from '../../components'
export default class CheckoutModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            billAmount: ''
        }
    }
    handleClose() {
    }

    async doisoat() {
        if (this.state.password === '' || this.state.userName === '' || (this.props.checkoutType === 2 && this.state.billAmount === ''))
            return api.api.showMessage(strings.inputwarning)
        const result = await api.dataService.postDoiSoat(this.state.userName, this.state.password, this.props.code, this.state.billAmount)
        if (result.code !== 0) return api.api.showMessage(result.msg)
        api.api.showMessage(result.msg)
    }

    render() {
        return (<div>
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
                <ModalHeader >{strings.checkout}</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">{strings.loginname}</Label>
                            <Input
                                type="text"
                                value={this.state.userName}
                                placeholder={strings.plhInputname}
                                onChange={(val) => { this.setState({ userName: val.target.value }) }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">{strings.password}</Label>
                            <Input
                                type="password"
                                value={this.state.password}
                                placeholder={strings.plhInputpassword}
                                onChange={(val) => { this.setState({ password: val.target.value }) }}
                            />
                        </FormGroup>
                        {this.props.checkoutType === 2 ? <FormGroup>
                            <Label for="exampleNumber">{strings.totalbill}</Label>
                            <Input
                                type="number"
                                value={this.state.billAmount}
                                placeholder="Nhập tổng hoá đơn"
                                onChange={(val) => { this.setState({ billAmount: val.target.value }) }}
                            />
                        </FormGroup> : null}
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" style={{ background: '#ff5c00' }} onClick={() => { this.props.toggle, this.doisoat() }}>{strings.checkout}</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>{strings.close}</Button>
                </ModalFooter>
            </Modal>
        </div>);
    }
}