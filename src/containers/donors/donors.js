import React, { Component, Fragment } from 'react';
import { Footer, Header } from '../../components';
import dataService from '../../server/dataService';
import { Row, Col, Button } from 'reactstrap';
import '../../css/sponsor.css';
import { connect } from 'react-redux';

class Partner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSponsor: [],
      isLoading: this.props.dispatch({ type: "SHOW_LOADING", showLoading: true })
    }
  }
  componentDidMount() {
    this.getListSponsor();
  }
  async getListSponsor() {
    // isLoading: this.props.dispatch({ type: "SHOW_LOADING", showLoading: true });
    const sponsor = await dataService.getNews('0', '10');
    if (sponsor.code !== 0) return console.log(sponsor.msg);
    this.setState({
      dataSponsor: sponsor.data,
      isLoading: this.props.dispatch({ type: "HIDE_LOADING", showLoading: false })
    })
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Row className="sponsor">
          {this.state.dataSponsor.map(sponsor => {
            return (
              <Col
                key={sponsor.id}
                xs={12} md={12}>
                <div className="vc_empty_space  hidden-xs" style={{ height: '30px' }}><span className="vc_empty_space_inner"></span></div>
                <div className="sponsor-content">
                  <img src={sponsor.image} alt="img-Sponsor" />

                  <div className="sponsor-text-content">
                    <h1>{sponsor.title}</h1>
                    <p>{sponsor.preview}</p>
                    <span>{sponsor.createdAt}</span>
                    <br />
                    <Button color="secondary">Read More</Button>{' '}
                  </div>
                </div>

              </Col>
            )
          })}

        </Row>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    uiReducers: state.uiReducers
  }
}
export default connect(mapStateToProps)(Partner);
