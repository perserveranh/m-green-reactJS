import React from "react";
import { Header, Footer, strings } from '../../components';
import { Table } from 'reactstrap';

export const Recycling = () => {
    return (
        <div className="recycling">
            <Header />
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>{strings.name}</th>
                        <th>{strings.address}</th>
                        <th>{strings.lienhe}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Công ty Thu Mua phế liệu tại Hồ Chí Minh Thịnh Phát</td>
                        <td>653 Tô Ngọc Vân , Quận Thủ Đức, TPHCM</td>
                        <td>0972 083 918 – 0907 824 888</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Công ty phế liệu Sài Gòn
</td>
                        <td>Đ/C QUẬN 9 - TPHCM</td>
                        <td>0918125199 -  0918325199</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Nơi tụ tập những người mua ve chai lúc trưa</td>
                        <td>Đường Trần Nhân Tông, quận 5</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Vựa ve chai
</td>
                        <td>123 1A, Quận Bình Tân, Thành Phố Hồ Chí Minh, Việt Nam</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Vựa ve chai</td>
                        <td>ĐƯỜNG TA16, Quận 12, Thành Phố Hồ Chí Minh, Việt Nam</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Thu mua phế liệu Thành Phát</td>
                        <td>15/2, đường số 5, kp3, P. Bình Hưng Hòa, Q. Bình Tân, Tp. HCM</td>
                        <td> 0934 622 949 - 0905 923 632</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Công ty Thu mua phế liệu Quang Thiện</td>
                        <td>520 Lê Trọng Tấn, P.Bình Hưng Hòa, Q. Bình Tân, TP HCM</td>
                        <td> 0908 73 93 05 - 0168 38 33 120</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>CÔNG TY THU MUA PHẾ LIỆU BẢO PHÁT</td>
                        <td>46/21 Khu phố 2, Đường số 18, Phường Bình Hưng Hòa, Quận Bình Tân, Tp Hồ Chí Minh.</td>
                        <td>0937 763 239 (anh Huy) - 0973 661 951 (chị Lan)</td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>CÔNG TY TNHH MTV THƯƠNG MẠI DỊCH VỤ TOÀN CẦU</td>
                        <td>KCN Tân Tạo Phường Tân Tạo ,Bình Chánh, TP. Hồ Chí Minh</td>
                        <td>0902.655.675 - 0985.863.393</td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>Thu mua phế liệu Minh Đức</td>
                        <td>Kho hàng 206/1 Lê Thị Hà, Xã Tân Xuân, huyện Hóc Môn, Tp.HCM </td>
                        <td>0963 712 798 - 0937 600 610</td>
                    </tr>
                    <tr>
                        <th scope="row">11</th>
                        <td> Thu mua Phế liệu Thiên Phát</td>
                        <td>313 Đào Trí – Phú Thuận – Quận 7 – Tp Hồ Chí Minh</td>
                        <td> 0976.671.266 (Mr Thiên) – 0933.378.266 (Mr Sơn)</td>
                    </tr>
                    <tr>
                        <th scope="row">12</th>
                        <td>Công ty TNHH – TM&DV Trường Sơn
</td>
                        <td>ĐC 01: 594 Đường Bình Long, P. Tân Quý, Q. Tân Phú, Tp. Hồ Chí Minh </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">13</th>
                        <td>Công ty TNHH TM DV Phế liệu Phương Trang
</td>
                        <td>ĐC 02: B12/30 Đường Liên  </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">14</th>
                        <td>Thu mua phế liệu 24h
</td>
                        <td>Hẻm 36 Đường 18D Phường Bình Hưng Hòa Quận Bình Tân</td>
                        <td>MR Dương - 0919 771 722 - 0936 999 403</td>
                    </tr>
                    <tr>
                        <th scope="row">15</th>
                        <td>Thu mua phế liệu Mạnh Nhất

</td>
                        <td>Số 225 lê Trọng Tấn, P.Bình Hưng Hòa, Q.Tân Bình, Tphcm</td>
                        <td> 090 1304 700</td>
                    </tr>
                    <tr>
                        <th scope="row">16</th>
                        <td>Công ty thu mua phế liệu Thành Đạt
</td>
                        <td>Nhiều </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">17</th>
                        <td>21
CÔNG TY TNHH XÂY DỰNG THÁO DỠ HUY HOÀNG

</td>
                        <td>268 Quốc lộ 1A, P. Tân Thới Hiệp, Q.12
 </td>
                        <td> 0932121398</td>
                    </tr>
                    <tr>
                        <th scope="row">18</th>
                        <td>Thu mua phế liệu Tín Tú</td>
                        <td>364 Lê Trọng Tấn – P. Bình Hưng Hòa – Q. Bình Tân – TPHCM </td>
                        <td>0989.045.368 – 0932.718.986 ( Mr.Đạt )</td>
                    </tr>
                    <tr>
                        <th scope="row">19</th>
                        <td>Công ty TNHH TM DV Phế liệu Lộc Phú</td>
                        <td>nhiều </td>
                        <td>0937095111</td>
                    </tr>
                    <tr>
                        <th scope="row">20</th>
                        <td>PHẾ LIỆU HƯNG THỊNH PHÁT</td>
                        <td>Nhiều</td>
                        <td>0909.75.22.00 - 0985.394.445 (Mr.Minh)</td>
                    </tr>
                    <tr>
                        <th scope="row">21</th>
                        <td>CÔNG TY TNHH TM DV KIẾN NGỌC PHÁT</td>
                        <td>Kho xưởng: 242/6 Khu phố Đông Chiêu, Phường Tân Đông Hiệp, Dĩ An, Bình </td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
            <Footer />
        </div>
    );
};

export default Recycling;

