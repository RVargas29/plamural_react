import { Col, Container, Row } from 'react-bootstrap';
import  SectionHeader  from "./SectionHeader";

import "./MoreFeatures.css"

const MoreFeaturesBox = ({ iconClass, title, fadeClass = "fadeInLeft",children }) => {
    return(
        <Col lg="6">
            <div className={ "box wow " + fadeClass }>
                <div className="icon"><i className={"fas " + iconClass}></i></div>
                <h4 className="title"><a href="#">{title}</a></h4>
                <p className="description">
                    {children}
                </p>
            </div>
        </Col>
    )
}

const MoreFeautres = () => {
    return(
        <section id="more-features" className="section-bg">
            <Container>
                <SectionHeader text="Servicios de apoyo" >
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                </SectionHeader>            
                <Row>
                    <MoreFeaturesBox iconClass="fa-stopwatch" title="Planes de negocio">
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.
                    </MoreFeaturesBox>
                    <MoreFeaturesBox iconClass="fa-coins" title="Planes de financieros" fadeClass="fadeRight">
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.
                    </MoreFeaturesBox>
                    <MoreFeaturesBox iconClass="fa-heart" title="Banco de proyectos">
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.
                    </MoreFeaturesBox>
                    <MoreFeaturesBox iconClass="fa-chart-pie" title="Canal a especialistas" fadeClass="fadeRight">
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.
                    </MoreFeaturesBox>
                </Row>
            </Container>
        </section>
    )
}

export default MoreFeautres;