import React, { Component, Fragment } from 'react';
import { Header, Footer, api, strings } from '../../components';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import '../../css/registermgreen.css';
import AccountKit from 'react-facebook-account-kit';
import { DatePicker } from 'antd';
import moment from 'moment';

class RegisterMgreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata: [],
            listHome: [],
            home: { id: 0, name: 'home' },
            listProvince: api.dataService.getListProvinces(),
            province: { id: 0, name: strings.yourprovince },
            listDistrict: [],
            district: { id: 0, name: strings.yourdistrict },
            listWard: [],
            ward: { id: 0, name: strings.yourward },
            male: true,
            female: false,
            birth: '2018-04-09T10:10:11.000Z',
            userName: '',
            mail: '',
            phone: '',
            address: '',
            floor: '',
            rooms: '',
            provinceAlert: { display: 'none' },
            districtAlert: { display: 'none' }

        };

        this.handleInputChange = this.handleInputChange.bind(this);

    }
    componentDidMount() {
        // this.getListmember();
        this.getDefaultData();
    }

    componentWillReceiveProps(nextProps) {
        this.getDefaultData(nextProps)
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

    async upDateUserInfo() {
        if (this.state.userName === '') return api.api.showMessage('vui long nhap ten')
        let gender = ''
        if (this.state.female) { gender = 2 }
        if (this.state.male) { gender = 1 }
        const update = await api.dataService.updateUserInfo(this.state.userName, this.state.mail, this.state.phone, gender, this.state.birth, this.state.address, this.state.avatar, this.state.province.id, this.state.district.id, this.state.ward.id)
        if (update.code) return api.api.showMessage('hahahaha')
        api.setUserInfo(Object.assign({}, this.props.userState.user,
            {
                name: this.state.userName,
                email: this.state.mail,
                gender,
                birth: this.state.birth,
                address: this.state.address,
                province: this.state.province.id,
                district: this.state.district.id,
                ward: this.state.ward.id,
                avatar: this.state.avatar
            }))
        api.api.showMessage(strings.updatecardSuccess)
    }

    onSelectProvince(province) {
        let listDistrict = api.dataService.getListDistricts(province.id)
        this.setState({
            province,
            listDistrict,
        })
    }
    onSelectDistrict(district) {
        if (district.id) {
            let listWard = api.dataService.getListWards(district.id)
            console.log(listWard);
            this.setState({
                district,
                listWard,
                districtAlert: { display: 'none' }
            })
        }
        else {
            this.setState({
                districtAlert: { display: 'block' }
            })
        }
    }
    async getDefaultData(nextProps) {

        let province = this.state.listProvince.find(p => p.id == (nextProps ? nextProps.userReducer.user.province : this.props.userReducer.user.province))
        if (province) {
            let listDistrict = api.dataService.getListDistricts(province.id)
            this.setState({
                province,
                listDistrict,
            })
            let district = listDistrict.find(d => d.id == (nextProps ? nextProps.userReducer.user.district : this.props.userReducer.user.district))
            if (district) {
                let listWard = api.dataService.getListWards(district.id)
                this.setState({
                    district,
                    listWard,
                })
                let ward = listWard.find(d => d.id == (nextProps ? nextProps.userReducer.user.ward : this.props.userReducer.user.ward))
                if (ward) {
                    this.setState({
                        ward
                    })
                }

            }

        }


        await this.setState({
            birth: this.props.userReducer.user.birth == null ? '' : (nextProps ? nextProps.userReducer.user.birth : this.props.userReducer.user.birth),
            userName: nextProps ? nextProps.userReducer.user.name : this.props.userReducer.user.name,
            mail: nextProps ? nextProps.userReducer.user.email : this.props.userReducer.user.email,
            phone: this.props.userReducer.user.phone == null ? '' : (nextProps ? nextProps.userReducer.user.phone : this.props.userReducer.user.phone),
            address: this.props.userReducer.user.address == null ? '' : (nextProps ? nextProps.userReducer.user.address : this.props.userReducer.user.address),
            male: (nextProps ? nextProps.userReducer.user.gender == 1 : null) || this.props.userReducer.user.gender == 1 ? true : false,
            female: (nextProps ? nextProps.userReducer.user.gender == 2 : null) || this.props.userReducer.user.gender == 2 ? true : false,
            avatar: nextProps ? nextProps.userReducer.user.avatar : this.props.userReducer.user.avatar,
        })
    }

    render() {
        const { address, female, mail, male, phone, rooms, userName, floor, listHome, listDistrict, listProvince, listWard } = this.state;
        return (
            <Fragment>
                <Header />
                <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}><span className="vc_empty_space_inner"></span></div>
                <Container>
                    <Row>
                        <Col xs="12" md="6" sm="6">
                            <h2 className="text-center text-register">Đăng ký thẻ mGreen<br /><small>( <b>thẻ tích điểm phân loại rác</b> )</small></h2>
                            <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}><span className="vc_empty_space_inner"></span></div>
                            <Form className="form-register">
                                <FormGroup row>
                                    <Label htmlFor="name" sm={2}><i className="fas fa-user" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <Input type="text" name="userName" value={userName} onChange={this.handleInputChange} placeholder={strings.username} required />
                                    </Col>
                                </FormGroup>
                                <hr />

                                <FormGroup row>
                                    <Label for="exampleSelect" sm={4}><b style={{ fontSize: 16, color: 'green' }}>{strings.home}:</b></Label>
                                    <Col sm={8}>
                                        <CustomInput type="select" id="exampleCustomSelect" name="customHome" >
                                            <option value="" >{strings.home}</option>
                                            {listHome.map(data => {
                                                return (
                                                    <option key={data.id} value={data.name}>{data.name}</option>);
                                            })}
                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="floor" sm={2}><i className="fas fa-align-center" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <Input type="text" name="floor" value={floor} onChange={this.handleInputChange} placeholder={strings.floor} required />
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="room" sm={2}><i className="fas fa-home" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <Input type="text" name="rooms" value={rooms} onChange={this.handleInputChange} placeholder={strings.rooms} required />
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="phone" sm={2}><i className="fas fa-phone" style={{ fontSize: 26, color: 'green' }}></i></Label>

                                    <Col sm={10}>
                                        <Input type="text" name="phone" onChange={this.handleInputChange} value={phone} placeholder={strings.inputPhonenum} />
                                        <AccountKit
                                            appId={"979105742271154"} // Update this!
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
                                        <Input type="text" name="address" value={address} onChange={this.handleInputChange} placeholder={strings.address} required />
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="address" sm={2}><i className="fas fa-calendar-alt" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <DatePicker onChange={(date) => { date ? this.setState({ birth: date.toDate() }) : null }} selected={this.state.birth ? moment(this.state.birth) : null} placeholder={strings.dateBirth} />
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="sex" sm={2}><i className="fas fa-users" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <FormGroup check inline>

                                            <Label check>
                                                <Input type="radio" inline onClick={() => { this.setState({ male: true, female: false }) }} checked={male} name="sex" />{' '}
                                                {strings.man}
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Label check>
                                                <Input type="radio" inline onClick={() => { this.setState({ female: true, male: false }) }} checked={female} name="sex" />{' '}
                                                {strings.women}
                                            </Label>
                                        </FormGroup>

                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="email" sm={2}><i className="fas fa-envelope" style={{ fontSize: 26, color: 'green' }}></i></Label>
                                    <Col sm={10}>
                                        <Input type="email" name="mail" value={mail} onChange={this.handleInputChange} placeholder="Email" required />
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="exampleSelect" sm={4}><b style={{ fontSize: 16, color: 'green' }}>{strings.province}:</b></Label>
                                    <Col sm={8}>
                                        <CustomInput
                                            type="select"
                                            onChange={(val) => { this.onSelectProvince(val); console.log(val.nativeEvent) }}
                                            id="exampleCustomSelect" name="customCity" required>
                                            <option value="">{strings.yourprovince}</option>
                                            {listProvince.map(data => {
                                                return <option key={data.id} value={data.name}>{data.name}</option>;
                                            })}

                                        </CustomInput>
                                    </Col>
                                    <p style={this.state.provinceAlert}>* vui long</p>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="exampleSelect" sm={4}><b style={{ fontSize: 16, color: 'green' }}>{strings.district}:</b></Label>
                                    <Col sm={8}>
                                        <CustomInput
                                            type="select"
                                            id="exampleCustomSelect"
                                            name="customDistrict" required
                                            onChange={(val) => { this.onSelectDistrict(val) }}
                                        >
                                            <option value="">{strings.yourdistrict}</option>
                                            {listDistrict.map(data => {
                                                return <option key={data.id} value={data.name}>{data.name}</option>;
                                            })}

                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                <hr />
                                <FormGroup row>
                                    <Label htmlFor="exampleSelect" sm={4}><b style={{ fontSize: 16, color: 'green' }}>{strings.ward}:</b></Label>
                                    <Col sm={8}>
                                        <CustomInput
                                            type="select"
                                            id="exampleCustomSelect"
                                            onChange={(val) => { this.setState({ ward: val }) }}
                                            name="customWards" required>
                                            <option value="">{strings.yourward}</option>
                                            {listWard.map(data => {
                                                return <option key={data.id} value={data.name}>{data.name}</option>;
                                            })}
                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                <hr />
                                <p></p>

                                <Button className="btn-register btn-left" onClick={() => { this.upDateUserInfo() }}>{strings.updateCard}</Button>



                                <Button className="btn-register btn-right">Đăng kí nhận sọt rác</Button>


                            </Form>

                        </Col>
                        <Col xs="12" md="6" sm="6">
                            <img src="/bg.png" alt="bg-mgreen" className="img-register-mgreen" />
                            <div className="vc_empty_space  hidden-xs" style={{ height: '90px' }}><span className="vc_empty_space_inner"></span></div>
                            <img src="http://mgreen.vn/wp-content/uploads/2017/11/the_mgreen-icon.png" className="img-register-mgreen" alt="the tich diem mgreen" />
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
        uiReducers: state.uiReducers,
        userReducer: state.userReducer,
        LangReducers: state.LangReducers,
        cateState: state.cateState
    }
}
export default connect(mapStateToProps)(RegisterMgreen);
