import React, { Component } from 'react';
import Header from './../components/header';
import Slide from './../components/slide';
import Content from './../components/contents/index';
import Carousel from './../components/carousel';
import Footer from './../components/footer';


class Home extends Component {
  render() {
    return (
      <div className="home">
     
    <Header />
    <Slide /> 
    <Content />
    <Carousel />
    <Footer />
      </div>
    );
  }
}

export default Home;
