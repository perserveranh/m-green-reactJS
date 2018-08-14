import React, { Component } from 'react';
import '../../App.css';
import { Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import { strings, api } from '../../components'
var moment = require('moment');

class PromotionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stampList: []
        }
    }

    componentDidMount() {
        this.getlistStamp();
    }

    async getlistStamp() {
        const stamp = await api.dataService.getListStamps('0', '10')
        this.setState({
            stampList: stamp.data
        })
    }
    renderStamp() {
        let arrayStamp = [];
        for (var i = 1; i < this.props.s.promotion.stamp + 1; i++) {
            arrayStamp.push({ i, collectedStamp: false });
        }
        for (var i = 0; i < this.props.s.collected; i++) {
            arrayStamp[i].collectedStamp = true
        }
        return (
            arrayStamp.map((data) => {
                return (
                    <i class="fas fa-tags" style={{ opacity: (data.collectedStamp ? 1 : 0.5) }}></i>

                )
            })
        )
    }
    render() {
        const { s } = this.props
        return (
            <div>
                <Link
                    key={s.id}
                    style={{ color: 'unset' }} to={`/detail/${s.promotion.id}`}>
                    <Col
                        xs="12" md="4" sm="6" lg={this.props.col} style={{ marginTop: 5, paddingLeft: "10" }}>
                        <Row className="content-item-promotion">
                            <div className="wraper-promotion-item" >
                                <div className="header-promotion-item" >
                                    <Row>
                                        <Col xs="3" md="3"  >
                                            <img src={s.partner.logo} />
                                        </Col>
                                        <Col xs="9" md="9"  >
                                            <p className="title-promotion1">{s.partner.name}</p>
                                            <p className="title-promotion2">{s.partner.slogan}.</p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="body-promotion-item">
                                    <img className="image-promotion" src={s && s.promotion.images ? s.promotion.images[0] : 'http://'} />
                                    <Row style={{ marginTop: 10 }}>
                                        <Col xs="12" md="12"  >
                                            <Row>
                                                <p className="promotion-name"> {s.promotion.name.length > 54 ? (s.promotion.name).slice(0, 50) + "..." : s.promotion.name}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                                <div
                                    className="footer-promotion-item"
                                >
                                    <Row style={{ marginTop: 10, }}>
                                        <Col md="12" xs="12">
                                            <p className='verify-code'>{strings.stamps}:&nbsp;{this.renderStamp()}</p>
                                        </Col>
                                        <Col xs="12" md="12"  >
                                            <p >
                                                <i class="fas fa-calendar-times" style={{ top: 2, marginLeft: 5, marginRight: 5 }}></i>

                                                {strings.applyTo}:{moment(s.endDate).format('L')}</p>
                                        </Col>
                                        <Col md="12" xs="12"></Col>
                                    </Row>
                                </div>

                            </div>
                        </Row>
                    </Col>
                </Link>
            </div>
        );
    }
}


export default PromotionItem