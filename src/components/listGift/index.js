import React, { Component } from 'react';
import '../../App.css';
import { Row } from 'reactstrap';
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller';
import { StamItem, GiftItem, strings, api } from '../../components';

class ListGift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            stampList: [],
            skip: 0,
            limit: 10,
            canLoad: true,
            isLoading: true
        }
    }

    componentDidMount() {
        if (this.props.type === 'code') {
            this.getlistPromotions()
        } else {
            this.getlistStamp();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.type === 'code') {
            this.getlistPromotions();
        } else {
            this.getlistStamp()
        }
    }

    async getlistPromotions() {
        const result = await api.dataService.getListCodes(0, 10, '', '2', '', '', 'gift,exchange')
        if (result.code !== 0) api.api.showMessage(result.msg)

        this.setState({
            dataList: result.data,
            isLoading: false
        })
    }
    async getlistStamp() {
        const stamp = await api.dataService.getListStamps(this.state.skip, this.state.limit)
        this.setState({
            stampList: stamp.data,
            isLoading: false
        })
    }


    async loadMore() {
        if (this.state.isLoading) return
        this.setState({
            isLoading: true,
        })
        const result = await api.dataService.getListCodes(this.state.dataList.length, 10, '', '2', '', '', 'gift,exchange')
        if (result.code !== 0) return api.api.showMessage(result.msg)
        let newDataList = this.state.dataList.concat(result.data)

        this.setState({
            dataList: newDataList,
            isLoading: false
        })
        if (result.data && result.data.length === 0) {
            this.setState({
                canLoad: false
            })
        }
    }
    renderHeader(type) {
        if (type === 'code' && this.state.dataList.length === 0 || type === 'stamp' && this.state.stampList.length === 0) {
            return (
                <h2 style={{ textAlign: 'center' }}>{strings.noPromotion}</h2>
            )
        }
    }
    render() {
        return (
            <div>
                <div className="list-promotions">
                    {this.renderHeader(this.props.type)}
                    {/* {!this.state.isLoading  && this.state.dataList.length == 0 ? (<h2 style={{ textAlign: 'center' }}>{strings.noPromotion}</h2>) : null} */}
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={() => this.loadMore()}
                        hasMore={this.state.canLoad}
                        loader={
                            this.state.isLoading ?
                                <div className="cssload-container">
                                    <div className="cssload-double-torus"></div>
                                </div> : null
                        }
                    >
                        <Row className="content-list-promotions" >
                            {this.props.type === "code" ? this.state.dataList.map(e => {
                                return (
                                    <div>
                                        <GiftItem key={e.id} e={e} />
                                    </div>
                                )
                            }) : null}
                            {this.props.type === "stamp" ? this.state.stampList.map(s => {
                                return (
                                    <div>
                                        <StamItem key={s.id} s={s} />
                                    </div>
                                )
                            }) : null}
                        </Row>
                    </InfiniteScroll>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { paramsReducer: state.paramsReducer }
}

export default connect(mapStateToProps)(ListGift);