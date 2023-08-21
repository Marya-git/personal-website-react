import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as React from 'react';
import ProfileCard from "./ProfileCard";
import {Container, Row, Col} from 'react-bootstrap';
import WebDeveloper from '../images/web-developer.png';
import DataAnalysis from '../images/data-analysis.png';
import Librarian from '../images/librarian.png';





function Body(){
  const description = {
          webdeveloper: "MySQL, MongoDB, JavaScript, Node.js, React, TypeScript, jQuery, Express, CSS, HTML, PUG, JSON, PHP, Docker, Kubernetes, shell script, Jira, Confluence, & Git.",
          dataanalysis: "Python, R, Apache Spark, PySpark, MapReduce, Machine learning algorithms (regression, K-NN, Random Forest, Decision Tree, SVM, K-Means, Naïve Bayes, HMM, CNN).",
          librarian: "Acquision and reference, Library Databases and software, Metadata"
        }
      , skills = {
          webdeveloper: "I've had numerous opportunities to apply software development knowledge in multiple projects and gain acumen knowledge about MySQL, MongoDB, Python, JavaScript, Node.js, React, TypeScript, JSON, jQuery, Express, CSS, HTML, PUG, Git, and shell script.",
          dataanalysis: "While working on my master's project, I acquired and mastered skills such as Python, R, Apache Spark, PySpark, MapReduce, various Machine learning algorithms (regression, K-NN, Random Forest, Decision Tree, SVM, K-Means, Naïve Bayes, HMM, CNN).",
          librarian: "Head of Acquision Section of IPM Library for 7 years and Reference Librarian at Rutgers"
        }
  return (
    <div style={{marginBottom: '90px'}}>
      <div>              
        <Row className="show-grid" style={{ paddingTop: '70px', marginBottom: '70px'}}>
            <Col xs={3} md={5} lg={1}></Col>
            <Col xs={6} md={6} lg={10}><h1><b><span style={{color: '#870074'}}>Front-End</span> Software Developer</b> 👋</h1><h5 style={{color: '#808080', marginTop: '20px'}}> Hi, I'm Maryam Fayazi. A passionate Front-End Software developer based in 📍Kirkland, WA.</h5></Col>
            <Col xs={3} md={1} lg={1}></Col>
        </Row>
      </div>
      <div style={{backgroundColor: '#F9F9F9'}}>
        <Row><h4 style={{color: '#870074', marginTop: '30px', marginLeft: '100px'}}><b>SKILLS</b></h4></Row>
        <Container style={{marginTop: '20px'}}>
          <Row >
            {/* <Col md={2} style={{border: '3px solid gray'}}>SideBar</Col> */}
            <Col md={12}>
              <Container>
                <Row className="show-grid" style={{padding: '5px'}}>
                  <Col xs={3} md={4} lg={4}>
                    <ProfileCard 
                    professionalExperience="Web Developer" 
                    image={WebDeveloper} 
                    body={description.webdeveloper} 
                    />
                  </Col>
                  <Col xs={3} md={4} lg={4}>
                    <ProfileCard 
                    professionalExperience="Data Analysis" 
                    image={DataAnalysis} 
                    body={description.dataanalysis}/>
                  </Col>
                  <Col xs={3} md={4} lg={4}>
                    <ProfileCard 
                    professionalExperience="Librarian" 
                    image={Librarian} 
                    body={description.librarian}/>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
     
  );
}

export default Body;