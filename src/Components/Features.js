import { Col, Container, Row } from 'react-bootstrap';
import  SectionHeader  from "./SectionHeader";

import "./Features.css"
import features from "../static/images/features.jpg";
import { Link } from 'react-router-dom';

const FeatureBox = ({ iconClass, title, link="/",children }) => {
    return (
        <Col lg="4" md="6" className="feature-container wow fadeInRight">
            <div className="icon"><i className={"fas " + iconClass}></i></div>
            <h4 className="title"><Link to={link}>{title}</Link></h4>
            <p className="description">
                {children}
            </p>
        </Col>
    )
}

const Features = () => {
    return (
        <section id="features">
            <Container>
                <Row>      
                    <Col lg="8" className="offset-lg-4">
                        <SectionHeader text="Políticas públicas"/>
                    </Col>               
                    <Col lg="4" md="5" className="features-img">
                        <img src={ features } alt="Features"/>
                    </Col>     
                    <Col lg="8" md="7">
                        <Row>
                            <FeatureBox iconClass="fa-tachometer-alt" title="Sobre mujer rural" link="/records/sobre">
                                Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident clarida perendo.
                            </FeatureBox>
                            <FeatureBox iconClass="fa-flask" title="Sobre Emprendimientos" link="/records/emprendimientos">
                                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata noble dynala mark.
                            </FeatureBox>
                            <FeatureBox iconClass="fa-flask" title="Emprendedurismo para mujer rural" link="/records/emprendeurismo">
                                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata noble dynala mark.
                            </FeatureBox>
                        </Row>
                    </Col>                                       
                </Row>
            </Container>
        </section>
    )
}

export default Features;