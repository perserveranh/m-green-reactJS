import React, { Component } from 'react';
import Header from './../components/header';
import Footer from './../components/footer';
import { Container } from 'reactstrap';
import './../css/mgreen.css';
import { connect } from 'react-redux';
import strings from './../components/LocalizedStrings';
import ScrollAnimation from 'react-animate-on-scroll';

class Mgreen extends Component {
  render() {
    return (
      <div className="mgreen">
        <Header />


        <div className="bg-mgreen">
          <br />
          <br />
          <br />
          <ScrollAnimation animateIn='flash'
            initiallyVisible={false}
            delay={500}
          >

            <Container>
              <article className="article">
                <div className="entry-content">
                  <br />
                  <h3 className="text-m-green ">{strings.mgreen_1}</h3>
                  <p>{strings.mgreen_2}</p>
                  <p></p></div>
                <div className="py-3">
                  <h3 className="text-m-green">{strings.mgreen_3}</h3>
                  <p>{strings.mgreen_4}</p>
                  <p></p></div>
                <div>
                  <h3 className="text-m-green">{strings.mgreen_5}</h3>
                  <p>{strings.mgreen_6}</p>
                </div>
              </article>
              <div className="vc_empty_space  hidden-xs" style={{ height: '70px' }}><span className="vc_empty_space_inner"></span></div>
            </Container>
          </ScrollAnimation>
        </div>
        <Footer />

      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    LangState: state.LangReducers
  }
}
export default connect(mapStateToProps)(Mgreen);
