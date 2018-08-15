import React, { Component } from 'react';
import { Footer, Header, api, ListPromotions, strings } from '../../components';
import { Container, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import Ionicon from 'react-ionicons'
import { Link } from "react-router-dom";
import '../../App.css'

class Promotions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 1,
            listMember: [],
            promotionType: 'percent,stamp,billPoint',
            isLoading: true,
            dataList: [],
            dropdownOpen: false
        }
    }

    // toggle() {
    //     this.setState({
    //         dropdownOpen: !this.state.dropdownOpen
    //     });
    // }
    _renderMenuPromotions() {
        return (
            <div className="nav-category nav-promotions">
                <Container>
                    <Row>
                        <Col xs="2" md="2" className="card-left">
                            <div id="category-title">
                                <p>{strings.promotion.toUpperCase()}</p>
                            </div>
                            <div>
                                {this.props.cateState.category.map(cate => {
                                    return (
                                        <div onClick={() => { api.api.setIDCategory(cate.id) }}>
                                            <div

                                                style={{ border: cate.id === this.props.cateState.category.length ? 'unset' : null }}
                                                className='item-cardleft-promotions'
                                                key={cate.id}
                                            >
                                                <Ionicon className='icon-cardleft-promotions' icon={'ios-' + cate.icon} color={'#fff'} fontSize="20px" />
                                                <p> {cate.name}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </Col>
                        <div className='shape-brg shape-in-promotion' ></div>

                        <Col xs={10} md={10} className='content-right-promotions' >
                            <div className='menubar-promotions'>
                            </div>
                            <div className='list-promotion-more'>

                                <ListPromotions limit={18} col={4} category={this.props.cateState.category} promotionType={this.state.promotionType} />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

        )
    }


    // _renderMenuMobile() {
    //     return (
    //         <div className="menu-promotions-mobile">
    //             <Container className='content-menu-promotions-mobile' >
    //                 <Row>
    //                     {/* <Col xs="3" md="3" className='menu-promotions-mobile-left' >
    //                         <Row>
    //                             <ButtonDropdown
    //                                 color="success"
    //                                 isOpen={this.state.dropdownOpen}
    //                                 toggle={this.toggle}

    //                                 id="drops-promotion-mobile"
    //                             >
    //                                 <DropdownToggle caret>
    //                                     Button Dropdown
    //     </DropdownToggle>
    //                                 {this.props.cateState.category.map(cate => {
    //                                     return (
    //                                         <DropdownItem
    //                                             onClick={() => { api.api.setIDCategory(cate.id) }}
    //                                             style={{ border: cate.id == this.props.cateState.category.length ? 'unset' : null, background: '#ff5c00', }}
    //                                             className='item-cardleft-promotions'
    //                                         >
    //                                             <Ionicon className='icon-cardleft-promotions' icon={'ios-' + cate.icon} color={'#fff'} fontSize="20px" />
    //                                             <p style={{ color: '#fff' }}> {cate.name}</p>
    //                                         </DropdownItem>

    //                                     )
    //                                 })}
    //                             </ButtonDropdown>
    //                         </Row>
    //                     </Col> */}
    //                     <Col xs="9" md="9" className='menu-promotions-mobile-right' >

    //                     </Col>
    //                 </Row>

    //             </Container>

    //             <Container>
    //                 <ListPromotions limit={18} col={4} category={this.props.cateState.category} promotionType={this.state.promotionType} />
    //             </Container>
    //         </div>
    //     )
    // }



    // renderSlide() {
    //     return (
    //         <div id="slide">
    //             <Carousel
    //                 style={{ position: 'relative', zIndex: 10, }}
    //                 prevIcon={
    //                     <Glyphicon style={{ left: 20 }} glyph="glyphicon glyphicon-chevron-left" />
    //                     // <img style={{ marginTop: 200, marginRight: 150 }} src="arrowleft.png" />
    //                 }
    //                 nextIcon={
    //                     <Glyphicon style={{ right: 20 }} glyph="glyphicon glyphicon-chevron-right" />
    //                     // <img style={{ marginTop: 200, marginLeft: 160 }} src="arrowright.png" />
    //                 }
    //             >
    //                 <Carousel.Item>
    //                     <img style={{ width: '100%', height: 'auto' }} src='/banner.jpg' />

    //                 </Carousel.Item>
    //                 <Carousel.Item>
    //                     <img style={{ width: '100%', height: 'auto' }} src='/banner.jpg' />

    //                 </Carousel.Item>
    //                 <Carousel.Item>
    //                     <img style={{ width: '100%', height: 'auto' }} src='/banner.jpg' />
    //                 </Carousel.Item>
    //             </Carousel>
    //         </div>
    //     )
    // }





    _renderMenuBottomBanner() {
        return (
            <div id="wraper-menu-bottom-banner" >
                <Container className="content-menu-bottom-banner">
                    <Row >
                        <Col xs="4" md="4" className="item-menu-bottom-banner"  >

                            <Row onClick={() => { api.api.setPromotionType('percent,stamp,billPoint') }} className="element-item-menu-bottom-banner" >
                                <Col xs="4" md="6"  >
                                    <img src='/icon-promotion.png' />
                                </Col>
                                <Col xs="6" md="6"  >
                                    <Row>
                                        <p>{strings.promotion.toUpperCase()}</p>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>

                        <Col xs="4" md="4" className="item-menu-bottom-banner" >
                            <Row onClick={() => { api.api.setPromotionType('gift,giftAnother,exchange,giftPoint') }} className="element-item-menu-bottom-banner" >

                                <Col xs="4" md="6"  >
                                    <img src='/icon-gift.png' />
                                </Col>
                                <Col xs="6" md="6"  >
                                    <Row>
                                        <p >{strings.changeGift.toUpperCase()}</p>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs="4" md="4" style={{ borderRight: 0 }} className="item-menu-bottom-banner" >
                            <Link to='/mygift'>
                                <Row className="element-item-menu-bottom-banner" >

                                    <Col xs="4" md="6"  >
                                        <img src="/mygift.png" />
                                    </Col>
                                    <Col xs="6" md="6"  >
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
                {/* {this.renderSlide()} */}
                {this._renderMenuBottomBanner()}
                {this._renderMenuPromotions()}
                {/* {this._renderMenuMobile()} */}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { userReducer: state.userReducer, LangReducers: state.LangReducers, cateState: state.cateState, paramsReducer: state.paramsReducer }
}
export default connect(mapStateToProps)(Promotions);