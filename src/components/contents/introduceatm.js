import React, { Component } from 'react';
import {Container, Row, Col,TabPane,TabContent,NavLink,NavItem,Nav} from 'reactstrap';
import './../../css/introduceatm.css';
import classnames from 'classnames';

class IntroduceAtm extends Component {
  constructor(props){
    super(props);
    this.state={
      activeTab: '1'
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="introduceatm">
      <Container>
      <div className="vc_empty_space  hidden-xs" style={{height: '70px'}}><span className="vc_empty_space_inner"></span></div>
      <div className="text-center">
      <h2 className="text-theme-green">Hướng dẫn cài thẻ mGeen</h2>
      </div>
      <Row>
      <Nav tabs>
      <NavItem>
        <NavLink
          className={classnames({ active: this.state.activeTab === '1' })}
          onClick={() => { this.toggle('1'); }}
        >
          Tab1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: this.state.activeTab === '2' })}
          onClick={() => { this.toggle('2'); }}
        >
          Moar Tabs
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={this.state.activeTab}>
      <TabPane tabId="1">
        <Row>
          <Col sm="12">
            <h4>Tab 1 Contents</h4>
          </Col>
        </Row>
      </TabPane>
      <TabPane tabId="2">
        <h1>sadfgh</h1>
      </TabPane>
    </TabContent>
      </Row>
      </Container>
      <div className="vc_empty_space  hidden-xs" style={{height: '70px'}}><span className="vc_empty_space_inner"></span></div>
      </div>
    );
  }
}

export default IntroduceAtm;
