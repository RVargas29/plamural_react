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
                            <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                            <div className="social-links">
                                <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                                <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </Col>
                    <Col md="4" lg="3">
                        <div className="info">
                            <div>
                                <i classNames="fas fa-map-marker"></i>
                                <p>San José, Costa Rica <br/> 600 metros norte del Cruce Ipís Coronado</p>
                            </div>

                            <div>
                                <i classNames="far fa-envelope"></i>
                                <p>info@iica.int</p>
                            </div>

                            <div>
                                <i classNames="fas fa-phone-alt"></i>
                                <p>(506) 2216-0022 </p>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;