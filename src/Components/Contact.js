import { Col, Row, Container } from "react-bootstrap";

import "./Contact.css"

const Contact = () => {
    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col md="4" lg="4">
                        <div className="contact-about">
                            <h3>IICA</h3>
                            <p>El Instituto Interamericano de Cooperación para la Agricultura (IICA) es el organismo especializado en agricultura del Sistema Interamericano que apoya los esfuerzos de los Estados Miembros para lograr el desarrollo agrícola y el bienestar rural.</p>
                            <div className="social-links">
                                <a href="#" className="twitter"><i class="fab fa-twitter"></i></a>
                                <a href="#" className="facebook"><i class="fab fa-facebook"></i></a>
                                <a href="#" className="instagram"><i class="fab fa-instagram"></i></a>
                                <a href="#" className="linkedin"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </Col>
                    <Col md="4" lg="3">
                        <div className="info">
                            <div>
                                <i className="fas fa-map-marker"></i>
                                <p>San José, Costa Rica <br/> 600 metros norte del Cruce Ipís Coronado</p>
                            </div>

                            <div>
                                <i className="far fa-envelope"></i>
                                <p><a href="mailto:programa.dt-af@iica.int">programa.dt-af@iica.int</a></p>
                            </div>

                            <div>
                                <i className="fas fa-phone-alt"></i>
                                <p><a href="tel:+50622160222">(+506) 2216-0222</a></p>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;