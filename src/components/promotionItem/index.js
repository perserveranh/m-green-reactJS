import React, { Component } from 'react';
import '../../App.css';
import { Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import { api, strings } from '../index';
var moment = require('moment');

class PromotionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: []
        }
    }

    _renderPercent() {
        const { e } = this.props
        let count = 0;
        if (e.isExchangePoint) {
            count += 1
        }
        if (e.isGift) {
            count += 1
        }
        if (e.isGiftAnother) {
            count += 1
        }
        if (e.isGiftPoint) {
            count += 1
        }
        if (e.isPercent) {
            count += 1
        }
        if (e.isStamp) {
            count += 1
        }
        if (e.isBillPoint) {
            count += 1
        } if (count >= 2 ||
            (e.isPercent && e.percent === 0) ||
            (e.isPercent && e.percent === null) ||
            (e.isStamp && e.stamp !== 0) ||
            e.isGiftAnother
        ) {
            return (
                <p className="value-in-tag pointPercent">
                    <span className='title'>{strings.pointPercent}</span><span className='billPointPercent'>{e.billPointPercent + '%'}</span>
                </p>
                // <p className="value-in-tag"> {trans.pointPercent + e.billPointPercent + '%'}</p>
            );
        } else {
            if (e.isBillPoint) {
                return (
                    <p className="value-in-tag pointPercent">
                        <span className='title'>{strings.pointPercent}</span><span className='billPointPercent'>{e.billPointPercent + '%'}</span>
                    </p>
                );
            }
            if (e.isPercent) {
                return (
                    <p className="value-in-tag"> {e.percent + '%'}</p>
                );
            }
            if (e.isExchangePoint) {
                return (
                    <p className="value-in-tag-point" > {e.exchangePoint.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' ' + 'mPoint'}</p>
                )
            }
            if (e.isGiftPoint) {
                return (
                    <p className="value-in-tag-point">  {e.giftPoint.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                )
            }
        }
    }

    render() {
        const { e } = this.props
        return (

            <Col xs="12" md="4" sm="6" lg={this.props.col} style={{ marginTop: 5, paddingLeft: "10" }}>
                <Row className="content-item-promotion">
                    <div className="wraper-promotion-item" >
                        <Link
                            key={e.id}
                            style={{ color: 'unset', textDecoration: 'none' }} to={`/detail/${e.id}`}>
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
                                <div className="tag-promotion">
                                    <img src="/tag.png" />
                                    {this._renderPercent()}
                                </div>
                                <img className="image-promotion" src={e && e.images ? e.images[0] : 'http://'} />
                                <Row style={{ marginTop: 10 }}>
                                    <Col xs="2" md="2"  >
                                        <div style={{ width: '100%' }}>

                                            <i className="fas fa-heart" id="icon-like"></i>
                                            <div id="count-like" >
                                                <p >{e.likeCount}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs="10" md="10"  >
                                        <Row>
                                            <p className="promotion-name"> {e.name && e.name.length > 54 ? (e.name).slice(0, 50) + "..." : e.name}</p>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <div
                                className="footer-promotion-item"
                            >
                                <Row style={{ marginTop: 10, }}>
                                    <Col xs="8" md="8"  >
                                        <p >
                                            <i className="fas fa-calendar-alt" style={{ top: 2, marginLeft: 5, marginRight: 5 }}></i>

                                            {strings.applyTo}:{moment(e.endDate).format('L')}</p>
                                    </Col>
                                    <Col xs="4" md="4"   >
                                        <Row>
                                            <p >
                                                <i className="fas fa-map-marker" style={{ top: 2, marginLeft: 10 }}></i>

                                                {e.area}
                                            </p>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Link>

                    </div>
                </Row>
            </Col>
        );
    }
}


export default PromotionItem