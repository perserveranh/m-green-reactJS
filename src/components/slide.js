import React, { Component } from 'react';
import Slider from "react-slick";
import './../css/slide.css';
import {Button} from 'reactstrap';

class Slide extends Component {
  render() {
    const settings = {
      className: "slide",
      speed: 300,
      slidesToShow: 1,
      // autoplay:true,
      arrows:false,
      autoplaySpeed: 4000,
    };
    return (
      <div className="slider">
    
      <Slider {...settings}>
        <div>
        <div className="text-title text-center">
        <p>tòa nhà thông minh</p>
        <br />
        <p>cư dân thông thái</p>
        </div>
        <div className="text-content text-center">
        <p>phân loại rác tái chế và tích điểm</p>
        <br />
        <p>để nhận hàng ngàn ưu đãi và quà tặng</p>
        <Button color="success">success</Button>{' '}
        <p>nhận ngay thẻ ưu đãi mgreen trị giá hàng triệu đồng</p>
        </div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/Background-image.png" alt="slide1" style={{filter:'brightness(1.5)', cursor: 'pointer', height: '439px', width: '100vw'}}/>
        </div>
        <div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/background_slide1.png" alt="slide2" style={{filter:'brightness(1.5)', cursor: 'pointer', height: '439px', width: '100vw'}}/>
        </div>
        <div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/background_slide2.png" alt="slide3"  style={{filter:'brightness(1.5)', cursor: 'pointer', height: '439px', width: '100vw'}}/>
        </div> 
      </Slider>

      </div>
      
    );
  }
}

export default Slide;
