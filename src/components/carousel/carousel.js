import React, { Component } from 'react';
import Slider from "react-slick";
import '../../css/carousel.css';
import { strings } from '..';
class Carousel extends Component {
  render() {
    const settings = {
      className: "carousel",
      rel: "parnert",
      speed: 300,
      slidesToShow: 10,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2000,
      centerMode: false,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 7,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 325,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    };
    return (
      <React.Fragment>
        <h1 className="text-center title-affiliate">{strings.Affiliate}</h1>
        <Slider {...settings}>
          <div >
            <img src="/image/1.jpg" alt="mpoint" style={{ width: '95px', height: '95px' }} />
          </div>
          <div>
            <img src="/image/2.jpg" alt="mpoint" style={{ width: '95px', height: '95px' }} />
          </div>
          <div>
            <img src="/image/3.jpg" alt="mpoint" style={{ width: '95px', height: '95px' }} />
          </div>
          <div>
            <img src="/image/4.jpg" alt="mpoint" style={{ width: '95px', height: '95px' }} />
          </div>
          <div>
            <img src="/image/5.jpg" alt="mpoint" style={{ width: '95px', height: '95px' }} />
          </div>
          <div>
            <img src="/image/6.jpg" alt="mpoint" style={{ width: '95px', height: '95px' }} />

          </div>
          <div>
            <img src="/image/6.jpg" alt="mpoint" style={{ width: '95px', height: '95px' }} />

          </div>
          <div>
            <img src="/image/7.jpg" alt="mpoint" style={{ width: '95px', height: '95px' }} />

          </div>
          <div>
            <img src="/image/8.jpg" alt="mpoint" style={{ width: '95px', height: '95px' }} />

          </div>
          <div>
            <img src="/image/9.jpg" alt="mpoint" style={{ width: '95px', height: '95px' }} />

          </div>
          <div>
            <img src="/image/10.jpg" alt="mpoint" style={{ width: '95px', height: '95px' }} />

          </div>
          <div>
            <img src="/image/11.jpg" alt="mpoint" style={{ width: '95px', height: '95px' }} />

          </div>
          <div>
            <img src="/image/12.jpg" alt="mpoint" style={{ width: '95px', height: '95px' }} />

          </div>
          <div>
            <img src="/image/13.jpg" alt="mpoint" style={{ width: '95px', height: '95px' }} />

          </div>
        </Slider>
      </React.Fragment>


    );
  }
}

export default Carousel;
