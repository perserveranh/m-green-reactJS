import React, { Component } from 'react';
import {Container,Row,Col} from 'reactstrap';
import './../css/footer.css';
import { connect } from 'react-redux';
import strings from './LocalizedStrings';
class Footer extends Component {
  render() {
    return (
      <div className="footer" id="contact">
      <div className="vc_empty_space  hidden-xs" style={{height: '40px'}}><span className="vc_empty_space_inner"></span></div>
        <Container>
        <Row>
        <Col xs="12" md="8" className="py-3 footer-left" >
						<h3 className="text-theme-green pt-3"> {strings.footer_1}</h3>
						<div className="py-2">
							<p className="p-text"><b>Địa chỉ:</b>{strings.footer_2}</p>
							<p className="p-text"><b>Hotline:</b> {strings.footer_3}</p>
							<p className="p-text"><b>Email:</b> <a href="mailto:thoatran@mgreen.vn" target="_top" className="text-theme-green"> {strings.footer_4}</a></p>
						</div>
        </Col>
        <Col xs="12" md="4" className="py-3 footer-right" >
						<div>
							<img src="http://mgreen.vn/wp-content/uploads/2017/11/logo.png" alt="img-mgreen"  style={{width:'248px',height:'82px',background:'transparent'}} />
						</div>
						<div className="row py-3">
							<a href="https://www.messenger.com/t/mgreen.thetichdiemphanloairac" className="col-3"><img src="http://mgreen.vn/wp-content/uploads/2017/11/facebookF@3x.png" className="w-100" style={{width:'60px',height:'60px'}} alt="img-mgreen" /></a>
							<a href="" className="col-3"><img src="http://mgreen.vn/wp-content/uploads/2017/11/twitterF@3x.png" className="w-100" style={{width:'60px',height:'60px'}} alt="img-mgreen"/></a>
							<a href="" className="col-3"><img src="http://mgreen.vn/wp-content/uploads/2017/11/googleplusF@3x.png" className="w-100" style={{width:'60px',height:'60px'}} alt="img-mgreen" /></a>
						</div>		
        </Col>
        </Row>
        </Container>
        <div className="facebook-message">
        <div  className="button-message" style={{backgroundColor: 'rgb(40, 167, 69)'}}>
            <span className="chat-mgreen"> <i className="fab fa-facebook-messenger"></i></span>
            <div className="zb-tab-content">
               <a href="https://www.messenger.com/t/mgreen.thetichdiemphanloairac">{strings.footer_5}</a> 
            </div>
            </div>
            <div className="icon-message">
                <span> <a href=""><i className="fab fa-facebook-messenger"></i></a></span>
            </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    LangState:state.LangReducers
  }
}
export default connect(mapStateToProps)(Footer);