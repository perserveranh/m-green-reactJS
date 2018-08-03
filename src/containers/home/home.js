import React, { Component } from 'react';
import Content from '../../components/contents/index';
import { Footer, Header, Carousel, Slide } from '../../components';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header location />
        <Slide />
        <Content />
        <Carousel />
        <Footer />
      </div>
    );
  }
}

export default Home;
