import React, { Component } from 'react';
import '../../App.css';
import { Row, Col } from 'reactstrap'
import { api, strings } from '../../components'
import { Link } from "react-router-dom";
var moment = require('moment');

class GiftItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: []
        }
    }


    render() {
        const { e } = this.props

        return (

            <Link
                key={e.id}
                style={{ color: 'unset' }} to={`/detail/${e.promotion.id}`}>
                <Col
                    xs="12" md="4" sm="6" lg={this.props.col} style={{ marginTop: 5, paddingLeft: "10" }}>
                    <Row className="content-item-promotion">
                        <div className="wraper-promotion-item" >
                            <div className="header-promotion-item" >
                                <Row>
                                    <Col xs="3" md="3"  >
                                        <img src={e.partner.logo} />
                                    </Col>
                                    <Col xs="9" md="9"  >
                                        <p className="title-promotion1">{e.partner.name}</p>
                                        <p className="title-promotion2">{e.partner.slogan}.</p>
                                    </Col>
                                </Row>
                            </div>
                            <div className="body-promotion-item">
                                <img className="image-promotion" src={e && e.promotion.images ? e.promotion.images[0] : 'http://'} />
                                <Row style={{ marginTop: 10 }}>
                                    <Col xs="12" md="12"  >
                                        <Row>
                                            <p className="promotion-name"> {e.promotion.name.length > 54 ? (e.promotion.name).slice(0, 50) + "..." : e.promotion.name}</p>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <div
                                className="footer-promotion-item"
                            >
                                <Row style={{ marginTop: 10, }}>
                                    <Col md="12" xs="12" className='verify-code'>
                                        <p>{strings.verifycode}: {e.code}</p>
                                    </Col>
                                    <Col xs="12" md="12"  >
                                        <p >
                                            <i class="fas fa-calendar-alt" style={{ top: 2, marginLeft: 5, marginRight: 5 }} ></i>

                                            {strings.applyTo}:{moment(e.endDate).format('L')}</p>
                                    </Col>
                                    <Col md="12" xs="12"></Col>
                                </Row>
                            </div>

                        </div>
                    </Row>
                </Col>
            </Link>
        );
    }
}


export default GiftItem