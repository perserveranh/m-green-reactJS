import React, { Component } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
} from 'reactstrap';
import './../../css/classify.css';
import { connect } from 'react-redux';
import { strings, Header, Footer } from '../../components';

class MissionVision extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}>
                    <span className="vc_empty_space_inner"></span>
                </div>
                <div className="title-value">
                    <h2 className=" font-weight-bold">Sứ mệnh</h2>
                </div>
                <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}>
                    <span className="vc_empty_space_inner"></span>
                </div>
                <CardGroup>
                    <Card>
                        <CardBody>
                            <CardTitle className="mision-title">Cung cấp giải pháp Mobile App hoàn chỉnh khuyến khích việc phân loại rác tại nguồn: App mGreen và App mGreen Collector</CardTitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle className="mision-title">Cung cấp giải pháp công nghệ số quản lý hoạt động thu gom, thu mua phế liệu, rác tái chế cho Ban quản lý nhà, cho Doanh nghiệp và Chính quyền.</CardTitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle className="mision-title">Doanh nghiệp xã hội mGreen đóng vai trò chủ động trong việc Tìm kiếm, hợp tác, kết nối các nguồn lực thực hiện Trách nhiệm xã hội CSR, vì Sự phát triển bền vững và Nền kinh tế tuần hoàn Circular Economy.</CardTitle>
                        </CardBody>
                    </Card>
                </CardGroup>
                <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}>
                    <span className="vc_empty_space_inner"></span>
                </div>
                <div className="title-value">
                    <h2 className=" font-weight-bold">Tầm nhìn</h2>
                </div>
                <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}>
                    <span className="vc_empty_space_inner"></span>
                </div>
                <CardGroup>
                    <Card>
                        <CardBody>
                            <CardTitle className="mision-title"> mGreen trở thành Doanh nghiệp xã hội đứng đầu về giải pháp ứng dụng công nghệ số 4.0 tạo dựng thói quen văn minh: Phân loại rác tại nguồn trên cả nước Việt Nam.</CardTitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <CardTitle className="mision-title">Góp phần xây dựng Hệ sinh thái bền vững mGreen – Liên minh của Chính phủ- Doanh nghiệp- Xã hội, dựa trên nền tảng ứng dụng Mobile Loyalty App, IoT tạo nên môi trường sống và làm việc văn minh, lành mạnh. Vì một Việt Nam Xanh!</CardTitle>
                        </CardBody>
                    </Card>

                </CardGroup>
                <Footer />
            </React.Fragment>

        );
    }
}

export default MissionVision;
