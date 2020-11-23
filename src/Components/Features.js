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
                                Se detallan las diferentes políticas públicas impulsadas y en implementación en los países que tienen como foco de atención las mujeres rurales de la Agricultura Familiar
                            </FeatureBox>
                            <FeatureBox iconClass="fa-flask" title="Sobre emprendimientos" link="/records/emprendimientos">
                            Lista las políticas públicas, programas, proyectos y otros instrumentos de políticas que incentivan emprendimientos, negocios o actividades productivas con fines comerciales.
                            </FeatureBox>
                            <FeatureBox iconClass="fa-flask" title="Sobre emprendimientos de mujeres rurales" link="/records/emprendeurismo">
                            Sistematiza las políticas públicas que incentivan emprendimientos liderados o implementados por mujeres rurales y su inclusión a dinámicas productivas.
                            </FeatureBox>
                        </Row>
                    </Col>                                       
                </Row>
            </Container>
        </section>
    )
}

export default Features;