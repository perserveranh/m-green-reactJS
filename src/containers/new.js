import React, { Component } from 'react';
import Header from './../components/header';
import Footer from './../components/footer';
class New extends Component {
  render() {
    return (
      <div className="new">
        <Header />
        <h1>Tin tuc</h1>
        <Footer />
      </div>
    );
  }
}

export default New;
