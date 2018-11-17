import React, { Component } from 'react';
import Slider from "react-slick";
import '../../css/slide.css';
import { Button } from 'reactstrap';
import { strings, api, Video } from '../../components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
      dots: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      // infinite: true,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };
    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle.bind(this)}>&times;</button>;
    return (
      <div className="slider">
        <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)} className={this.props.className} external={externalCloseBtn}>
          <ModalHeader >DOWNLOAD</ModalHeader>
          <ModalBody>
            <a href="https://play.google.com/store/apps/details?id=com.vn.mgreen">
              <img className="img-modal" src="/image/android@3x.png" alt="chplay" />
            </a>
            <a href="https://itunes.apple.com/vn/app/mgreen-thu-gom-r%C3%A1c/id1325493985?l=vi&mt=8">
              <img className="img-modal" src="/image/apple@3x.png" alt="appstore" />
            </a>
          </ModalBody>

        </Modal>

        <Slider {...settings}>

          <div>
            <div className="slide-content">
              {/* <div className="text-title-1 text-center">
                <p>{strings.slide_1}</p>

                <p>{strings.slide_2}</p>
              </div> */}
              <div className="text-content text-center ">
                {/* <p>{strings.slide_3}</p> */}

                {/* <p>{strings.slide_4}</p> */}
                {/* <Button className="btn-download" onClick={this.toggle.bind(this)}>{strings.introduce_6}</Button>{' '} */}
              </div>
            </div>
            <img src="/image/xxsds.jpg" alt="slide1" />
          </div>
          <div>
            <div className="text-title-2">
              <p className="p-title-slide">{strings.slide_7}</p>
              <p className="p-content-slide">{strings.slide_8}</p>
              <Button className="btn-download" onClick={this.toggle.bind(this)}>{strings.nav_7}</Button>{' '}
            </div>
            <img src="/image/background_slide1.png" alt="slide2" />
          </div>
          <div>
            <div className="text-title-2">
              <p className="p-title-slide">{strings.slide_9}</p>
              <p className="p-content-slide">{strings.slide_10}</p>
              <Button className="btn-outmore" onClick={this.toggle.bind(this)} >{strings.introduce_7}</Button>{' '}
            </div>
            <img src="/image/background_slide2.png" alt="slide3" />
          </div>
          <div>
            <Video />
          </div>
        </Slider>


      </div>

    );
  }

}
const mapStateToProps = state => {
  return {
    LangState: state.LangReducers,
    uiReducer: state.uiReducer
  }
}
export default connect(mapStateToProps)(Slide);
