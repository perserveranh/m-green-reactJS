import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron, Card, Button, CardTitle, CardText, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import './../../css/classify.css';
import { strings, Header, Footer } from '../../components';

class AboutMgreen extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}>
                    <span className="vc_empty_space_inner"></span>
                </div>
                <div className="title-value">
                    <h2 className=" font-weight-bold">ĐỔI RÁC TÁI CHẾ LẤY QUÀ BẰNG ỨNG DỤNG MOBILE APP 4.0 – mGreen</h2>
                </div>
                <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}>
                    <span className="vc_empty_space_inner"></span>
                </div>
                <Row>
                    <Col xs="12">
                        <Jumbotron>
                            <h3 className="display-3 font-size-18 m-green text-center" >mGreen là gì !</h3>
                            <p className="lead text-center"> mGreen - Giải pháp Ứng dụng Công nghệ 4.0 khuyến khích phân loại rác tại nguồn để bảo vệ môi trường .</p>
                            <hr className="my-2 " />
                            <p className="text-center">Dự án mGreen nằm trong khuôn khổ chương trình “Vì Một Việt Nam Xanh” do Trung Ương Đoàn phát động, giao cho Doanh nghiệp xã hội mGreen là Đơn vị triển khai.</p>
                            <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}>
                                <span className="vc_empty_space_inner"></span>
                            </div>
                            <p className="lead">
                                <ListGroup>
                                    <ListGroupItem active>
                                        <ListGroupItemHeading className="text-center">Giải pháp gồm 2 Mobile App:  mGreen & mGreenCollector </ListGroupItemHeading>

                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <ListGroupItemText className="text-center">
                                            App mGreen là ứng dụng gọi thu gom rác tái chế và tích điểm tặng quà.
          </ListGroupItemText>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <ListGroupItemText className="text-center">
                                            App mGreenCollector là ứng dụng nhận yêu cầu thu gom dành cho người thu gom rác tái chế .
          </ListGroupItemText>
                                    </ListGroupItem>
                                </ListGroup>
                            </p>
                        </Jumbotron>
                    </Col>
                    <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}>
                        <span className="vc_empty_space_inner"></span>
                    </div>
                    <Row>
                        <Col sm="6">
                            <Card body inverse color="success">
                                <CardTitle>Đối với các hộ dân, dự án thực hiện</CardTitle>
                                <CardText>Tổ chức hoạt động tuyên truyền nâng cao nhận thức về việc phân loại rác tại gia đình, biến chuyển từ Ý thức đến Hành động.</CardText>
                                <CardText>Phát miễn phí sọt, túi đựng rác tái chế cho cư dân.</CardText>
                                <CardText>Cung cấp cho các hộ dân/ cơ quan ứng dụng mobile mGreen để gọi người thu gom. Ứng dụng được tích hợp tính năng tích điểm, đổi quà để khuyến khích phân loại rác.</CardText>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body inverse color="success" >
                                <CardTitle>Đối với đơn vị thu gom, dự án hỗ trợ các việc sau</CardTitle>
                                <CardText>Cung cấp ứng dụng (mobile App) mGreenCollector để nhận yêu cầu thu gom rác tái chế từ hộ dân.</CardText>
                                <CardText>Cung cấp phương tiện làm việc (đồng phục, cân, túi...) và tạo điều kiện thuận lợi, kết nối và quản lý việc thu gom rác tái chế tại địa bàn.</CardText>
                                <CardText>Dự án cung cấp miễn phí Giải pháp Smart City- Green Building dành cho các Toà nhà, Khu dân cư, Văn phòng, Doanh nghiệp, Cơ quan quản lý và Đơn vị thu gom rác tái chế.
Kinh phí triển khai từ vận động xã hội hoá.</CardText>
                            </Card>
                        </Col>
                    </Row>
                </Row>
                <Footer />
            </React.Fragment>
        );
    }
}

export default AboutMgreen;
