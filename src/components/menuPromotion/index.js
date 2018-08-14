import React, { Component } from 'react';
import '../../App.css';
import { Container, Row, Col } from 'reactstrap';
import { strings, api } from '../../components'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

class MenuPromotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {

        return (
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
                                    style={{ color: 'unset' }} >

                                    <Row className="title-item-menu-category">
                                        <p style={this.props.paramsReducer.idCategory === cate.id ? { borderBottom: '2px solid #ff5c00' } : {}} >{cate.name}</p>
                                    </Row>

                                </Link>)
                        })}
                        <Col className="more">
                            <Link style={{ color: 'black' }} to="/promotions/1">{strings.more} &nbsp;<i class="fas fa-angle-double-right"></i></Link>
                        </Col>
                    </Row>
                </Container>

            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return { userReducer: state.userReducer, cateState: state.cateState, paramsReducer: state.paramsReducer }
}
export default connect(mapStateToProps)(MenuPromotion);