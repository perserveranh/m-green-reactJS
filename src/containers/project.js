import React, { Component,Fragment } from 'react';
import Header from './../components/header';
import Footer from './../components/footer';
import dataServices from './../server/dataService';
import {Row,Col,Button} from 'reactstrap';
import './../css/project.css';
class Project extends Component {
 constructor(props){
   super(props);
   this.state={
     dataProject: []
   }
 }
 componentDidMount(){
   this.getProject();
 }
 async getProject() {
   const projects = await dataServices.getNews('0','10');
   if(projects.code != 0)  return console.log(projects.msg);
   this.setState({
     dataProject: projects.data
   })
 }
  render() {
    return (
      <Fragment>
      <Header />
        <Row className="project">
          {this.state.dataProject.map(projects => {
            return (
                        <Col
                            key={projects.id}
                            xs={12} md={12}>
                            <div className="vc_empty_space  hidden-xs" style={{height: '30px'}}><span className="vc_empty_space_inner"></span></div>
                          <div className="projects-content">
                          <img src={projects.image} alt="img-projects"/>

                          <div className="projects-text-content">
                          <h1>{projects.title}</h1>
                          <p>{projects.preview}</p>
                          <span>{projects.createdAt}</span>
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

export default Project;
