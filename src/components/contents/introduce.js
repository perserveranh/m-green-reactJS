import React, { Component } from 'react';
import {Container , Row, Col} from 'reactstrap';
import './../../css/introduce.css';
class Introduce extends Component {
  render() {
    return (
      <div className="introduce">
      <Container>
      <div className="vc_empty_space  hidden-xs" style={{height: '70px'}}><span className="vc_empty_space_inner"></span></div>
      <div className="text-center">
      <h2 className="text-theme-green">giới thiệu</h2>
      </div>
      <Row>
          <Col xs="12" md="6">
          <img src="http://mgreen.vn/wp-content/uploads/2017/12/greenCity.jpg" alt="greenCity" />
          </Col>
          <Col xs="12" md="6">
          <div className="vc_empty_space  hidden-xs" style={{height: '20px'}}><span className="vc_empty_space_inner"></span></div>
          <Row>
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
          <p>MGreen là dự án xã hội, phi lợi nhuận, nhằm xây dựng thói quen văn minh trong phân loại rác tại gia đình và bảo vệ môi trường</p>
          <p>Dự án được sự chỉ đạo của UBND TP Hà Nội và là một trong ba dự án khởi nghiệp xuất sắc được Sở Thông tin truyền thông Hà Nội trao bằng khen</p>
          <p>Cư dân tại các tòa nhà triển khai dự án được cung cấp MIỄN PHÍ 1 sọt đựng rác tái chế và  1 Thẻ tích điểm cùng ứng dụng gọi người thu gom. Các hộ gia đình thực hiện việc phân loại rác, sử dụng ứng dụng để gọi người thu gom và được tích điểm thưởng. Điểm thưởng có thể đổi được nhiều phần quà có giá trị..</p>
          <p>HÃY CHUNG TAY VÌ THÀNH PHỐ HÀ NỘI THÔNG MINH XANH, SẠCH, ĐẸP</p>
          </Col>
      </Row>
      </Container>
      <div>
          <img src="http://mgreen.vn/wp-content/uploads/2017/12/243381545551858B1B617K.jpg" alt="mgreen-content" style={{filter:'brightness(1.5)', cursor: 'pointer', height: '445px', width: '100vw'}}/>
          </div>
      </div>
    );
  }
}

export default Introduce;
