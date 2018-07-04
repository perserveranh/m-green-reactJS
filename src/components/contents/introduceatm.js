import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import './../../css/introduceatm.css';
class IntroduceAtm extends Component {
  render() {
    return (
      <div className="introduceatm">
      <Container>
      <div className="vc_empty_space  hidden-xs" style={{height: '70px'}}><span className="vc_empty_space_inner"></span></div>
      <div className="text-center">
      <h2 className="text-theme-green">Hướng dẫn cài thẻ mGeen</h2>
      </div>
      <Row>
          <Col xs="12" md="6">a</Col>
          <Col xs="12" md="6">b</Col>
      </Row>
      </Container>
      <div className="vc_empty_space  hidden-xs" style={{height: '70px'}}><span className="vc_empty_space_inner"></span></div>
      </div>
    );
  }
}

export default IntroduceAtm;
