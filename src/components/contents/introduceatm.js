import React, { Component } from 'react';
import {Container} from 'reactstrap';
import ComponentTab from './componentTab';
import './../../css/introduceatm.css';
import { connect } from 'react-redux';
import strings from './../LocalizedStrings';

class IntroduceAtm extends Component {

  render() {
    return (
      <div className="introduceatm">
      <Container>
      <div className="vc_empty_space  hidden-xs" style={{height: '70px'}}><span className="vc_empty_space_inner"></span></div>
      <div className="text-center">
      <h2 className="text-theme-green">{strings.introduceatm}</h2>
      </div>
      <div className="vc_empty_space  hidden-xs" style={{height: '40px'}}><span className="vc_empty_space_inner"></span></div>
        <ComponentTab />
      </Container>
      <div className="vc_empty_space  hidden-xs" style={{height: '70px'}}><span className="vc_empty_space_inner"></span></div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    LangState: state.LangReducers
  }
}
export default connect(mapStateToProps)(IntroduceAtm) ;
