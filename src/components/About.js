import style from '../mystyle.module.css';
import Header from './Header';
import Footer from './Footer';
import {Container, Row, Col} from 'react-bootstrap';
import MaryamImage from '../images/graduation.png';


function About(){
    return(
        <div style={{marginBottom: '90px'}}>
            <Row>
                <h1 className={style.about}>ABOUT</h1>
                <Col xs='12' md='12' lg='7'>
                    <p className={style.paragraphabout} > Hi there, I am Maryam, I am Web Developer, Database and Interface designer, Data Librarian, and Acquisition Librarian. I have been working as an Reference Librarian and Acquisition Librarian 8 years at <a href="http://library.ipm.ac.ir/"> Institue for Mathematics and Physics (IPM)</a>The Acquisition Department is primarily responsible for acquiring any material needed to support the education, research and functioning of the library. The Department is also responsible for the acquisition of electronic materials which includes the license agreements, the placement of orders, and the monitoring of access to these resources. I am a part-time research and reference librarian at <a href="https://www.libraries.rutgers.edu/alexander"> Alexander Library of Rutgers University</a>.</p>
                    <p className={style.paragraphabout} >Also, I am working in <a href="https://www.rcsb.org/">RSCB Protein Data Bank</a> since 2018 September.  The Protein Data Bank archive (PDB) has served as the single repository of information about the 3D structures of proteins, nucleic acids, and complex assemblies. I have worked with backend, MongoDB that store the data of these structures for 4 months and I indexed the exported JSON files in <a href="https://lucene.apache.org/solr/">Solr apache</a>. To make this structue searchable, I have been wokring on frontend since 2019 April. Images and video of this project is acessiable in <a href= "project.html">Projects page</a>.</p>
                </Col>
                <Col xs='12' md='12' lg='5'>
                    <img className="img-fluid rounded-circle" src={MaryamImage} alt="maryam photo" style={{height:'400px', marginLeft: '5.3em'}}/>
                </Col>
            </Row>
        </div>
    );
}

export default About;