import React, { Component } from 'react';
import Slider from "react-slick";
import '../../css/slide.css';
import { Button } from 'reactstrap';
import { strings } from '../../components';
import { connect } from 'react-redux';
import {
  Modal,
  ModalHeader,
  ModalBody
} from 'reactstrap';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false,
      modalSignup: false,
      modalLogin: false,
    }
  }
  toggle() {
    this.setState({
      modal: !this.state.modal,
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const settings = {
      className: "slide",
      speed: 300,
      slidesToShow: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 3000,
    };
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle.bind(this)}>&times;</button>;
    return (
      <div className="slider">
        <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader >DOWNLOAD</ModalHeader>
          <ModalBody>
            <a href="https://play.google.com/store/apps/details?id=com.vn.mgreen">
              <img className="img-modal" src="http://mgreen.vn/wp-content/uploads/2017/12/android@3x.png" alt="chplay" />
            </a>
            <a href="https://itunes.apple.com/vn/app/mgreen-thu-gom-r%C3%A1c/id1325493985?l=vi&mt=8">
              <img className="img-modal" src="http://mgreen.vn/wp-content/uploads/2017/12/apple@3x.png" alt="appstore" />
            </a>
          </ModalBody>

        </Modal>

        <Slider {...settings}>

          <div>
            <div className="slide-content">
              <div className="text-title-1 text-center">
                <p>{strings.slide_1}</p>

                <p>{strings.slide_2}</p>
              </div>
              <div className="text-content text-center ">
                <p>{strings.slide_3}</p>

                <p>{strings.slide_4}</p>
                <Button color="success" className="btn-mgreen">{strings.slide_5}</Button>{' '}
                <p>{strings.slide_6}</p>
              </div>
            </div>
            <img src="http://mgreen.vn/wp-content/uploads/2017/11/Background-image.png" alt="slide1" />
          </div>
          <div>
            <div className="text-title-2">
              <p className="p-title-slide">{strings.slide_7}</p>
              <p className="p-content-slide">{strings.slide_8}</p>
              <Button className="btn-download" onClick={this.toggle.bind(this)}>{strings.introduce_6}</Button>{' '}
            </div>
            <img src="http://mgreen.vn/wp-content/uploads/2017/11/background_slide1.png" alt="slide2" />
          </div>
          <div>
            <div className="text-title-2">
              <p className="p-title-slide">{strings.slide_9}</p>
              <p className="p-content-slide">{strings.slide_10}</p>
              <Button className="btn-outmore" >{strings.introduce_7}</Button>{' '}
            </div>
            <img src="http://mgreen.vn/wp-content/uploads/2017/11/background_slide2.png" alt="slide3" />
          </div>
        </Slider>


      </div>

    );
  }
}
const mapStateToProps = state => {
  return {
    LangState: state.LangReducers,
    uiState: state.uiReducers
  }
}
export default connect(mapStateToProps)(Slide);
