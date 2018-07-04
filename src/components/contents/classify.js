import React, { Component } from 'react';
import {Container , Col , Row} from 'reactstrap';
class Classify extends Component {
  render() {
    return (
     <div className="classify">
     <div className="vc_empty_space  hidden-xs" style={{height: '60px'}}><span className="vc_empty_space_inner"></span></div>
      <Container>
      <Row>
      <Col xs="12" md="6" lg="4">
        <div className="wpb-wrapper text-center">
          <img src="http://mgreen.vn/wp-content/uploads/2017/11/phan_loai_rac_icon.png" alt="phan-loai-rac" style={{width:'222px',height:'222px'}} />
          <h4 class="text-theme-green text-center py-3 pt-5 "><b>Phân loại rác tái chế</b></h4>
          <p>Phân loại và thu gom rác tái chế</p>
        </div>
      </Col>
      <Col xs="12" md="6" lg="4">
      <div className="wpb-wrapper text-center">
          <img src="http://mgreen.vn/wp-content/uploads/2017/11/the_mgreen-icon.png" alt="the-mgreen" style={{width:'222px',height:'222px'}} />
          <h4 class="text-theme-green text-center py-3 pt-5"><b>Thẻ mGreen</b></h4>
          <p>Thẻ mGreen được dùng để tích điểm</p>
        </div></Col>
      <Col xs="12" md="6" lg="4">
      <div className="wpb-wrapper text-center">
          <img src="http://mgreen.vn/wp-content/uploads/2017/11/uu_dai_icon.png" alt="uu-dai" style={{width:'222px',height:'222px'}} />
          <h4 class="text-theme-green text-center py-3 pt-5"><b>Ưu đãi, quà tặng</b></h4>
          <p>Người dùng được tích điểm, tặng quà</p>
        </div></Col>
      </Row>
      <div className="vc_empty_space  hidden-xs" style={{height: '60px'}}><span className="vc_empty_space_inner"></span></div>
      </Container>
      <div>
      <img src="http://mgreen.vn/wp-content/uploads/2017/11/leaf_backgroun.png" alt="mgreen-content" style={{ height: '756px', width: '100vw'}}/>
      </div>
     </div>
    );
  }
}

export default Classify;
