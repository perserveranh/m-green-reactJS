import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './../../css/introduce.css';
import { connect } from 'react-redux';
import { strings } from '../../components';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

class Introduce extends Component {
  render() {
    return (
      <div className="introduce">
        <Container>
          <div className="vc_empty_space  hidden-xs" style={{ height: '40px' }}><span className="vc_empty_space_inner"></span></div>
          <ScrollAnimation
            animateIn='jello'
            animateOut='bounceOut'
            animateOnce={true}
          >

            <div className="text-center">
              <h2 className="text-theme-green">{strings.nav_1}</h2>
            </div>
          </ScrollAnimation>
          <Row>

            <Col xs="12" md="12" sm="12" lg="6">
              <ScrollAnimation animateIn='bounceInLeft'
                animateOut='bounceOutLeft'
                initiallyVisible={false}
                animateOnce={true}
                offset={400}
              >

                <img className="img-introduce" src="/image/greenCity.jpg" alt="greenCity" />
              </ScrollAnimation>
            </Col>

            <Col xs="12" md="12" sm="12" lg="6">
              <div className="vc_empty_space  hidden-xs" style={{ height: '20px' }}><span className="vc_empty_space_inner"></span></div>
              <ScrollAnimation animateIn='wobble'
                initiallyVisible={false}
                animateOut='bounceOut'
                animateOnce={true}
                offset={400}
              >
                <Row className="text-center">
                  <Col xs="6" md="6">
                    <img src="/image/logoMgreen09A11536Dd5082993Cc799E5Aa01671F1@3x-1.png" alt="logo-m-green" style={{ height: '71px', width: '71px' }} />
                  </Col>
                  <Col xs="6" md="6">
                    <img src="/image/logo-tud.jpg" alt="hanoi-logo" style={{ height: '71px', width: '71px' }} />
                  </Col>

                </Row>
              </ScrollAnimation>
              <ScrollAnimation delay={1200}
                animateIn='zoomIn'
                initiallyVisible={false}>
                <div className="vc_empty_space  hidden-xs" style={{ height: '20px' }}><span className="vc_empty_space_inner"></span></div>
                <div className="div-text">
                  <p className="p-text">{strings.introduce_1}</p>
                  <p className="p-text">{strings.introduce_2}</p>
                  <p className="p-text">{strings.introduce_3}</p>
                </div>
                {/* <p className="p-content">{strings.introduce_4}</p> */}
              </ScrollAnimation>
            </Col>
          </Row>
        </Container>
        <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}><span className="vc_empty_space_inner"></span></div>
        <div className="img-introduce2">
          {/* <div className="mgreen-banding">
            <Link to="/" className="mgreen-logo" rel="home" itemProp="url">
              <img
                style={{ width: '100px', height: '80px' }}
                src="/image/logoMgreen09A11536Dd5082993Cc799E5Aa01671F1@3x.png"
                alt="mGreen" itemProp="logo" className="mgreen-logo-link">
              </img>
            </Link>
          </div> */}
          <ScrollAnimation animateIn='jello'
            initiallyVisible={false}
            animateOnce={true}
            offset={400}
          >
            <div className="img-text-content">
              <p>{strings.introduce_5}</p>
            </div >
          </ScrollAnimation>
          <img src="/image/background_slide2.png" alt="mgreen-content" />
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
export default connect(mapStateToProps)(Introduce);
