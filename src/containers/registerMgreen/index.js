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

        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('first name:', this.firstName.value);
        this.firstName.value = 'Got ya!';
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
                                        <Input type="text" name="" id="" placeholder="Họ và tên" />
                                    </Col>
                                </FormGroup>
                                <hr />

                                <FormGroup row>
                                    <Label for="exampleSelect" sm={4}><b style={{ fontSize: 16, color: 'green' }}>Chọn tòa nhà:</b></Label>
                                    <Col sm={8}>
                                        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                                            <option value="">Chọn tòa nhà</option>
                                            <option>Value 1</option>
                                            <option>Value 2</option>
                                            <option>Value 3</option>
                                            <option>Value 4</option>
                                            <option>Value 5</option>
                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="floor" sm={2}><i class="fas fa-align-center" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <Input type="text" name="" id="" placeholder="Tầng (ví dụ: 5)" />
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="room" sm={2}><i class="fas fa-home" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <Input type="text" name="" id="" placeholder="Số phòng (ví dụ: 101)" />
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="phone" sm={2}><i class="fas fa-phone" style={{ fontSize: 26, color: 'green' }}></i></Label>

                                    <Col sm={10}>
                                        <Input type="text" name="" id="" placeholder="" />
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
                                        <Input type="text" name="" id="" placeholder="Địa chỉ" />
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
                                                <Input type="radio" name="radio2" />{' '}
                                                Nam
              </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" name="radio2" />{' '}
                                                Nữ
              </Label>
                                        </FormGroup>


                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label for="exampleEmail" sm={2}><i class="fas fa-envelope" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label for="exampleSelect" sm={4}><b style={{ fontSize: 16, color: 'green' }}>Tỉnh thành phố:</b></Label>
                                    <Col sm={8}>
                                        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                                            <option value="">Chọn tỉnh thành phố</option>
                                            <option>Value 1</option>
                                            <option>Value 2</option>

                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label for="exampleSelect" sm={4}><b style={{ fontSize: 16, color: 'green' }}>Quận huyện thị xã:</b></Label>
                                    <Col sm={8}>
                                        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                                            <option value="">Chọn quận huyện</option>
                                            <option>Value 1</option>
                                            <option>Value 2</option>

                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label for="exampleSelect" sm={4}><b style={{ fontSize: 16, color: 'green' }}>Xã phường:</b></Label>
                                    <Col sm={8}>
                                        <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
                                            <option value="">Chọn xã phường</option>
                                            <option>Value 1</option>

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
