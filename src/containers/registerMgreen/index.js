import React, { Component, Fragment } from 'react';
import { Header, Footer, api, strings } from '../../components';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import '../../css/registermgreen.css';
import AccountKit from 'react-facebook-account-kit';
import { DatePicker } from 'antd';

class RegisterMgreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataHomes: [{ id: 1, name: 'abc' }, { id: 2, name: 'efh' }],
            dataCitys: [],
            dataDistricts: [],
            dataWards: [],
            name: '',
            floor: '',
            rooms: '',
            address: '',
            male: false,
            female: false,
            email: '',
            phone: '',
            birth: '2018-04-09T10:10:11.000Z',

        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    async changePhone(response) {
        if (response) {
            let token = response.code
            const phone = await api.dataService.changePhoneNumber(token)
            if (phone.code = !0) {
                this.setState({
                    phone: phone.data
                })
            }
            else {
                return
            }
        }
    }
    onChange = (date, dateString) => {
        console.log(date, dateString);
    }

    render() {
        const { dataHomes, dataCitys, dataDistricts, dataWards, name, male, female, phone, email, birth, floor, rooms, address } = this.state;
        return (
            <Fragment>
                <Header />
                <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}><span className="vc_empty_space_inner"></span></div>
                <Container>
                    <Row>
                        <Col xs="12" md="5" sm="5">
                            <h2 className="text-center text-register">Đăng ký thẻ mGreen<br /><small>( <b>thẻ tích điểm phân loại rác</b> )</small></h2>
                            <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}><span className="vc_empty_space_inner"></span></div>
                            <Form className="form-register">
                                <FormGroup row>
                                    <Label htmlFor="name" sm={2}><i className="fas fa-user" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <Input type="text" name="name" value={name} onChange={this.handleInputChange} placeholder="Họ và tên" />
                                    </Col>
                                </FormGroup>
                                <hr />

                                <FormGroup row>
                                    <Label for="exampleSelect" sm={4}><b style={{ fontSize: 16, color: 'green' }}>Chọn tòa nhà:</b></Label>
                                    <Col sm={8}>
                                        <CustomInput type="select" id="exampleCustomSelect" name="customHome" required>
                                            <option value="" >Chọn tòa nhà</option>
                                            {dataHomes.map(data => {
                                                return (
                                                    <option key={data.id} value={data.name}>{data.name}</option>);
                                            })}
                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="floor" sm={2}><i class="fas fa-align-center" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <Input type="text" name="floor" value={floor} onChange={this.handleInputChange} placeholder="Tầng (ví dụ: 5)" required />
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="room" sm={2}><i class="fas fa-home" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <Input type="text" name="rooms" value={rooms} onChange={this.handleInputChange} placeholder="Số phòng (ví dụ: 101)" required />
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="phone" sm={2}><i class="fas fa-phone" style={{ fontSize: 26, color: 'green' }}></i></Label>

                                    <Col sm={10}>
                                        <Input type="text" name="phone" value={phone} placeholder="" />
                                        <AccountKit
                                            appId={"1895352837204118"} // Update this!
                                            version="v1.0"
                                            language={"vi_VN"}
                                            onResponse={(resp) => this.changePhone(resp)}
                                            csrf={'15021997'} // Required for security
                                        >
                                            {p =>
                                                <button {...p} className="button-login btn-phone-change" >
                                                    {strings.change}
                                                </button>
                                            }
                                        </AccountKit>
                                    </Col>

                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="address" sm={2}><i className="fas fa-address-card" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <Input type="text" name="address" value={address} onChange={this.handleInputChange} placeholder="Địa chỉ" required />
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="address" sm={2}><i className="fas fa-calendar-alt" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <DatePicker onChange={() => this.onChange} placeholder="Chọn ngày sinh" />
                                    </Col>
                                </FormGroup>
                                <hr />

                                <FormGroup row>
                                    <Label htmlFor="sex" sm={2}><i className="fas fa-users" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <FormGroup check>

                                            <Label check>
                                                <Input type="radio" name="male" />{' '}
                                                Nam
              </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="female" />{' '}
                                                Nữ
              </Label>
                                        </FormGroup>


                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="email" sm={2}><i className="fas fa-envelope" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <Input type="email" name="email" value={email} onChange={this.handleInputChange} placeholder="Email" required />
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="exampleSelect" sm={4}><b style={{ fontSize: 16, color: 'green' }}>Tỉnh thành phố:</b></Label>
                                    <Col sm={8}>
                                        <CustomInput type="select" id="exampleCustomSelect" name="customCity" required>
                                            <option value="">Chọn tỉnh thành phố</option>
                                            {dataCitys.map(data => {
                                                return <option key={data.id} value={data.name}>{data.name}</option>;
                                            })}

                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="exampleSelect" sm={4}><b style={{ fontSize: 16, color: 'green' }}>Quận huyện thị xã:</b></Label>
                                    <Col sm={8}>
                                        <CustomInput type="select" id="exampleCustomSelect" name="customDistrict" required>
                                            <option value="">Chọn quận huyện</option>
                                            {dataDistricts.map(data => {
                                                return <option key={data.id} value={data.name}>{data.name}</option>;
                                            })}

                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="exampleSelect" sm={4}><b style={{ fontSize: 16, color: 'green' }}>Xã phường:</b></Label>
                                    <Col sm={8}>
                                        <CustomInput type="select" id="exampleCustomSelect" name="customWards" required>
                                            <option value="">Chọn xã phường</option>
                                            {dataWards.map(data => {
                                                return <option key={data.id} value={data.name}>{data.name}</option>;
                                            })}
                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                <hr />


                                <Button className="btn-register btn-left">Cập nhật</Button>



                                <Button className="btn-register btn-right">Đăng kí nhận sọt rác</Button>


                            </Form>

                        </Col>
                        <Col xs="12" md="5" sm="5">
                            <img src="/bg.png" alt="bg-mgreen" className="img-register-mgreen text-center" />
                        </Col>
                    </Row>

                </Container>
                <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}><span className="vc_empty_space_inner"></span></div>
                <Footer />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        uiReducers: state.uiReducers
    }
}
export default connect(mapStateToProps)(RegisterMgreen);
