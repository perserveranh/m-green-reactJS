import React, { Component } from 'react';
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Form,
  Input} from 'reactstrap';
import './../css/header.css';
import {Link} from 'react-router-dom';
import strings from './LocalizedStrings';
import {connect} from 'react-redux';
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import dataService from '../server/dataService';

class Header extends Component {
 constructor(props){
   super(props);
   this.state={
     isOpen:false,
     modal:false,
     modalSignup: false,
      modalLogin: false,
   }
 }
 handleCancel() {
    this.setState({
      modalSignup: false,
      modalLogin:false
    });
  }
 toggleSignup() {
    this.setState({
      modalLogin: false,
      modalSignup: true
    });
  }
  toggleLogin() {
    this.setState({
      modalSignup: false,
      modalLogin: true
    });
  }
  handleLogin() {
    this.setState({
      modalSignup: false,
      modalLogin: false
    });
    this.props.dispatch({ type: "SHOW_MESSAGE", message: "Thành Công !" });
  }
 handleClick(){
   this.setState({
     isOpen: !this.state.isOpen
   })
 }
 toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleScroll(event){
    event.preventDefault();
    window.scroll({
      top:4000,
      left:0,
      behavior: 'smooth'
    })
  }
  handleChangeVi = () => {
this.props.dispatch({type:"SET_LANGUAGE" , language: 'vi'});
  }
  handleChangeEn = () => {
    this.props.dispatch({type:'SET_LANGUAGE',language: 'en'});
  }
async handleGoogle (res)  {
    let data = dataService.login('gg',res.accessToken);
    // console.log(res) ;
    
  }
  render() {
    const responseGoogle = response => {
      console.log(response);
    };
    const responseFacebook = response => {
      console.log(response);
    };
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle.bind(this)}>&times;</button>;
    return (
      <div className="header" id="header">
      <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader >DOWNLOAD</ModalHeader>
          <ModalBody>
          <a href="https://play.google.com/store/apps/details?id=com.vn.mgreen">
          <img className="img-modal" src="http://mgreen.vn/wp-content/uploads/2017/12/android@3x.png" alt="chplay" />
          </a>
          <a href="https://itunes.apple.com/vn/app/mgreen-thu-gom-r%C3%A1c/id1325493985?l=vi&mt=8">
          <img className="img-modal" src="http://mgreen.vn/wp-content/uploads/2017/12/apple@3x.png" alt="appstore"  />
          </a>
          </ModalBody>
 
        </Modal>
        <div className="modal-signup">
            <Modal
              isOpen={this.state.modalSignup}
              toggle={this.toggleSignup.bind(this)}
              className={this.props.className}

            >
              <ModalHeader>
                <span className="text-center">SIGN UP</span>
              </ModalHeader>
              <ModalBody>
                <a
                  className="btn-facebook"
                  
                >
                  <span className="icon-container">
                    <i className="fab fa-facebook-f" />
                  </span>

                  <FacebookLogin
                    className="text-container-facebook"
                    appId="702693780061912"
                    autoLoad={true}
                    textButton="Sign up with Facebook"
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={responseFacebook}
                  />
                </a>
                <a className="btn-google">
                  <span className="icon-container-google">
                    <i className="fab fa-google-plus-g" />
                  </span>

                  <GoogleLogin
                    className="text-container-google"
                    clientId="544010331601-69oe16u855fqosv9tpbmbcn3285rnrk2.apps.googleusercontent.com"
                    buttonText="Sign up with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                  />
                </a>
                <div className="signup-or-separator">
                  <span className="h6 signup-or-separator--text">or</span>
                  <hr />
                </div>
                <div className="text-center" style={{ color: "#fff" }}>
                  <a className="btn-email">
                    <i className="fas fa-envelope" />
                    Sign up with Email
                  </a>
                </div>
                <div id="tos_outside" className="row-space-top-3">
                  <small>
                    By signing up, I agree to Luxstay's{" "}
                    <a data-popup="true" target="_blank">
                      Terms of service
                    </a>,{" "}
                    <a data-popup="true" target="_blank">
                      Privacy policy
                    </a>,{" "}
                    <a data-popup="true" target="_blank">
                      Cancellation policy
                    </a>, and
                    <a data-popup="true" target="_blank">
                      Copyright policy
                    </a>.
                  </small>
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="signup-footer">
                  <span>Already an homestay member?</span>
                  <a
                    className="modal-link link-to-login-in-signup"
                    data-modal-href="/login_modal"
                    data-modal-type="login"
                    onClick={this.toggleLogin.bind(this)}
                  >
                    Log In
                  </a>
                  <a
                    className="modal-link link-to-login-in-signup"
                    onClick={this.handleCancel.bind(this)}
                  >
                    Cancel
                  </a>
                </div>
              </ModalFooter>
            </Modal>
          </div>
          <div className="modal-login">
            <Modal
              isOpen={this.state.modalLogin}
              toggle={this.toggleLogin.bind(this)}
              className={this.props.className}
              external={externalCloseBtn}   
            >
              <ModalHeader>
                <span className="text-center">LOGIN</span>
              </ModalHeader>
              <ModalBody>
                <a className="btn-facebook">
                  <span className="icon-container">
                    <i className="fab fa-facebook-f" />
                  </span>
                  <FacebookLogin
                    className="text-container-facebook"
                    appId="702693780061912"
                    autoLoad={true}
                    textButton="Login with Facebook"
                    fields="name,email,picture"
                    callback={responseFacebook}
                  />
                </a>
                <a className="btn-google">
                  <span className="icon-container-google">
                    <i className="fab fa-google-plus-g" />
                  </span>
                  <GoogleLogin
                    className="text-container-google"
                    clientId="544010331601-69oe16u855fqosv9tpbmbcn3285rnrk2.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={this.handleGoogle}
                    onFailure={responseGoogle}
                  />
                </a>
                <div className="signup-or-separator">
                  <span className="h6 signup-or-separator--text">or</span>
                  <hr />
                </div>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail" hidden>
                      Email
                    </Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Email"
                    />
                  </FormGroup>{" "}
                  <FormGroup>
                    <Label for="examplePassword" hidden>
                      Password
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      placeholder="Password"
                    />
                  </FormGroup>{" "}
                </Form>

                <div className="text-center" style={{ color: "#fff" }}>
                  <a
                    className="btn-email"
                    onClick={this.handleLogin.bind(this)}
                  >
                    LOGIN{" "}
                  </a>
                </div>
                <div id="tos_outside" className="row-space-top-3">
                  <small>
                    By signing up, I agree to Luxstay's{" "}
                    <a data-popup="true" target="_blank">
                      Terms of service
                    </a>,{" "}
                    <a data-popup="true" target="_blank">
                      Privacy policy
                    </a>,{" "}
                    <a data-popup="true" target="_blank">
                      Cancellation policy
                    </a>, and
                    <a data-popup="true" target="_blank">
                      Copyright policy
                    </a>.
                  </small>
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="signup-footer">
                  <span>Don’t have an account?</span>
                  <a
                    className="modal-link link-to-login-in-signup"
                    data-modal-href="/signup_modal"
                    data-modal-type="signup"
                    onClick={this.handleCancel.bind(this)}
                  >
                    Cancel
                  </a>
                </div>
              </ModalFooter>
            </Modal>
          </div>
      <Container>
        <div className="mgreen-banding">
        <Link to="/" className="mgreen-logo" rel="home" itemProp="url">
        <img 
        style={{width:'66px',height:'60px'}} 
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
            <li><Link to="/category/nha-tai-tro/">{strings.nav_2}</Link></li>
            <li><Link to="#" >{strings.nav_3}</Link>
            <ul className="sub-menu">
            <li><Link to="#" onClick={this.toggleLogin.bind(this)} >{strings.nav_10}</Link></li>
            <li><Link to="#"  onClick={this.toggleSignup.bind(this)}>{strings.nav_11}</Link></li>
            </ul>
            </li>
            <li ><Link to="/category/du-an/" >{strings.nav_4} &nbsp; <i className="fas fa-angle-down"></i></Link>
            <ul className="sub-menu">
              <li><a href="">a</a></li>
              <li><a href="">b</a></li>
              <li><a href="">c</a></li>
            </ul>
            </li>
            <li><Link to="/category/tin-tuc">{strings.nav_5}</Link></li>
            <li><Link to="#contact" onClick={this.handleScroll.bind(this)}>{strings.nav_6}</Link></li>
            <li><Link to="#" className="download" onClick={this.toggle.bind(this)}>{strings.nav_7}</Link></li>
            <li>
            <a onClick={this.handleChangeVi.bind(this)}>
            <img title="tiếng việt" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFsSURBVHjaYvzPgAD/UNlYEUAAmuTYAAAQhAEYqF/zFbe50RZ1cMmS9TLi0pJLRjZohAMTGFUN9HdnHgEE1sDw//+Tp0ClINW/f4NI9d////3+f+b3/1+////+9f/XL6A4o6ws0AaAAGIBm/0fRTVQ2v3Pf97f/4/9Aqv+DdHA8Ps3UANAALEAMSNQNdDGP3+ALvnf8vv/t9//9X/////7f+uv/4K//iciNABNBwggsJP+/IW4kuH3n//1v/8v+wVSDURmv/57//7/CeokoKFA0wECiAnkpL9/wH4CO+DNr/+VQA1A9PN/w6//j36CVIMRxEkAAQR20m+QpSBXgU0CuSTj9/93v/8v//V/xW+48UBD/zAwAAQQSAMzOMiABoBUswCd8ev/M7A669//OX7///Lr/x+gBlCoAJ0DEEAgDUy//zBISoKNAfoepJNRFmQkyJecfxj4/kDCEIiAigECiPErakTiiWMIAAgwAB4ZUlqMMhQQAAAAAElFTkSuQmCC" alt="tiếng việt"/>
            <span style={{marginLeft:'0.3em'}}>{strings.nav_8}</span>
            </a>
            </li>
            <li>
            <a onClick={this.handleChangeEn.bind(this)}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC" alt="English" title="English"/>
            <span style={{marginLeft:'0.3em'}}>{strings.nav_9}</span>
            </a>
            </li>
          </ul>
          </div>
        </nav>
        <div className="menu-mobile">
        <div className="toggle-bar " onClick={this.handleClick.bind(this)}>
        <span></span>
        </div>
        <div className={`ht-menu ${!this.state.isOpen? 'isShow': '' }`}  >
        <ul>
        <li><Link to="/mgreen">{strings.nav_1}</Link></li>
        <li><Link to="/category/nha-tai-tro/">{strings.nav_2}</Link></li>
        <li><Link to="#parnert" onClick={this.handleScroll.bind(this)}>ĐỐI TÁC</Link></li>
        <li ><Link to="/category/du-an/" >{strings.nav_4} &nbsp; <i className="fas fa-angle-down"></i></Link>
     
        </li>
        <li><Link to="/category/tin-tuc">{strings.nav_5}</Link></li>
            <li><Link to="#contact" onClick={this.handleScroll.bind(this)}>{strings.nav_6}</Link></li>
        <li><a href="" className="download">{strings.nav_7}</a></li>
        <li>
        <a onClick={this.handleChangeVi.bind(this)}>
        <img title="tiếng việt" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFsSURBVHjaYvzPgAD/UNlYEUAAmuTYAAAQhAEYqF/zFbe50RZ1cMmS9TLi0pJLRjZohAMTGFUN9HdnHgEE1sDw//+Tp0ClINW/f4NI9d////3+f+b3/1+////+9f/XL6A4o6ws0AaAAGIBm/0fRTVQ2v3Pf97f/4/9Aqv+DdHA8Ps3UANAALEAMSNQNdDGP3+ALvnf8vv/t9//9X/////7f+uv/4K//iciNABNBwggsJP+/IW4kuH3n//1v/8v+wVSDURmv/57//7/CeokoKFA0wECiAnkpL9/wH4CO+DNr/+VQA1A9PN/w6//j36CVIMRxEkAAQR20m+QpSBXgU0CuSTj9/93v/8v//V/xW+48UBD/zAwAAQQSAMzOMiABoBUswCd8ev/M7A669//OX7///Lr/x+gBlCoAJ0DEEAgDUy//zBISoKNAfoepJNRFmQkyJecfxj4/kDCEIiAigECiPErakTiiWMIAAgwAB4ZUlqMMhQQAAAAAElFTkSuQmCC" alt="tiếng việt"/>
        <span style={{marginLeft:'0.3em'}}>{strings.nav_8}</span>
        </a>
        </li>
        <li>
        <a onClick={this.handleChangeEn.bind(this)}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHzSURBVHjaYkxOP8IAB//+Mfz7w8Dwi4HhP5CcJb/n/7evb16/APL/gRFQDiAAw3JuAgAIBEDQ/iswEERjGzBQLEru97ll0g0+3HvqMn1SpqlqGsZMsZsIe0SICA5gt5a/AGIEarCPtFh+6N/ffwxA9OvP/7//QYwff/6fZahmePeB4dNHhi+fGb59Y4zyvHHmCEAAAW3YDzQYaJJ93a+vX79aVf58//69fvEPlpIfnz59+vDhw7t37968efP3b/SXL59OnjwIEEAsDP+YgY53b2b89++/awvLn98MDi2cVxl+/vl6mituCtBghi9f/v/48e/XL86krj9XzwEEEENy8g6gu22rfn78+NGs5Ofr16+ZC58+fvyYwX8rxOxXr169fPny+fPn1//93bJlBUAAsQADZMEBxj9/GBxb2P/9+S/R8u3vzxuyaX8ZHv3j8/YGms3w8ycQARmi2eE37t4ACCDGR4/uSkrKAS35B3TT////wADOgLOBIaXIyjBlwxKAAGKRXjCB0SOEaeu+/y9fMnz4AHQxCP348R/o+l+//sMZQBNLEvif3AcIIMZbty7Ly6t9ZmXl+fXj/38GoHH/UcGfP79//BBiYHjy9+8/oUkNAAHEwt1V/vI/KBY/QSISFqM/GBg+MzB8A6PfYC5EFiDAABqgW776MP0rAAAAAElFTkSuQmCC" alt="English" title="English"/>
        <span style={{marginLeft:'0.3em'}}>{strings.nav_9}</span>
        </a>
        </li>
      </ul>
        </div>
      </div>
      </Container>
      </div>
    );
  }
}

const mapStateToProps =(state) => {
  return {
    LangState: state.LangReducers,
    uiReducers : state.uiReducers,
  }
}

export default connect(mapStateToProps)(Header);
