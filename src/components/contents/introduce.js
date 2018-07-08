import React, { Component } from 'react';
import {Container , Row, Col} from 'reactstrap';
import './../../css/introduce.css';
import { connect } from 'react-redux';
import strings from './../LocalizedStrings';
class Introduce extends Component {
  render() {
    return (
      <div className="introduce">
      <Container>
      <div className="vc_empty_space  hidden-xs" style={{height: '70px'}}><span className="vc_empty_space_inner"></span></div>
      <div className="text-center">
      <h2 className="text-theme-green">{strings.introduce}</h2>
      </div>
      <Row>
          <Col xs="12" md="12" sm="12" lg="6">
          <img className="img-introduce" src="http://mgreen.vn/wp-content/uploads/2017/12/greenCity.jpg" alt="greenCity" />
          </Col>
          <Col xs="12" md="12" sm="12" lg="6">
          <div className="vc_empty_space  hidden-xs" style={{height: '20px'}}><span className="vc_empty_space_inner"></span></div>
          <Row className="text-center">
          <Col xs="4" md="4">
          <img src="http://mgreen.vn/wp-content/uploads/2017/11/logoMgreen09A11536Dd5082993Cc799E5Aa01671F1@3x-1.png" alt="logo-m-green" style={{height:'71px',width:'71px'}} />
          </Col>
          <Col xs="4" md="4">
          <img src="http://mgreen.vn/wp-content/uploads/2017/11/145PxHanoiLogoSvg@3x.png" alt="hanoi-logo" style={{height:'71px',width:'71px'}}/>
          </Col>
          <Col xs="4" md="4">
          <img src="http://mgreen.vn/wp-content/uploads/2017/11/soThongTinTruyenthong@3x.png" alt="thong tin truyen hinh" style={{height:'71px',width:'71px'}} />
          </Col>
          </Row>
          <div className="vc_empty_space  hidden-xs" style={{height: '20px'}}><span className="vc_empty_space_inner"></span></div>
          <div className="div-text">
          <p className="p-text">{strings.introduce_1}</p>
          <p className="p-text">{strings.introduce_2}</p>
          <p className="p-text">{strings.introduce_3}</p>
          </div>
          <p className="p-content">{strings.introduce_4}</p>
          </Col>
      </Row>
      </Container>
      <div className="vc_empty_space  hidden-xs" style={{height: '30px'}}><span className="vc_empty_space_inner"></span></div>
      <div>
          <img className="img-introduce2" src="http://mgreen.vn/wp-content/uploads/2017/12/243381545551858B1B617K.jpg" alt="mgreen-content" style={{filter:'brightness(1.5)', cursor: 'pointer', height: '445px', width: '100vw'}}/>
          </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    LangState: state.LangReducers
  }
}
export default connect(mapStateToProps)(Introduce);
