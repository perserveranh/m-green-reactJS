import React, { Component } from 'react';
import {Container,Row,Col} from 'reactstrap';
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
        <Row>
        <Col xs="12" md="6"></Col>
        <Col xs="12" md="6"></Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
