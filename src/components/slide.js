import React, { Component } from 'react';
import Slider from "react-slick";

class Slide extends Component {
  render() {
    const settings = {
      speed: 300,
      slidesToShow: 1,
      // autoplay:true,
      arrows:false,
      autoplaySpeed: 4000,
    };
    return (
        <Slider {...settings}>
          <div>
          <img src="http://mgreen.vn/wp-content/uploads/2017/11/Background-image.png" alt="slide1" style={{filter:'brightness(1.5)', cursor: 'pointer', height: '439px', width: '100vw'}}/>
          </div>
          <div>
          <img src="http://mgreen.vn/wp-content/uploads/2017/11/background_slide1.png" alt="slide2" style={{filter:'brightness(1.5)', cursor: 'pointer', height: '439px', width: '100vw'}}/>
          </div>
          <div>
          <img src="http://mgreen.vn/wp-content/uploads/2017/11/background_slide2.png" alt="slide3"  style={{filter:'brightness(1.5)', cursor: 'pointer', height: '439px', width: '100vw'}}/>
          </div> 
        </Slider>
  
      
    );
  }
}

export default Slide;
