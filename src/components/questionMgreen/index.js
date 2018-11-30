import React, { Component } from 'react';
import { Container, Alert, Table, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import './../../css/classify.css';
import { strings, Header, Footer } from '../../components';

class QuestionMgreen extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Container>
                    <div className="vc_empty_space  hidden-xs" style={{ height: '20px' }}>
                        <span className="vc_empty_space_inner"></span>
                    </div>


                    <Alert color="success" className="center">
                        Q & A VỀ MGREEN
      </Alert>

                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Câu hỏi</th>
                                <th>Trả lời</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-center">1</th>
                                <td className="text-danger"> Tải App mGreen là đăng ký tham gia được chưa ?</td>
                                <td>Tải App chưa đủ, cần đăng ký thông tin trong Mục đăng ký và cập nhật Gồm 5 trường thông tin bắt buộc: Tên, SĐT, Tòa nhà, Số phòng, Số tầng.</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center">2</th>
                                <td className="text-danger">Tôi đăng ký rồi khi nào triển khai thu gom ?</td>
                                <td>Nếu bạn ở chung cư, tối thiểu 60 hộ/ block sẽ triển khai thu gom. Trung bình đủ 200 hộ dân đăng ký sẽ Kích hoạt hệ thống thu gom. 1 người thu gom phụ trách tối thiểu 200 hộ dân. Nếu không tim thấy toà nhà của bạn, hãy gửi cho mGreen thông tin toà nhà của bạn trong Mục” Không tìm thấy toà nhà”. Sau 7 ngày chúng tôi sẽ đưa vào hệ thống và gửi thông báo đến người dùng .</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center">3</th>
                                <td className="text-danger">Nhà mặt đất điền thông tin như thế nào trên App mGreen nếu phường có 100 hộ dân đăng ký ?</td>
                                <td>- Phòng và tầng yêu cầu cần điền số để hệ thống sắp xếp theo thứ tự từ cao -> thấp, tối ưu vận chuyển cho người thu gom
- Đối với Tuyến đường, tổ dân phố: Ghi là 1 tại phần thông tin phòng & tầng  trong mục Đăng ký hoặc ghi số nhà
& 4 trường thông tin bắt buộc: <br />
                                    - Khi liên hệ UBND phường hoặc tổ dân phố đồng ý và hỗ trợ  triển khai , mGreen sẽ tuyển dụng người thu gom tại khu vực nhà mặt đất.</td>

                            </tr>
                            <tr>
                                <th scope="row" className="text-center">4</th>
                                <td className="text-danger">Một số điện thoại đăng ký được mấy tài khoản/ Mấy thẻ tích điểm PLR mGreen ?</td>
                                <td>1 số điện thoại đăng ký được 1 thẻ tích điểm mGreen .</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center">5</th>
                                <td className="text-danger">Mã hàng xóm khi vào App mGreen nghĩa là gì ?</td>
                                <td>Có mục mời hàng xóm ở Màn hình chính . Nhấp vào Nút mời sẽ liên kết với các liên hệ trong điện thoại và Mạng xã hội của người dùng. Gửi cho bạn bè tin nhắn gồm Link tải App và Mã mời cộng điểm.</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center">6</th>
                                <td className="text-danger">1 điểm đổi được gì  ?</td>
                                <td>-1 mPoint giá trị rất linh hoạt phù hợp nhà tài trợ và đối tác. 90.000 mPoint có thể đổi được 1 vé xem phim CGV 100.000VNĐ hoặc Vé Massage 500.000 VNĐ. <br />
                                    - Trên App mGreenCollector , 1 mPoint=1 VNĐ, Người thu gom cộng bao nhiêu điểm sẽ trả lại bây nhiêu tiền cho mGreen để tích điểm cho cư dân</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center">7</th>
                                <td className="text-danger">1 Kg rác tái chế đổi được gì ?</td>
                                <td>1kg rác tái chế tổng hợp = 300 mPoint, hoặc Tuỳ đối tác thu gom và khu vực triển khai ví dụ tai khu vực Citenco thu gom .
</td>
                            </tr>
                            <tr >
                                <th scope="row" className="text-center">8</th>
                                <td className="text-danger">Tôi có điểm rồi sẽ đổi quà và dùng Ưu đãi trên App như thế nào
 ?</td>
                                <td>Nhấn vào quà/ ưu đãi lây mã => Mã trong mục Quà của bạn => Đưa mã đó cho nhân viên cửa hang/ Đổi quà đối soát => Khi  đối soát thành công, mã đó sẽ trong mục Phiếu nhận quà và nhân viên cửa hang đưa quà cho bạn.
</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center">9</th>
                                <td className="text-danger">Tôi đổi điểm ở những đâu được
 ?</td>
                                <td> 3000 + cửa hàng, công ty, trường học  trên App mGreen , hoăc tại địa điểm đổi quà trong khu vực triển khai. </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center">10</th>
                                <td className="text-danger">Tôi nhờ ngừoi nhận hộ qùa và góp  điểm với hàng xóm đổi quà được không ?</td>
                                <td>- Nhận hộ được nhưng cần nhớ Mã đổi quà/ Ưu đãi   để đưa nhân viên đối soát <br />
                                    - Hệ thống không cho cho , ghép điểm cho nhau vì Mâu thuẫn chinh sách quảng cáo.
</td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-center">11</th>
                                <td className="text-danger">Tại sao tôi không thấy hướng dẫn Cách Phân loại rác , Gọi thu gom, Hướng dẫn dung ưu đãi và Đổi quà trên App
 ?</td>
                                <td>- Chúng tôi đang Update them phiên bản mới  và có trong Menu của App mGreen .
</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}>
                        <span className="vc_empty_space_inner"></span>
                    </div>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Row>
                                <Col xs="4">
                                    <img src="/image/aaa.jpg" style={{ width: '150px', height: '150px' }} alt="mgreen" />
                                </Col>
                                <Col xs="8">
                                    <Form >
                                        <FormGroup row>
                                            <Label for="exampleEmail" className="text-warning" sm={6}>Co-Founder-CEO</Label>
                                            <Col sm={6}>
                                                <p className="mt-1 text-info">Trần Thị Thoa</p>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="exampleEmail" className="text-warning" sm={6}>Mobile</Label>
                                            <Col sm={6}>
                                                <p className="mt-1 text-info">0914 479 185</p>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="exampleEmail" className="text-warning" sm={6}>Email</Label>
                                            <Col sm={6}>
                                                <p className="mt-1 text-info">thoatran@mgreen.vn</p>
                                            </Col>
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </React.Fragment>
        );
    }
}

export default QuestionMgreen;
