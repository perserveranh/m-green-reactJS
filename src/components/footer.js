import React, { Component } from 'react';
import {Container,Row,Col} from 'reactstrap';
import './../css/footer.css';
class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <div className="vc_empty_space  hidden-xs" style={{height: '40px'}}><span className="vc_empty_space_inner"></span></div>
        <Container w-75>
        <Row>
        <Col xs="12" md="8" className="py-3 footer-left" >
						<h3 className="text-theme-green pt-3"> Dự án Smart City - mGreen</h3>
						<div className="py-2">
							<p className="p-text"><b>Địa chỉ:</b> 614  Lạc Long Quân - Tây Hồ - Hà Nội</p>
							<p className="p-text"><b>Hotline:</b> 0934 68 66 21</p>
							<p className="p-text"><b>Email:</b> <a href="mailto:thoatran@mgreen.vn" target="_top" className="text-theme-green"> thoatran@mgreen.vn</a></p>
						</div>
        </Col>
        <Col xs="12" md="4" className="py-3 footer-right" >
						<div>
							<img src="http://mgreen.vn/wp-content/uploads/2017/11/logo.png" className="w-75" style={{width:'248px',height:'82px',background:'transparent'}} />
						</div>
						<div className="row py-3">
							<a href="https://www.messenger.com/t/mgreen.thetichdiemphanloairac" className="col-3"><img src="http://mgreen.vn/wp-content/uploads/2017/11/facebookF@3x.png" className="w-100" style={{width:'60px',height:'60px'}}/></a>
							<a href="" className="col-3"><img src="http://mgreen.vn/wp-content/uploads/2017/11/twitterF@3x.png" className="w-100" style={{width:'60px',height:'60px'}} /></a>
							<a href="" className="col-3"><img src="http://mgreen.vn/wp-content/uploads/2017/11/googleplusF@3x.png" className="w-100" style={{width:'60px',height:'60px'}}/></a>
						</div>		
        </Col>
        </Row>
        </Container>
        <div className="facebook-message">
        <div  className="button-message" style={{backgroundColor: 'rgb(40, 167, 69)'}}>
            <span className="chat-mgreen"> <i class="fab fa-facebook-messenger"></i></span>
            <div className="zb-tab-content">
               <a href="https://www.messenger.com/t/mgreen.thetichdiemphanloairac">Chat cùng mGreen</a> 
            </div>
            </div>
            <div className="icon-message">
                <span> <a href="#"><i class="fab fa-facebook-messenger"></i></a></span>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;
