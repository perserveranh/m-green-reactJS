import React, { Component } from 'react';
import Slider from "react-slick";
import '../../css/carousel.css';
class Carousel extends Component {
  render() {
    const settings = {
        className: "carousel",
      rel:"parnert",
      speed: 300,
      slidesToShow: 10,
      autoplay: true,
      arrows:false,
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
        <Slider {...settings}>
        <div >
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/1490241747763Logo-mpoint-300x300px-1.jpg" alt="mpoint" style={{width:'95px',height:'95px'}} />
        </div>
        <div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/4c063aff76f69f710423107cdd2bcbb620161008153730.jpg" alt="mpoint" style={{width:'95px',height:'95px'}} />
        </div>
        <div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/948e549fba901861b103d341d92335dc20161008161931.jpg" alt="mpoint" style={{width:'95px',height:'95px'}} />
        </div>
        <div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/1494906922246Logo-vin.jpg" alt="mpoint" style={{width:'95px',height:'95px'}} />
        </div>
        <div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/148878042032401affd0459a858a9195a32c64d46dbe720170217040957.jpg" alt="mpoint" style={{width:'95px',height:'95px'}} />
        </div>
        <div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/a747098ed318593ab523264e2cefffa620161008162528.jpg" alt="mpoint" style={{width:'95px',height:'95px'}} />

        </div>
        <div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/a747098ed318593ab523264e2cefffa620161008162528.jpg" alt="mpoint" style={{width:'95px',height:'95px'}} />
        
        </div>
        <div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/ea69ecb8ad3e2fbcd45ce56256bef30520161008153411-1.jpg" alt="mpoint" style={{width:'95px',height:'95px'}} />
        
        </div>
        <div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/0d9517baf1920fc12ca44edac45e214b20161013075141.jpg" alt="mpoint" style={{width:'95px',height:'95px'}} />
        
        </div>
        <div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/ebefe9f3e23ec895b280c095ab6a631f20161008154403.jpg" alt="mpoint" style={{width:'95px',height:'95px'}} />
        
        </div>
        <div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/ef349c217fa0a05112883467b4dd2af820161008164000.jpg" alt="mpoint" style={{width:'95px',height:'95px'}} />
        
        </div>
        <div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/c77481054a505ea7a0691e695a71e1f020161008154601.jpg" alt="mpoint" style={{width:'95px',height:'95px'}} />
        
        </div>
        <div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/1493191978727Logo-ibest.jpg" alt="mpoint" style={{width:'95px',height:'95px'}} />
        
        </div>
        <div>
        <img src="http://mgreen.vn/wp-content/uploads/2017/11/308d8f574a0a4dda4550112d407aad8720161008160255.jpg" alt="mpoint" style={{width:'95px',height:'95px'}} />
        
        </div>
      </Slider>
  
      
    );
  }
}

export default Carousel;
