import React, { Component } from 'react';
import '../../App.css';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { ListGift, api, strings, Header, Footer } from '../../components';
import { Link } from "react-router-dom";

class MyGift extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 1,
            listMember: [],
            promotionTypes: 'gift,exchange',
            isLoading: true,
            dataList: [],
            count: 0,
            styletTapCode: true,
            styletTapStamp: false,
            type: 'code'

        }
    }
    setCategory(cate) {
        this.setState({
            category: cate,
        })
    }
    onclickCodeFunction() {
        this.setState({
            type: 'code',
            styletTapCode: true,
            styletTapStamp: false
        })

    }
    onclickStampFunction() {
        this.setState({
            type: 'stamp',
            styletTapCode: false,
            styletTapStamp: true
        })
    }

    changePromotionType(promotionType) {
        this.setState({
            promotionType
        })
    }
    _renderMenuPromotions() {
        return (
            <div className=" nav-promotions">
                <Container>
                    <div className="yourgift-tabTitle">
                        <Row >

                            <Col md="6" xs="6" sm="6">
                                <Row className="title-item-menu-category" onClick={() => this.onclickCodeFunction()}>
                                    <p style={this.state.styletTapCode ? { borderBottom: '3px solid #2a9c44', color: '#2a9c44' } : { borderBottom: 'none' }}>{strings.giftticket}</p>
                                </Row>
                            </Col>
                            <Col md="6" xs="6" sm="6">
                                <Row className="title-item-menu-category" onClick={() => this.onclickStampFunction()}>
                                    <p style={this.state.styletTapStamp ? { borderBottom: '3px solid #2a9c44', color: '#2a9c44' } : { borderBottom: 'none' }}>{strings.stampticket}</p>
                                </Row>
                            </Col>

                        </Row>
                    </div>
                    <Row>
                        <Col xs="12" md="12" className='content-right-promotions' >
                            <Row>
                                <div className='list-promotion-more'>
                                    <ListGift type={this.state.type} />
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
    _renderMenuMobile() {
        return (
            <div className="menu-promotions-mobile">
                <Container>
                    <ListGift />
                </Container>
            </div>
        )
    }
    _renderMenuBottomBanner() {
        return (
            <div id="wraper-menu-bottom-banner" >
                <Container className="content-menu-bottom-banner">
                    <Row >
                        <Col xs="4" md="4" sm="4" className="item-menu-bottom-banner"  >
                            <Row onClick={() => { api.api.setPromotionType('percent,stamp,billPoint') }} className="element-item-menu-bottom-banner" >
                                <Col xs="4" md="6" sm="6"  >
                                    <img src="/icon-promotion.png" alt="promotion" />

                                </Col>
                                <Col xs="8" md="6" sm="6"  >
                                    <Row>
                                        <p>{strings.promotion.toUpperCase()}</p>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="4" md="4" sm="4" className="item-menu-bottom-banner" >
                            <Row onClick={() => { api.api.setPromotionType('gift,giftAnother,exchange,giftPoint') }} className="element-item-menu-bottom-banner" >

                                <Col xs="4" md="6" sm="6"  >
                                    <img src='/icon-gift.png' />
                                </Col>
                                <Col xs="8" md="6" sm="6"  >
                                    <Row>
                                        <p className='mygift-title-menu'>{strings.changeGift.toUpperCase()}</p>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="4" md="4" sm="4" style={{ borderRight: 0 }} className="item-menu-bottom-banner" >
                            <Link to='/mygift'>
                                <Row onClick={() => { api.api.setPromotionType('gift,giftAnother,exchange,giftPoint') }} className="element-item-menu-bottom-banner" >
                                    <Col xs="4" md="6" sm="6"  >
                                        <img src="/mygift.png" />
                                    </Col>
                                    <Col xs="8" md="6" sm="6"  >
                                        <Row>
                                            <p className='mygift-title-menu'>{strings.myGif.toUpperCase()}</p>
                                        </Row>
                                    </Col>
                                </Row>

                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
    render() {
        return (
            <div className="App">
                <Header />
                {this._renderMenuBottomBanner()}
                {this._renderMenuPromotions()}
                {this._renderMenuMobile()}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { userReducer: state.userReducer, LangReducers: state.LangReducers, cateState: state.cateState }
}
export default connect(mapStateToProps)(MyGift);