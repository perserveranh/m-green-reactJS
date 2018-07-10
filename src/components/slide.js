import React, { Component } from 'react';
import Slider from "react-slick";
import './../css/slide.css';
import {Button} from 'reactstrap';
import strings from './LocalizedStrings';
import { connect } from 'react-redux';

class Slide extends Component {
  render() {
    const settings = {
      className: "slide",
      speed: 300,
      slidesToShow: 1,
      autoplay:true,
      arrows:false,
      autoplaySpeed: 5000,
    };
    return (
      <div className="slider">
    
      <Slider {...settings}>
        <div>
        <div className="text-title-1 text-center">
        <p>{strings.slide_1}</p>
       
        <p>{strings.slide_2}</p>
        </div>
        <div className="text-content text-center">
        <p>{strings.slide_3}</p>
    
        <p>{strings.slide_4}</p>
        <Button color="success" className="btn-mgreen">{strings.slide_5}</Button>{' '}
        <p>{strings.slide_6}</p>
        </div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/Background-image.png" alt="slide1" />
        </div>
        <div>
        <div className="text-title-2">
        <p className="p-title-slide">{strings.slide_7}</p>
        <p className="p-content-slide">{strings.slide_8}</p>
        </div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/background_slide1.png" alt="slide2" />
        </div>
        <div>
        <div className="text-title-2">
        <p className="p-title-slide">{strings.slide_9}</p>
        <p className="p-content-slide">{strings.slide_10}</p>
        </div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/background_slide2.png" alt="slide3"  />
        </div> 
      </Slider>

      </div>
      
    );
  }
}
const mapStateToProps = state => {
  return {
    LangState: state.LangReducers
  }
}
export default connect(mapStateToProps)(Slide);
