import React, { Component, Fragment } from 'react';
import { Header, Footer, api } from '../../components';
import { Row, Col, Button, Container } from 'reactstrap';
import '../../css/newInfo.css';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
class NewInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNewsInfo: [],
        }
    }
    componentDidMount() {
        this.getNewsInfo();
    }
    async getNewsInfo() {
        api.api.showLoading();
        const newInfo = await api.dataService.getNewInfo(this.props.match.params.id);
        console.log({ newInfo })
        api.api.hideLoading();
        if (newInfo.code !== 0) return console.log(newInfo.msg);
        this.state.dataNewsInfo.push(newInfo.data)
        this.setState({
            dataNewsInfo: this.state.dataNewsInfo,
        })
    }
    render() {
        return (
            <Fragment>
                <Header />
                <Container>
                    <Row className="newInfo">

                        {this.state.dataNewsInfo.map(newInfos => {
                            return (
                                <Col xs={12}>
                                    <h1 className="text-center">{newInfos.title}</h1>
                                    {renderHTML(newInfos.content)}

                                </Col>
                            )
                        })}

                    </Row>
                </Container>
                <Footer />
            </Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        uiReducer: state.uiReducer
    }
}
export default connect(mapStateToProps)(NewInfo);
