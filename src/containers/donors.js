import React, { Component,Fragment } from 'react';
import Header from './../components/header';
import Footer from './../components/footer';
import dataService from './../server/dataService';
import {Row,Col,Button} from 'reactstrap';
import './../css/sponsor.css';
class Partner extends Component {
constructor(props){
  super(props);
  this.state={
    dataSponsor: []
  }
} 
  componentDidMount(){
    this.getListSponsor();
  }
  async getListSponsor() {
    const sponsor = await dataService.getNews('0','10');
    if(sponsor.code != 0) return console.log(sponsor.msg);
    this.setState({
      dataSponsor: sponsor.data
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
                          <div className="sponsor-content">
                          <img src={sponsor.image} alt="img-Sponsor"/>

                          <div className="Sponsor-text-content">
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

export default Partner;
