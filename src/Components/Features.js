import { Col, Collapse, Container, Row } from 'react-bootstrap';
import  SectionHeader  from "./SectionHeader";

import "./Features.css"
import features from "../static/images/features.jpg";

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
                            <Col lg="6" md="6" className="box wow fadeInRight">
                                <div className="icon"><i class="fas fa-tachometer-alt"></i></div>
                                <h4 className="title"><a href="#">Sobre mujer rural</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident clarida perendo.</p>
                            </Col>
                            <Col lg="6" md="6" className="box wow fadeInRight">
                                <div className="icon"><i class="fas fa-flask"></i></div>
                                <h4 className="title"><a href="#">Sobre Emprendimientos</a></h4>
                                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata noble dynala mark.</p>
                            </Col>
                        </Row>
                    </Col>                                       
                </Row>
            </Container>
        </section>
    )
}

export default Features;