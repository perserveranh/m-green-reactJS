import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './../../css/classify.css';
import { connect } from 'react-redux';
import { strings } from '../../components';
import ScrollAnimation from 'react-animate-on-scroll';

class Classify extends Component {
  render() {
    return (
      <div className="classify">
        <div className="vc_empty_space  hidden-xs" style={{ height: '60px' }}><span className="vc_empty_space_inner"></span></div>
        <Container>
          <ScrollAnimation animateIn='jackInTheBox'
            initiallyVisible={false}>

            <Row>
              <Col xs="12" md="6" lg="4">
                <div className="wpb-wrapper text-center">
                  <img src="http://mgreen.vn/wp-content/uploads/2017/11/phan_loai_rac_icon.png" alt="phan-loai-rac" style={{ width: '222px', height: '222px' }} />
                  <h4 className="text-theme-green text-center py-3 pt-5 "><b>{strings.classify_1}</b></h4>
                  <p className="p-text">{strings.classify_2}</p>
                </div>
              </Col>
              <Col xs="12" md="6" lg="4">
                <div className="wpb-wrapper text-center">
                  <img src="http://mgreen.vn/wp-content/uploads/2017/11/the_mgreen-icon.png" alt="the-mgreen" style={{ width: '222px', height: '222px' }} />
                  <h4 className="text-theme-green text-center py-3 pt-5"><b>{strings.classify_3}</b></h4>
                  <p className="p-text">{strings.classify_4}</p>
                </div></Col>
              <Col xs="12" md="6" lg="4">
                <div className="wpb-wrapper text-center">
                  <img src="http://mgreen.vn/wp-content/uploads/2017/11/uu_dai_icon.png" alt="uu-dai" style={{ width: '222px', height: '222px' }} />
                  <h4 className="text-theme-green text-center py-3 pt-5"><b>{strings.classify_5}</b></h4>
                  <p className="p-text">{strings.classify_6}</p>
                </div></Col>
            </Row>
          </ScrollAnimation>
          <div className="vc_empty_space  hidden-xs" style={{ height: '60px' }}><span className="vc_empty_space_inner"></span></div>
        </Container>
        <div>
          <ScrollAnimation delay={500}
            animateIn='tada'
            initiallyVisible={false}
            animateOnce={true}

            offset={4000}
          >
            <div className="text-img-content text-center text-img-content-1">
              <p >{strings.classify_7}</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={800}
            animateIn='tada'
            initiallyVisible={false}
            animateOnce={true}
            offset={4000}
          >

            <div className="text-img-content text-right text-img-content-2">
              <p>{strings.classify_8}</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={1000}
            animateIn='tada'
            initiallyVisible={false}
            animateOnce={true}
            offset={4000}
          >

            <div className="text-img-content text-left text-img-content-3">
              <p>{strings.classify_9}</p>
            </div>
          </ScrollAnimation>
          <img className="img-classify" src="/photo-mgreen.jpg" alt="mgreen-content" style={{ height: '620px', width: '100vw' }} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    LangState: state.LangReducers
  }
}
export default connect(mapStateToProps)(Classify);
