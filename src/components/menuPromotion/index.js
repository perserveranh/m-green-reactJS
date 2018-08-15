import React, { Component } from 'react';
import '../../App.css';
import { Container, Row, Col } from 'reactstrap';
import { strings, api } from '../../components'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { Icon } from 'antd';

class MenuPromotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }
    handleClick() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        return (
            <React.Fragment>

                <div className="nav-category">
                    <Container className="card">
                        <Row >
                            <Col xs="3" md="3" sm="3" className="card-left" >
                                <div id="category-title">
                                    <p>{strings.newDeal}</p>
                                </div>
                            </Col>
                            <div className='shape-brg' ></div>
                            {this.props.cateState.category.map(cate => {
                                return (
                                    <Link to="#" onClick={() => { api.api.setIDCategory(cate.id) }}
                                        key={cate.id}
                                        style={{ color: 'unset', textDecoration: 'none' }} >

                                        <Row className="title-menu-category ">
                                            <p style={this.props.paramsReducer.idCategory === cate.id ? { borderBottom: '2px solid #ff5c00' } : {}} >{cate.name}</p>
                                        </Row>

                                    </Link>)
                            })}
                            <Col className="more">
                                <Link style={{ color: 'black', textDecoration: 'none' }} to="/promotions/1">{strings.more} &nbsp;<i className="fas fa-angle-double-right"></i></Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="menu-mobile-promotion">
                    <div onClick={this.handleClick.bind(this)}>
                        <Icon type="menu-fold anticon-menu" style={{ fontSize: '22px', top: 0, right: '18px' }} />
                    </div>
                    <div className={`ht-menu-promotion ${!this.state.isOpen ? 'isShow' : ''}`}  >
                        {this.props.cateState.category.map(cate => {
                            return (
                                <Link to="#" onClick={() => {
                                    api.api.setIDCategory(cate.id), this.handleClick()
                                }}
                                    key={cate.id}
                                    style={{ color: 'unset', textDecoration: 'none' }} >

                                    <Row className="title-menu-category ">
                                        <p style={this.props.paramsReducer.idCategory === cate.id ? { borderBottom: '2px solid #ff5c00' } : {}} >{cate.name}</p>
                                    </Row>

                                </Link>)
                        })}

                    </div>


                </div>
            </React.Fragment>

        );
    }
}


const mapStateToProps = (state) => {
    return { userReducer: state.userReducer, cateState: state.cateState, paramsReducer: state.paramsReducer }
}
export default connect(mapStateToProps)(MenuPromotion);