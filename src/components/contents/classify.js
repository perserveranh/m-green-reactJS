import React, { Component } from 'react';
import {Container , Col , Row} from 'reactstrap';
import './../../css/classify.css';
import { connect } from 'react-redux';
import strings from './../LocalizedStrings';
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
          <h4 className="text-theme-green text-center py-3 pt-5 "><b>{strings.classify_1}</b></h4>
          <p className="p-text">{strings.classify_2}</p>
        </div>
      </Col>
      <Col xs="12" md="6" lg="4">
      <div className="wpb-wrapper text-center">
          <img src="http://mgreen.vn/wp-content/uploads/2017/11/the_mgreen-icon.png" alt="the-mgreen" style={{width:'222px',height:'222px'}} />
          <h4 className="text-theme-green text-center py-3 pt-5"><b>{strings.classify_3}</b></h4>
          <p className="p-text">{strings.classify_4}</p>
        </div></Col>
      <Col xs="12" md="6" lg="4">
      <div className="wpb-wrapper text-center">
          <img src="http://mgreen.vn/wp-content/uploads/2017/11/uu_dai_icon.png" alt="uu-dai" style={{width:'222px',height:'222px'}} />
          <h4 className="text-theme-green text-center py-3 pt-5"><b>{strings.classify_5}</b></h4>
          <p className="p-text">{strings.classify_6}</p>
        </div></Col>
      </Row>
      <div className="vc_empty_space  hidden-xs" style={{height: '60px'}}><span className="vc_empty_space_inner"></span></div>
      </Container>
      <div>
      <img className="img-classify" src="http://mgreen.vn/wp-content/uploads/2017/11/leaf_backgroun.png" alt="mgreen-content" style={{ height: '756px', width: '100vw'}}/>
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
export default connect(mapStateToProps)(Classify);
