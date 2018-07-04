import React, { Component } from 'react';
import Introduce from './introduce';
import Classify from './classify';
import IntroduceAtm from './introduceatm';
class Content extends Component {
  render() {
    return (
     <div>
        <Introduce />
        <Classify />
        <IntroduceAtm />
     </div>
    );
  }
}

export default Content;
