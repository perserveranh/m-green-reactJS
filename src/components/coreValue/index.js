import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './../../css/classify.css';
import { strings, Header, Footer, api } from '../../components';
import { Link, NavLink } from 'react-router-dom'


class CoreValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNews: []
    }
  }
  componentDidMount() {
    this.getNews();
  }

  async getNews() {
    api.api.showLoading();
    const news = await api.dataService.getNews('0', '10');
    console.log('yyy', news)
    api.api.hideLoading();
    if (news.code !== 0) return console.log(news.msg);
    this.setState({
      dataNews: news.data,

    })
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}>
          <span className="vc_empty_space_inner"></span>
        </div>
        {/* <div className="title-value">
          <h2 className=" font-weight-bold">Giá trị cốt lõi</h2>
        </div>
        <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}>
          <span className="vc_empty_space_inner"></span>
        </div> */}
        {/* <Container> */}
        <Row className="coreValue">
          <Col xs="12" sm="3">
            {/* <div className="left"> */}
            <h2 className="title-c">Giới thiệu</h2>
            <ul>
              <li className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}><Link to="/birth-mgreen">{strings.nav_19}</Link></li>
              <li className="active wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}><Link to="#">{strings.nav_20}</Link></li>
              <li className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}><Link to="/mission-vision">{strings.nav_21}</Link></li>
              <li className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}><NavLink to="/corevalue" activeClassName="selected" activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}>{strings.nav_22}</NavLink></li>
              <li className="wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}><Link to="#">{strings.nav_24}</Link></li>
            </ul>
            <p><a href="http://vitamvocviet.vn/">
              <img alt="" src="/Uploads/images/congthuc.jpg" style={{ width: '100%' }} />
            </a></p>

            {/* </div> */}
          </Col>
          <Col sx="12" sm="6">
            <div className="main-content content-gt">
              <h1 >Các giá trị cốt lõi</h1>
              <div className="detail">
                <div style={{ background: '#eee', border: '1px solid #ccc', padding: '5px 10px' }}>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                    <img alt="" src="/image/rrr.jpg" style={{ width: '100%' }} />
                </div>

                <div className="share">
                  <div className="share-detail clearfix" style={{ paddingTop: '20px' }}>
                    <div className="addthis_inline_share_toolbox"></div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sx="12" sm="3">
            <div className="right">
              <div className="newf">
                <h2 className="title-c">Tin nổi bật</h2>
                <ul>
                  {this.state.dataNews.map(p => {
                    return (<li key={p.id}><Link to={`getNewInfo/${p.id}`}>{p.title}</Link></li>)
                  })}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        {/* </Container> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default CoreValue;
