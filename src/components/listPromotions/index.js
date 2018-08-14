import React, { Component } from 'react';
import '../../App.css';
import { Row } from 'reactstrap';
import { connect } from 'react-redux'
import { api, PromotionItem, strings } from '../index';
import InfiniteScroll from 'react-infinite-scroller';
class ListPromotions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            canLoad: true,
            category: '1',
            isLoading: true
        }
    }

    componentDidMount() {
        this.getlistPromotions()
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('fffffff')
        if (nextProps !== this.props) {
            this.setState({
                dataList: []
            })
            this.getlistPromotions(nextProps)
        }
    }
    async getlistPromotions(nextProps) {
        let category = ''
        if (nextProps) {
            category = nextProps.categorySearch ? nextProps.categorySearch : nextProps.paramsReducer.idCategory
        } else {
            category = this.props.categorySearch ? this.props.categorySearch : this.props.paramsReducer.idCategory
        }

        this.setState({
            isLoading: true
        })
        // api.showLoading()
        const result = await api.dataService.getListPromotions(0, this.props.limit, category, nextProps ? nextProps.paramsReducer.promotionType : this.props.paramsReducer.promotionType, "new", !this.props.search ? null : this.props.search)
        if (result.code !== 0) return api.api.showMessage(result.msg)
        this.setState({
            dataList: result.data,
            isLoading: false
        })
        // api.hideLoading()

    }

    async loadMore() {
        if (this.state.isLoading) return
        this.setState({
            isLoading: true
        })
        const result = await api.dataService.getListPromotions(this.state.dataList.length, this.props.limit, (this.props.categorySearch ? this.props.categorySearch : this.props.paramsReducer.idCategory), this.props.paramsReducer.promotionType, "new", !this.props.search ? null : this.props.search)
        if (result.code !== 0) return api.api.showMessage(result.msg)
        this.setState({
            isLoading: false
        })
        let newDataList = this.state.dataList.concat(result.data)
        this.setState({
            dataList: newDataList
        })
        if (result.data && result.data.length === 0) {
            this.setState({
                canLoad: false
            })
        }
    }

    render() {
        return (
            <div className="list-promotions">
                {this.state.isLoading && this.props.noload ? <div style={{ marginTop: 50 }} className="cssload-container">
                    <div className="cssload-double-torus"></div>
                </div> : null}
                {!this.state.isLoading && this.state.dataList.length === 0 ? (<h2 style={{ textAlign: 'center' }}>{strings.noPromotion}</h2>) : null}
                <InfiniteScroll
                    key={this.state.category}
                    pageStart={0}
                    loadMore={() => { this.loadMore() }}
                    hasMore={this.props.noload ? null : this.state.canLoad}
                    loader={
                        <div className="cssload-container">
                            <div className="cssload-double-torus"></div>
                        </div>
                    }
                >
                    <Row className="content-list-promotions" >
                        {this.state.dataList.map(e => {
                            return (
                                <PromotionItem col={this.props.col} key={e.id} e={e} />
                            )
                        })}
                    </Row>

                </InfiniteScroll>

            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return { paramsReducer: state.paramsReducer }
}

export default connect(mapStateToProps)(ListPromotions);