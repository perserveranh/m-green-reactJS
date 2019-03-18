import React, { Component, Fragment } from 'react';
import { Header, Footer, api } from '../../components';
import { Row, Col, Button, Container } from 'reactstrap';
import '../../css/newInfo.css';
import {
    FacebookShareButton,
    FacebookShareCount,
    FacebookIcon,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    LineShareButton,
    EmailShareButton,
} from 'react-share';
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
        let url = `mgreen.vn/getNewInfo/${this.props.match.params.id}`
        console.log({ url })
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
                                    <h3 >Chia sẻ tin này lên Facebook</h3>
                                    <FacebookShareButton
                                        url={url}
                                        title={'Facebook'}
                                        className="shareBtn col-md-1 col-sm-1 col-xs-1"
                                        quote={newInfos.title.toUpperCase()}
                                        hashtag='#mgreen'
                                    >

                                        <FacebookIcon
                                            size={42}
                                            round />
                                    </FacebookShareButton>
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
