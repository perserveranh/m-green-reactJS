import React, { Component,Fragment } from 'react';
import Header from './../components/header';
import Footer from './../components/footer';
import dataServices from './../server/dataService';
import {Row,Col,Button} from 'reactstrap';
import './../css/news.css';
import {connect} from 'react-redux';
class New extends Component {
 constructor(props) {
   super(props);
   this.state={
     dataNews: []
   }
 }
  componentDidMount(){
    this.getNews();
    }

 async getNews() {
  const news = await dataServices.getNews('0','10');
if(news.code != 0) return console.log(news.msg);
  this.setState({
    dataNews:news.data
  })
 } 
  render() {
    return (
      <Fragment>
        <Header />
        
            <Row className="new">
                {this.state.dataNews.map(news => {
                    return (
                        <Col
                            key={news.id}
                            xs={12} md={12}>
                          <div className="news-content">
                          <img src={news.image} alt="img-news"/>

                          <div className="news-text-content">
                          <h1>{news.title}</h1>
                          <p>{news.preview}</p>
                          <span>{news.createdAt}</span>
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
    userReducers: state.userReducer
  }
}
export default connect(mapStateToProps)(New);
