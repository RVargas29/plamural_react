import { Col, Container, Row } from 'react-bootstrap';
import  SectionHeader  from "./SectionHeader";

import "./Features.css"
import features from "../static/images/features.jpg";

const FeatureBox = ({ iconClass, title, link="/",children }) => {
    return (
        <Col lg="4" md="6" className="feature-container wow fadeInRight">
            <div className="icon"><i className={"fas " + iconClass}></i></div>
            <h4 className="title"><a href={link}>{title}</a></h4>
            <p className="description">
                {children}
            </p>
        </Col>
    )
}

const Features = () => {
    return (
        <section id="features">
            <a id="anchor-features" className="anchor"></a>
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
                            <FeatureBox iconClass="fa-tachometer-alt" title="Mujer rural" link="/records/sobre#anchor-record-list">
                                Se detallan las diferentes políticas públicas impulsadas y en implementación en los países que tienen como foco de atención las mujeres rurales de la Agricultura Familiar
                            </FeatureBox>
                            <FeatureBox iconClass="fa-flask" title="Emprendimientos y apoyo a la producción" link="/records/emprendimientos#anchor-record-list">
                            Lista las políticas públicas, programas, proyectos y otros instrumentos de políticas que incentivan emprendimientos, negocios o actividades productivas con fines comerciales.
                            </FeatureBox>
                            <FeatureBox iconClass="fa-flask" title="Apoyo a la producción para mujer rural" link="/records/emprendeurismo#anchor-record-list">
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