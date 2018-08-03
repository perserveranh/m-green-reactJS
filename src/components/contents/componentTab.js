
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './../../css/componenttab.css';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { strings } from '../../components';
import ScrollAnimation from 'react-animate-on-scroll';

class ComponentTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Tabs className="tabs">
        <div className="vc-empty-space hiden-xs" style={{ height: "30px" }}>
          <span className="vc-empty-space-inner" />
        </div>
        <Row>
          <Col xs="12" md="12" sm="12" lg="6" >
            <ScrollAnimation animateIn='bounceInLeft'
              initiallyVisible={false}
              delay={800}
              animateOnce={true}
            >

              <div className="iphone-5 m-glare mx-auto">
                <div className="m-body">
                  <div className="m-button"></div>
                  <div className="m-front-camera"></div>
                  <div className="m-top-speaker"></div>
                  <div className="m-screen">
                    <TabPanel className="tab-panel">
                      <img className="img-tabpanel" src="http://mgreen.vn/wp-content/uploads/2018/03/1-169x300.png" alt="Homer Simpson" />
                    </TabPanel>
                    <TabPanel className="tab-panel">
                      <img className="img-tabpanel" src="http://mgreen.vn/wp-content/uploads/2017/11/Screenshot_2017-11-03-11-23-59.png" alt="Marge Simpson" />
                    </TabPanel>
                    <TabPanel className="tab-panel">
                      <img className="img-tabpanel" src="http://mgreen.vn/wp-content/uploads/2017/11/Screenshot_2017-11-03-11-26-36.png" alt="Bart Simpson" />
                    </TabPanel>
                    <TabPanel className="tab-panel">
                      <img className="img-tabpanel" src="http://mgreen.vn/wp-content/uploads/2017/11/Screenshot_2017-11-03-11-26-53-1.png" alt="Lisa Simpson" />
                    </TabPanel>
                  </div>
                  <button className="m-home-button"></button>
                </div>
              </div>
            </ScrollAnimation>


          </Col>

          <Col xs="12" md="12" sm="12" lg="6">

            <ScrollAnimation animateIn='bounceInRight'
              initiallyVisible={false}
              delay={1000}
              animateOnce={true}
            >
              <TabList className="tablist">
                <Tab>
                  <span>1</span>
                  <p className="p-text-1">{strings.componenttab_1}</p>
                </Tab>
                <Tab>
                  <span>2</span>
                  <p className="p-text-2">{strings.componenttab_2}</p>
                </Tab>
                <Tab>
                  <span>3</span>
                  <p className="p-text-3">{strings.componenttab_3}</p>
                </Tab>
                <Tab>
                  <span>4</span>
                  <p className="p-text-4">{strings.componenttab_4}</p>
                </Tab>
              </TabList>
            </ScrollAnimation>
          </Col>
        </Row>
      </Tabs>
    );
  }
}
const mapStateToProps = state => {
  return {
    LangState: state.LangReducers
  }
}
export default connect(mapStateToProps)(ComponentTab);