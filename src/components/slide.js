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
      autoplay:true,
      arrows:false,
      autoplaySpeed: 5000,
    };
    return (
      <div className="slider">
    
      <Slider {...settings}>
        <div>
        <div className="text-title text-center">
        <p>tòa nhà thông minh</p>
       
        <p>cư dân thông thái</p>
        </div>
        <div className="text-content text-center">
        <p>phân loại rác tái chế và tích điểm</p>
    
        <p>để nhận hàng ngàn ưu đãi và quà tặng</p>
        <Button color="success" className="btn-mgreen">đăng kí miễn phí thẻ mgreen</Button>{' '}
        <p>nhận ngay thẻ ưu đãi mgreen trị giá hàng triệu đồng</p>
        </div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/Background-image.png" alt="slide1" style={{filter:'brightness(1.5)', cursor: 'pointer', height: '439px', width: '100vw'}}/>
        </div>
        <div>
        <div className="text-title-2">
        <p className="p-title-slide">thu gom rác như uber</p>
        <p className="p-content-slide">Phân loại,thu gom rác tái chế và quà tặng đổi điểm cho cư dân qua app Mpoint</p>
        </div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/background_slide1.png" alt="slide2" style={{filter:'brightness(1.5)', cursor: 'pointer', height: '439px', width: '100vw'}}/>
        </div>
        <div>
        <div className="text-title-2">
        <p className="p-title-slide">công nghệ smart city</p>
        <p className="p-content-slide">Dự án ứng dụng công nghệ Smart city phục vụ việc phân loại các loại rác.</p>
        </div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/background_slide2.png" alt="slide3"  style={{filter:'brightness(1.5)', cursor: 'pointer', height: '439px', width: '100vw'}}/>
        </div> 
      </Slider>

      </div>
      
    );
  }
}

export default Slide;
