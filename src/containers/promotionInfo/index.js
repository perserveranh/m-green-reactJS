import React, { Component } from 'react';
import '../../App.css';
import { Container, Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { ItemPromotion, api, strings, Header, Footer } from '../../components';
var Rating = require('react-rating');

var moment = require('moment');
var settings = {
    showIndex: false,
    showBullets: false,
    infinite: true,
    showThumbnails: true,
    showFullscreenButton: true,
    showGalleryFullscreenButton: true,
    showPlayButton: false,
    showGalleryPlayButton: false,
    showNav: false,
    slideDuration: 450,
    slideInterval: 2000,
    thumbnailPosition: 'bottom',


};
class PromotionInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likeStatus: true,
            codes: [],
            remain: {},
            rate: 3.5,
            shops: [],
            partner: {},
            promotion: {},
            rateData: [],
            images: ['http://cdn.dealtoday.vn//f9e66e8856c64d07bc27d14f2fd163ae.JPG', 'http://cdn.dealtoday.vn//f9e66e8856c64d07bc27d14f2fd163ae.JPG', 'http://cdn.dealtoday.vn//f9e66e8856c64d07bc27d14f2fd163ae.JPG',],
        }
    }

    componentDidMount() {
        this.getInfo()
        // window.$('#preview').setAttribute('src', this.state.images[0]);

    }
    setPreviewImage(image) {
        console.log('preview image', image);
        // document.getElementById("thanhvdpreviewy").setAttribute("src", image);
        // document.getElementById("thanhvdpreviewy").src(image)

    }

    async getInfo() {
        api.api.showLoading()
        const result = await api.dataService.getPromotionInfo(this.props.match.params.id)
        api.api.hideLoading()
        if (result.code !== 0) return;
        this.setPreviewImage(result.data.promotion.images[0]);
        this.setState({
            promotion: result.data.promotion,
            images: result.data.promotion.images,
            partner: result.data.partner,
            shops: result.data.shops,
            rate: result.data.promotion.rate,
            like: result.data.promotion.likeCount,
            remain: result.data.remain,
            codes: result.data.codes,
            rateData: result.data.rateData

        });
        window.scrollTo(0, 0)
    }

    _genImage() {
        const arrImage = this.state.images.map(image => {
            return ({
                original: image,
                thumbnail: image,
            })
        })
        return arrImage
    }



    _renderPercent() {

        let count = 0;
        if (this.state.promotion.isExchangePoint) {
            count += 1
        }
        if (this.state.promotion.isGift) {
            count += 1
        }
        if (this.state.promotion.isGiftAnother) {
            count += 1
        }
        if (this.state.promotion.isGiftPoint) {
            count += 1
        }
        if (this.state.promotion.isPercent) {
            count += 1
        }
        if (this.state.promotion.isStamp) {
            count += 1
        }
        if (this.state.promotion.isBillPoint) {
            count += 1
        } if (count >= 2 ||
            (this.state.promotion.isPercent && this.state.promotion.percent == 0) ||
            (this.state.promotion.isPercent && this.state.promotion.percent == null) ||
            (this.state.promotion.isStamp && this.state.promotion.stamp != 0) ||
            this.state.promotion.isGiftAnother
        ) {
            return (
                <p className="value-in-tag-detail"> {this.state.promotion.billPointPercent + '%'}</p>
            );
        } else {
            if (this.state.promotion.isBillPoint) {
                return (
                    <p className="value-in-tag-detail">{this.state.promotion.billPointPercent + '%'}</p>
                );
            }
            if (this.state.promotion.isPercent) {
                return (
                    <p className="value-in-tag-detail"> {this.state.promotion.percent + '%'}</p>
                );


            }
            if (this.state.promotion.isExchangePoint) {
                return (
                    <p className="value-in-tag-detail-point" > {this.state.promotion.exchangePoint.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                )
            }
            if (this.state.promotion.isGiftPoint) {
                return (
                    <p className="value-in-tag-detail-point">  {this.state.promotion.giftPoint.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                )
            }
        }
    }

    async onRate(val) {
        const rate = await api.dataService.postRate(this.props.match.params.id, val)
        const result = await api.dataService.getPromotionInfo(this.props.match.params.id)
        if (rate.code !== 0) return api.api.showMessage(rate.msg)
        api.api.showMessage(rate.msg)
        this.setState({
            rate: rate.data,
            rateData: result.data.rateData
        })
    }

    async toggleLike(id) {
        const like = await api.dataService.toggleLike(this.props.match.params.id)
        if (like.code !== 0) return api.api.showMessage(like.msg)
        if (like.data === 'like') {
            this.setState({ like: this.state.like + 1, likeStatus: false })
        } else {
            this.setState({ like: this.state.like - 1, likeStatus: true })
        }
    }

    async getCode() {
        // api.api.showMessage('aaaaaaa')
        const code = await api.dataService.getCode(this.props.match.params.id, 1)
        if (code.code !== 0) return api.api.showMessage(code.msg)
        let newcodes = this.state.codes;
        newcodes.push(code.data)
        this.setState({ codes: newcodes })

    }



    _renderCode() {
        if (JSON.stringify(this.state.remain) === JSON.stringify({}) && this.state.codes.length === 0 && (
            this.state.promotion.isPercent ||
            this.state.promotion.isBillPoint ||
            this.state.promotion.isStamp)) {
            this.getCode()
        } else if (this.state.codes.length > 0) {
            return (
                this.state.codes.map(item => {
                    return (
                        <ItemPromotion checkoutType={this.state.promotion.checkoutType} key={item.id} item={item} />
                    )
                })

            )
        }
    }

    render() {
        let rate5 = 0;
        let rate4 = 0;
        let rate3 = 0;
        let rate2 = 0;
        let rate1 = 0;
        this.state.rateData.map(item => {
            if (item.rate === 5) rate5 = item.count
            if (item.rate === 4) rate4 = item.count
            if (item.rate === 3) rate3 = item.count
            if (item.rate === 2) rate2 = item.count
            if (item.rate === 1) rate1 = item.count
        })
        let total = rate5 + rate2 + rate3 + rate4 + rate1

        return (
            <React.Fragment>
                <Header />
                <div className="wrap-promotion-info">

                    <Container>
                        <div className="page-title">
                            <Row>
                                <Col xs="3" md="1">
                                    <img src="/info-icon.png" />
                                </Col>
                                <Col xs="9" md="11">
                                    <h1>{strings.titleDetail}</h1>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <Container>
                        <Row>
                            <Col xs="12" md="4" >
                                <div className="slide-image">
                                    <div className="tag-promotion-detail">
                                        <img src="/tag.png" />
                                        {this._renderPercent()}
                                    </div>
                                    <ImageGallery {...settings} items={this._genImage()} />
                                </div>
                                <div className="content-rate">
                                    <div className='summary'>
                                        <div className='score'>
                                            <span className='highlight'>5.0</span>
                                            <span className='sm-highlight'>trên 5</span>
                                        </div>
                                        <Rating
                                            initialRating={this.state.rate}
                                            onChange={(val) => this.onRate(val)}
                                            placeholderRating={this.state.rate}
                                            emptySymbol={<p style={{ color: 'gray' }}>★</p>}
                                            placeholderSymbol={<p>★</p>}
                                            fullSymbol={<p>★</p>}
                                            fractions={2}
                                        />
                                    </div>
                                    <div className='detail'>
                                        <ul>
                                            <li>
                                                <span>5 Sao</span>
                                                <span className="progress-wrap">
                                                    <div className="pdp-review-progress undefined">
                                                        <div className="bar bg">
                                                        </div>
                                                        <div className="bar fg" style={{ width: rate5 * 100 / total }}>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span className="percent">{rate5}</span>
                                            </li>
                                            <li>
                                                <span>4 Sao</span>
                                                <span className="progress-wrap">
                                                    <div className="pdp-review-progress undefined">
                                                        <div className="bar bg">
                                                        </div>
                                                        <div className="bar fg" style={{ width: rate4 * 100 / total }}>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span className="percent">{rate4}</span>
                                            </li>
                                            <li>
                                                <span>3 Sao</span>
                                                <span className="progress-wrap">
                                                    <div className="pdp-review-progress undefined">
                                                        <div className="bar bg">
                                                        </div>
                                                        <div className="bar fg" style={{ width: rate3 * 100 / total }}>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span className="percent">{rate3}</span>
                                            </li>
                                            <li>
                                                <span>2 Sao</span>
                                                <span className="progress-wrap">
                                                    <div className="pdp-review-progress undefined">
                                                        <div className="bar bg">
                                                        </div>
                                                        <div className="bar fg" style={{ width: rate2 * 100 / total }}>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span className="percent">{rate2}</span>
                                            </li>
                                            <li>
                                                <span>1 Sao</span>
                                                <span className="progress-wrap">
                                                    <div className="pdp-review-progress undefined">
                                                        <div className="bar bg">
                                                        </div>
                                                        <div className="bar fg" style={{ width: rate1 * 100 / total }}>
                                                        </div>
                                                    </div>
                                                </span>
                                                <span className="percent">{rate1}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="content-like">
                                    <Button onClick={() => { this.toggleLike(this.props.match.params.id) }} color="success" className="btn-like">
                                        <i class="fas fa-heart"></i>

                                        {this.state.likeStatus ? " " + strings.like : " " + strings.dislike}
                                    </Button>
                                    <p>{this.state.like} {strings.times}</p>

                                </div>
                            </Col>
                            <Col xs="12" md="8">
                                <div className="top-detail">
                                    <p className="partner-name-detail">{this.state.partner.name}</p>
                                    <p className="partner-promotion-name-detail">{this.state.promotion.name}</p>
                                    {this._renderCode()}
                                    <Button onClick={() => { this.getCode() }} color="success" className="btn-get-detail">{this.state.codes.length > 0 ? this.state.promotion.buttonMore : this.state.promotion.button}</Button>
                                </div>
                                <div className="body-detail">
                                    <h3>{strings.detailPromotion}</h3>
                                    <p>{strings.expirationDate}{moment(this.state.promotion.endDate).format('L')}</p>
                                    <pre>{this.state.promotion.description}</pre>
                                </div>
                                <div className="bottom-detail">
                                    <h3>{strings.listShoptitle}</h3>
                                    {this.state.shops.map(shop => {
                                        return (
                                            <div
                                                className="content-list-shop"
                                                key={shop.id}>
                                                <i class="fas fa-map-marker-alt"></i>
                                                <p >{shop.address}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <div className="page-bottom" >
                            <div className="title-bottom-detail">
                                <p>{strings.partnerInfotitle}</p>
                            </div>
                            <div>
                                <p>{this.state.partner.name}</p>
                                <p>{this.state.partner.slogan}</p>
                            </div>
                        </div>
                    </Container>

                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { userReducer: state.userReducer, LangReducers: state.LangReducers, paramsReducer: state.paramsReducer, uiReducer: state.uiReducer }
}
export default connect(mapStateToProps)(PromotionInfo);