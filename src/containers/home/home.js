import React, { Component } from 'react';
import Content from '../../components/contents/index';
import { Footer, Header, Carousel, Slide } from '../../components';

class Home extends Component {
  render() {
    let history = this.props.history
    return (
      <div className="home">
        <Header location />
        <Slide history={history} />
        <Content />
        <Carousel />
        <Footer />
      </div>
    );
  }
}

export default Home;
