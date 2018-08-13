import React, { Component } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button
} from 'reactstrap';
import '../../css/header.css';
import { Link } from 'react-router-dom';
import { strings, api } from '../../components';
import { connect } from 'react-redux';
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Icon } from 'antd';
import AccountKit from 'react-facebook-account-kit';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false,
      modalLogin: false,
      visible: false,
      popoverOpen: false
    }

  }
  handleCancel() {
    this.setState({
      modalSignup: false,
      modalLogin: false,
    });
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  toggleLogin() {
    this.setState({
      modalLogin: !this.state.modalLogin,
      isOpen: !this.state.isOpen,
    });
  }
  togglePopover = () => {
    console.log('asdfgh')
    this.setState = {
      popoverOpen: !this.state.popoverOpen
    }
  }
  handleLogin() {
    this.setState({
      modalSignup: false,
      modalLogin: false
    });
    this.props.dispatch({ type: "SHOW_MESSAGE", message: "Thành Công !" });
  }
  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
      isOpen: !this.state.isOpen
    });
  }
  handleScroll(event) {
    event.preventDefault();
    window.scroll({
      top: 4000,
      left: 0,
      behavior: 'smooth'
    })
  }
  handleChangeVi = () => {
    this.props.dispatch({ type: "SET_LANGUAGE", language: 'vi' });
  }
  handleChangeEn = () => {
    this.props.dispatch({ type: 'SET_LANGUAGE', language: 'en' });
  }

  async checkStatusLogin() {
    const token = localStorage.getItem("RFTK")
    if (token) {
      const result = await api.dataService.login('token', token)
      if (result.code !== 0) return api.api.showMessage(result.msg)
      localStorage.setItem("RFTK", result.token.token)
      api.api.setUserToken(result.token)
      api.api.setUserInfo(result.user)
      api.api.setLitMember(result.memberCards)
      api.api.setCate(result.categories)
    }
  }

  UNSAFE_componentWillMount() {
    this.checkStatusLogin()
  }
  componentDidMount() {
    const token = localStorage.getItem('RFTK')
    // window.addEventListener('scroll', this.handleScroll.bind(this));
    if (!token) {
      this.getCategoryNotSigin()
    }

  }


  // google
  async loginWithGoogle(token) {
    console.log(token);
    const result = await api.dataService.login('gg', token)
    if (result.code !== 0) return api.api.showMessage(result.msg)
    this.processLoginResult(result);

  }

  // phone
  async loginViaAccountkit(response) {
    let token = response.code
    const result = await api.dataService.login('phone', token)
    if (result.code !== 0) return api.api.showMessage(result.msg)
    this.processLoginResult(result)
  }

  // facebook
  async loginViaFacebook(response) {
    let token = response.accessToken
    const result = await api.dataService.login('fb', token)
    if (result.code !== 0) return api.api.showMessage(result.msg)
    this.processLoginResult(result)
    console.log('dat', response)
  }
  logout() {
    localStorage.removeItem("RFTK")
    window.location.href = '/'
  }
  async getCategoryNotSigin() {
    const result = await api.dataService.getCategory()
    if (result.code === 0) api.api.setCate(result.categories)
  }

  processLoginResult(result) {
    api.api.setCate(result.categories)
    localStorage.setItem("RFTK", result.token.token)
    api.api.setUserToken(result.token)
    api.api.setUserInfo(result.user)
    api.api.setLitMember(result.memberCards)
    window.location.reload()

  }

  render() {
    console.log('abc', this.props.userReducer.user);
    console.log('avatar', this.props.userReducer.user.avatar);
    // const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle.bind(this)}>&times;</button>;
    return (
      <div className="header" id="header">
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle.bind(this)}
          className={this.props.className}
        >
          <ModalHeader >DOWNLOAD</ModalHeader>
          <ModalBody>
            <a href="https://play.google.com/store/apps/details?id=com.vn.mgreen">
              <img className="img-modal" src="http://mgreen.vn/wp-content/uploads/2017/12/android@3x.png" alt="chplay" />
            </a>
            <a href="https://itunes.apple.com/vn/app/mgreen-thu-gom-r%C3%A1c/id1325493985?l=vi&mt=8">
              <img className="img-modal" src="http://mgreen.vn/wp-content/uploads/2017/12/apple@3x.png" alt="appstore" />
            </a>
          </ModalBody>

        </Modal >
        <div className="modal-login">
          <Modal
            isOpen={this.state.modalLogin}
            toggle={this.toggleLogin.bind(this)}
            className={this.props.className}

          >
            <ModalHeader>
              <span className="text-center">{strings.nav_3}</span>
            </ModalHeader>
            <ModalBody>
              <a className="btn-facebook">
                <span className="icon-container">
                  <i className="fab fa-facebook-f" />
                </span>
                <FacebookLogin
                  className="text-container-facebook"
                  appId="1895352837204118"
                  autoLoad={false}
                  textButton={strings.loginFacebook}
                  fields="name,email,picture"
                  callback={(res) => { this.loginViaFacebook(res) }}
                />
              </a>
              <a className="btn-google">
                <span className="icon-container-google">
                  <i className="fab fa-google-plus-g" />
                </span>
                <GoogleLogin
                  className="text-container-google"
                  clientId="544010331601-69oe16u855fqosv9tpbmbcn3285rnrk2.apps.googleusercontent.com"
                  buttonText={strings.loginGoogle}
                  onSuccess={(responseGoogle) => { this.loginWithGoogle(responseGoogle.accessToken) }}
                  onFailure={(responseGoogle) => { }}
                />
              </a>
              <div className="signup-or-separator">
                <span className="h6 signup-or-separator--text">or</span>
                <hr />
              </div>
              <a className="btn-google btn-accountkit">
                <span className="icon-container-google">
                  <i class="fas fa-mobile"></i>
                </span>
                <AccountKit
                  appId={"1895352837204118"} // Update this!
                  version="v1.0"
                  language={"vi_VN"}
                  onResponse={(resp) => this.loginViaAccountkit(resp)}
                  csrf={'15021997'} // Required for security
                >
                  {p => <span {...p} className="p-accountkit">
                    {strings.loginMobile}
                  </span>

                  }
                </AccountKit>
              </a>
            </ModalBody>
          </Modal>
        </div>
        <div>
          <div className="mgreen-banding">
            <Link to="/" className="mgreen-logo" rel="home" itemProp="url">
              <img
                style={{ width: '66px', height: '60px' }}
                src="http://mgreen.vn/wp-content/uploads/2017/11/logoMgreen09A11536Dd5082993Cc799E5Aa01671F1@3x.png"
                alt="mGreen" itemProp="logo" className="mgreen-logo-link">
              </img>
            </Link>
          </div>
          <nav className="mgreen-navigation">
            <div className="toggle-bar"><span></span></div>
            <div className="mgreen-menu">
              <ul>
                <li><Link to="/mgreen">{strings.nav_1}</Link></li>
                {/* <li><Link to="/category/nha-tai-tro/">{strings.nav_2}</Link></li> */}

                <li><Link to="/category/tin-tuc">{strings.nav_5}</Link></li>
                <li><Link to="#contact" onClick={this.handleScroll.bind(this)}>{strings.nav_6}</Link></li>
                <li ><Link to="/endow"     >{strings.nav_4}</Link></li>
                <li ><Link to="#" className="download" >{strings.nav_12} &nbsp; <i className="fas fa-angle-down"></i></Link>
                  <ul className="sub-menu">
                    <li><Link to="/sponsor">{strings.nav_12}</Link></li>
                    <li><Link to="/volunteer">{strings.nav_13}</Link></li>
                    <li><Link to="/collectormgreen">{strings.nav_14}</Link></li>
                  </ul>
                </li>

                <li>

                  {!this.props.userReducer.user.avatar ? <Link to="#" onClick={this.toggleLogin.bind(this)} >
                    <i className="fas fa-user-alt mr-6 " />{this.props.userReducer.user.name === '' ? strings.nav_3 : this.props.userReducer.user.name}
                  </Link> :
                    <li ><Link to="#" > <img src={this.props.userReducer.user.avatar} className="mr-6" style={{ width: 28, borderRadius: 25, height: 'auto' }} /> {this.props.userReducer.user.name === '' ? strings.nav_3 : this.props.userReducer.user.name} </Link>
                      <ul className="sub-menu">
                        <li><Link to="/register" > <i className="fas fa-edit mr-6"></i> {strings.updateCard}</Link></li>
                        <li><Link to="#" onClick={this.logout.bind(this)} > <i className="fas fa-sign-out-alt mr-6"></i> {strings.logout}</Link></li>
                      </ul>
                    </li>

                  }
                </li>
                <li>
                  <a onClick={this.handleChangeVi.bind(this)}>
                    <img title="tiếng việt" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFsSURBVHjaYvzPgAD/UNlYEUAAmuTYAAAQhAEYqF/zFbe50RZ1cMmS9TLi0pJLRjZohAMTGFUN9HdnHgEE1sDw//+Tp0ClINW/f4NI9d////3+f+b3/1+////+9f/XL6A4o6ws0AaAAGIBm/0fRTVQ2v3Pf97f/4/9Aqv+DdHA8Ps3UANAALEAMSNQNdDGP3+ALvnf8vv/t9//9X/////7f+uv/4K//iciNABNBwggsJP+/IW4kuH3n//1v/8v+wVSDURmv/57//7/CeokoKFA0wECiAnkpL9/wH4CO+DNr/+VQA1A9PN/w6//j36CVIMRxEkAAQR20m+QpSBXgU0CuSTj9/93v/8v//V/xW+48UBD/zAwAAQQSAMzOMiABoBUswCd8ev/M7A669//OX7///Lr/x+gBlCoAJ0DEEAgDUy//zBISoKNAfoepJNRFmQkyJecfxj4/kDCEIiAigECiPErakTiiWMIAAgwAB4ZUlqMMhQQAAAAAElFTkSuQmCC" alt="tiếng việt" />
                    <span style={{ marginLeft: '0.3em' }}>{strings.nav_8}</span>
                  </a>
                </li>
                <li>
                  <a onClick={this.handleChangeEn.bind(this)}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC" alt="English" title="English" />
                    <span style={{ marginLeft: '0.3em' }}>{strings.nav_9}</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <nav>
            <div className="mgreen-menu">
              <ul>
                <li><Link to="#">{strings.nav_15} </Link> </li><i className="fas fa-angle-double-right"></i>
                <li><Link to="#">{strings.nav_16} </Link> </li> <i className="fas fa-angle-double-right"></i>
                <li><Link to="#" >{strings.nav_17}</Link> </li><i className="fas fa-angle-double-right"></i>
                <li><Link to="/collection-process" className="download">{strings.nav_18}</Link></li>
              </ul>
            </div>
          </nav>
          <div className="menu-mobile">
            <div onClick={this.handleClick.bind(this)}>
              <Icon type="bars" />
            </div>
            <div className={`ht-menu ${!this.state.isOpen ? 'isShow' : ''}`}  >
              <ul>
                <li><Link to="/mgreen">{strings.nav_1}</Link></li>
                <li><Link to="#" onClick={this.toggleLogin.bind(this)}  >{strings.nav_3}</Link></li>
                <li><Link to="/category/nha-tai-tro/">{strings.nav_2}</Link></li>
                <li><Link to="#parnert" onClick={this.handleScroll.bind(this)}>ĐỐI TÁC</Link></li>
                <li ><Link to="/category/du-an/" >{strings.nav_4} &nbsp; <i className="fas fa-angle-down"></i></Link></li>
                <li><Link to="/category/tin-tuc">{strings.nav_5}</Link></li>
                <li><Link to="#contact" onClick={this.handleScroll.bind(this)}>{strings.nav_6}</Link></li><li>
                  <a onClick={this.handleChangeVi.bind(this)}>
                    <img title="tiếng việt" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFsSURBVHjaYvzPgAD/UNlYEUAAmuTYAAAQhAEYqF/zFbe50RZ1cMmS9TLi0pJLRjZohAMTGFUN9HdnHgEE1sDw//+Tp0ClINW/f4NI9d////3+f+b3/1+////+9f/XL6A4o6ws0AaAAGIBm/0fRTVQ2v3Pf97f/4/9Aqv+DdHA8Ps3UANAALEAMSNQNdDGP3+ALvnf8vv/t9//9X/////7f+uv/4K//iciNABNBwggsJP+/IW4kuH3n//1v/8v+wVSDURmv/57//7/CeokoKFA0wECiAnkpL9/wH4CO+DNr/+VQA1A9PN/w6//j36CVIMRxEkAAQR20m+QpSBXgU0CuSTj9/93v/8v//V/xW+48UBD/zAwAAQQSAMzOMiABoBUswCd8ev/M7A669//OX7///Lr/x+gBlCoAJ0DEEAgDUy//zBISoKNAfoepJNRFmQkyJecfxj4/kDCEIiAigECiPErakTiiWMIAAgwAB4ZUlqMMhQQAAAAAElFTkSuQmCC" alt="tiếng việt" />
                    <span style={{ marginLeft: '0.3em' }}>{strings.nav_8}</span>
                  </a>
                </li>
                <li>
                  <a onClick={this.handleChangeEn.bind(this)}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC" alt="English" title="English" />
                    <span style={{ marginLeft: '0.3em' }}>{strings.nav_9}</span>
                  </a>
                </li>
                <li><Link to="/collection-process" >{strings.nav_18.toUpperCase()}</Link></li>
              </ul>
            </div>
            <Link to="/collection-process">

              <Button outline color="success">Phân loại và thu gom</Button>{' '}
            </Link>

          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    LangState: state.LangReducers,
    uiReducers: state.uiReducers,
    userReducer: state.userReducer
  }
}

export default connect(mapStateToProps)(Header);
