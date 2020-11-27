import { Row, Col, Container } from "react-bootstrap"
import ImageLink from "./Generic/ImageLink"

import agfam from "../static/images/sponsors/agfam.png";
import iica from "../static/images/sponsors/iica.png";
import indap from "../static/images/sponsors/indap.png";
import mapa from "../static/images/sponsors/mapa.png";
import mgap from "../static/images/sponsors/mgap.jpg";
import minagricultura from "../static/images/sponsors/minagricultura.jpg";
import ministerio_argentina from "../static/images/sponsors/ministerio_argentina.png";
import ministerio from "../static/images/sponsors/ministerio.png";
import reaf from "../static/images/sponsors/reaf.png";

import "./Sponsors.css"
import SectionHeader from "./SectionHeader";

const Sponsors = () => {
    return (
        <section id="sponsors">
            <Container>
                <SectionHeader text="Instituciones parte" />
                <Row>
                    <Col md="2" >
                        <ImageLink redirectUrl="https://iica.int" image={iica} altText="IICA" />
                    </Col>
                    <Col md="2">
                        <ImageLink redirectUrl="http://www.fao.org/family-farming-decade/home/es/" image={agfam} altText="IICA" />
                    </Col>
                    <Col md="2">
                        <ImageLink redirectUrl="http://www.reafmercosul.org/" image={reaf} altText="IICA" />
                    </Col>
                    <Col md="2">
                        <ImageLink redirectUrl="https://www.minagricultura.gov.co/paginas/default.aspx" image={minagricultura} altText="IICA" />
                    </Col>
                    <Col md="2">
                        <ImageLink redirectUrl="https://www.mag.gov.py/" image={ministerio} altText="IICA" />
                    </Col>
                    <Col md="2">
                        <ImageLink redirectUrl="https://www.gov.br/agricultura/pt-br" image={mapa} altText="IICA" />
                    </Col>
                </Row>
                <Row>    
                    <Col md={{ offset:3, span:2 }}>
                        <ImageLink redirectUrl="https://www.argentina.gob.ar/agricultura" image={ministerio_argentina} altText="IICA" />
                    </Col>
                    <Col md="2">
                        <ImageLink redirectUrl="https://www.minagri.gob.cl/" image={indap} altText="IICA" />
                    </Col>
                    <Col md="2">
                        <ImageLink redirectUrl="https://www.gub.uy/ministerio-ganaderia-agricultura-pesca/" image={mgap} altText="IICA" />
                    </Col>
                </Row>
             </Container>
        </section>
    )
}

export default Sponsors;