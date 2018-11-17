import React, { Component, Fragment } from 'react';
import { Header, Footer, api } from '../../components';
import { Row, Col, Button } from 'reactstrap';
import '../../css/news.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNews: [],

    }
  }
  componentDidMount() {
    this.getNews();
  }

  async getNews() {
    api.api.showLoading();
    const news = await api.dataService.getNews('0', '5');
    console.log('yyy', news)
    api.api.hideLoading();
    if (news.code !== 0) return console.log(news.msg);
    this.setState({
      dataNews: news.data,

    })
  }
  render() {
    console.log('abc', this.state.dataNews)
    return (
      <Fragment>
        <Header />

        <Row className="new">
          {this.state.dataNews.map(news => {
            return (
              <Col
                key={news.id}
                xs={12} md={12}>
                <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}><span className="vc_empty_space_inner"></span></div>
                <div className="news-content">
                  <img src={news.image} alt="img-news" />

                  <div className="news-text-content">
                    <h1>{news.title}</h1>
                    <p>{news.preview}</p>
                    <span>{news.createdAt}</span>
                    <br />

                    <Link to={`getNewInfo/${news.id}`}>
                      <Button color="secondary">Read More</Button>{' '}
                    </Link>
                  </div>
                </div>

              </Col>
            )
          })}

        </Row>

        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    userReducers: state.userReducer,
    uiReducer: state.uiReducer
  }
}
export default connect(mapStateToProps)(New);
