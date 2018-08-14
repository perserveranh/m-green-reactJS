import React, { Component } from 'react';
import '../../App.css';
import { Row, Col, Button } from 'reactstrap'
import QRCode from 'qrcode-react';
import { SendVoucherModal, CheckoutModal, strings } from '../../components'

var moment = require('moment');
class ItemPromotion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showCheckout: false,
            showSendvoucher: false
        }
    }

    closeModal() {
        this.setState({
            showCheckout: false
        })
    }

    closeSendvoucerModal() {
        this.setState({
            showSendvoucher: false
        })
    }

    render() {
        const { item } = this.props
        return (
            <div>
                <SendVoucherModal show={this.state.showSendvoucher} closeModal={() => { this.closeSendvoucerModal() }} />
                <CheckoutModal checkoutType={this.props.checkoutType} code={item.code} show={this.state.showCheckout} closeModal={() => { this.closeModal() }} />
                <div className="code-promotion" >
                    <Row>
                        <Col xs="3">
                            <QRCode logo={process.env.PUBLIC_URL + "/icon.png"} value={item.code} size={90} />
                        </Col>
                        <Col xs="6">
                            <p>{strings.code} E-VOUCHER</p>
                            <p className='code'>{item.code}</p>
                            <p>{strings.applyTo} {moment(item.endDate).format('L')}</p>
                            <p>{strings.provinceCode}</p>
                        </Col>
                        <Col xs="3">
                            <Button color="success" onClick={() => this.setState({ showCheckout: true })}>{strings.verify}</Button>
                            <Button color="success" onClick={() => { this.setState({ showSendvoucher: true }) }} style={{ marginTop: '10px' }}>{strings.sendVoucher}</Button>
                        </Col>

                    </Row >
                </div>
                <div className="code-promotion-mobile" >
                    <Row>
                        <Col xs="4">
                            <QRCode logo={process.env.PUBLIC_URL + "/icon.png"} value={item.code} size={90} />
                        </Col>
                        <Col xs="8">
                            <p>{strings.code} E-VOUCHER</p>
                            <p className='code'>{item.code}</p>
                            <p>{strings.applyTo} {moment(item.endDate).format('L')}</p>
                        </Col>
                    </Row >

                    <p>{strings.provinceCode}</p>
                    <Button onClick={() => this.setState({ showCheckout: true })} style={{ width: 135, marginRight: 10 }} color="success">{strings.verify}</Button>
                    <Button color="success" onClick={() => { this.setState({ showSendvoucher: true }) }} style={{ width: 135, marginLeft: 10 }}>{strings.sendVoucher}</Button>
                </div>
            </div>

        );
    }
}


export default ItemPromotion