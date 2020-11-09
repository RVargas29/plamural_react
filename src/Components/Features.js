import { Col, Container, Row } from 'react-bootstrap';
import  SectionHeader  from "./SectionHeader";

import "./Features.css"
import features from "../static/images/features.jpg";

const FeatureBox = ({ iconClass, title, children }) => {
    return (
        <Col lg="6" md="6" className="box wow fadeInRight">
            <div className="icon"><i className={"fas " + iconClass}></i></div>
            <h4 className="title"><a href="#">{title}</a></h4>
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
                            <FeatureBox iconClass="fa-tachometer-alt" title="Sobre mujer rural">
                                Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident clarida perendo.
                            </FeatureBox>
                            <FeatureBox iconClass="fa-flask" title="Sobre Emprendimientos">
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