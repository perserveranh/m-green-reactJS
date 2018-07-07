
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import './../../css/componenttab.css';
import {Row,Col} from 'reactstrap';

class ComponentTab extends React.Component {
    render() {
      return (
          <Tabs className="tabs">
          <div className="vc-empty-space hiden-xs" style={{ height: "30px" }}>
          <span className="vc-empty-space-inner" />
          </div>
          <Row>
          <Col xs="12" md="12" sm="12" lg="6" >

           <div className="iphone-5 m-glare mx-auto">
       <div className="m-body">
        <div className="m-button"></div>
        <div className="m-front-camera"></div>
        <div className="m-top-speaker"></div>
        <div className="m-screen">
        <TabPanel className="tab-panel">
          <img className="img-tabpanel" src="http://mgreen.vn/wp-content/uploads/2018/03/1-169x300.png" alt="Homer Simpson"  />
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
        

          </Col>

          <Col xs="12" md="12" sm="12" lg="6">
          <TabList className="tablist">
          <Tab>
          <span>1</span>
          <p className="p-text-1">DownLoad App mGreen từ AppStore/CH Play</p>
          </Tab>
          <Tab>
          <span>2</span>
          <p className="p-text-2">Gọi thu gom</p>
          </Tab>
          <Tab>
          <span>3</span>
          <p className="p-text-3">Xác nhận thu gom</p>
          </Tab>
          <Tab>
          <span>4</span>
          <p className="p-text-4">Tích điểm, đổi quà, nhận ưu đãi</p>
          </Tab>
          </TabList>
          </Col>
          </Row>
          </Tabs>
      );
    }
  }

  export default ComponentTab;