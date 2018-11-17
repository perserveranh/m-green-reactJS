import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron, Button } from 'reactstrap';
import './../../css/classify.css';
import { connect } from 'react-redux';
import { strings, Header, Footer } from '../../components';

class BirthOfMgreen extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div>
                    <Jumbotron>
                        <h1 className="display-3">Lý do ra đời!</h1>
                        <p className="lead">Rác thải trở thành vấn nạn nhức nhối của quốc gia gây ô nhiễm môi trường do không được phân loại tại nguồn trong khi đó rác tái chế-nguồn tài nguyên vô cùng lớn bị lãng phí & công nghệ 4.0 đang được ứng dụng mạnh mẽ vào mọi mặt của cuộc sống.  Không nằm ngoài xu hướng trên, Founders của dự án đã xây dựng thành công Giải pháp ứng dụng công nghệ 4.0 khuyến khích phân loại rác tại nguồn để bảo vệ môi trường. Tích hợp giải pháp Mobile Coaliton Loyalty Program tạo nên Thẻ tích điểm phân loại rác mGreen trên Mobile.</p>
                        <hr className="my-2" />
                        <p>Rác thải tại Hà nội: 6500 tấn/ ngày, tại Hồ Chí Minh: 8300 tấn/ ngày trong đó 15-18% là rác tái chế, ước tính 2 triệu tấn rác tái chế, phế liệu/ năm . Trong khi đó do chính sách hạn chế nhập khẩu phế liệu của nhà nước, tới 8/2018, có 6.000 container phế liệu chưa được thông quan, các đơn vị tái chế khan hiếm nguồn hàng.</p>
                        <p>Cả nước có trên 100.000 người Scavengers, làm nghề thu gom ve chai , đồng nát,  phế liệu.</p>
                        <p >
                            Hoạt động mua sắm online, Evoucher, ngày càng tăng, Người Việt 8 tháng thay đổi điện thoại 1 lần và 70% là dung Smartphone, Cơ hội để phát triên App In App
        </p>
                        <p >
                            Giao dịch thẻ trực tuyến nội địa tăng 50% (2016-2017).
        </p>
                        <p className="lead">
                            Thị trường Evoucher, Bán lẻ trực tuyến  tăng 35% Doanh thu , TMDT ước tính đạt 10tỷ USD trong 4 năm tới ( Nguồn: Bộ công thương
        </p>
                    </Jumbotron>
                </div>
                <Footer />
            </React.Fragment>

        );
    }
}

export default BirthOfMgreen;
