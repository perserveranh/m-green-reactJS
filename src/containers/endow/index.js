import React, { Component } from 'react';
import '../../App.css';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { api, Header, Footer, strings, MenuPromotion, ListPromotions } from '../../components';
import { Link } from "react-router-dom";

class Endow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 1,
            listMember: [],
            listBanner: [],
            promotionType: 'percent,stamp,billPoint'
        }
    }
    setCategory(cate) {
        this.setState({
            category: cate,
        })
    }

    componentDidMount() {
        this.getbanner()
    }
    async getbanner() {
        const banner = await api.dataService.getBanner();
        this.setState({
            listBanner: banner.data
        })
    }

    _renderMenuBottomBanner() {
        return (
            <div id="wraper-menu-bottom-banner" >
                <Container className="content-menu-bottom-banner">
                    <Row >
                        <Col xs="4" md="4" sm="4" className="item-menu-bottom-banner"  >
                            <Link to="/endow" style={{ textDecoration: 'none' }}>
                                <Row onClick={() => { api.api.setPromotionType('percent,stamp,billPoint') }} className="element-item-menu-bottom-banner" >
                                    <Col xs="12" md="6" sm="12"  >
                                        <img src="/icon-promotion.png" alt="promotion" />

                                    </Col>
                                    <Col xs="12" md="6" sm="12"  >
                                        <Row>
                                            <p>{strings.promotion.toUpperCase()}</p>
                                        </Row>
                                    </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col xs="4" md="4" sm="4" className="item-menu-bottom-banner" >
                            <Link to="/endow/1" style={{ textDecoration: 'none' }}>
                                <Row onClick={() => { api.api.setPromotionType('gift,giftAnother,exchange,giftPoint') }} className="element-item-menu-bottom-banner" >
                                    <Col xs="12" md="6" sm="12"  >
                                        <img src='/icon-gift.png' />
                                    </Col>
                                    <Col xs="12" md="6" sm="12"  >
                                        <Row>
                                            <p className='mygift-title-menu'>{strings.changeGift.toUpperCase()}</p>
                                        </Row>
                                    </Col>
                                </Row>
                            </Link>
                        </Col>
                        <Col xs="4" md="4" sm="4" style={{ borderRight: 0 }} className="item-menu-bottom-banner" >
                            <Link to='/mygift'>
                                <Row onClick={() => { api.api.setPromotionType('gift,giftAnother,exchange,giftPoint') }} className="element-item-menu-bottom-banner" >
                                    <Col xs="12" md="6" sm="12"  >
                                        <img src="/mygift.png" />
                                    </Col>
                                    <Col xs="12" md="6" sm="12"  >
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
        console.log('debug', this.props)
        return (
            <div className="App">
                <Header />
                {this._renderMenuBottomBanner()}
                <MenuPromotion />
                <Container>
                    <ListPromotions noload={true} limit={8} col={3} promotionType={this.state.promotionType} />
                </Container>
                <Link className='loadmore-btn' to="/promotions/1">{strings.more} </Link>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer, LangReducers: state.LangReducers
    }
}
export default connect(mapStateToProps)(Endow);