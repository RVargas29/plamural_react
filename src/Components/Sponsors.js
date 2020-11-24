import { Row, Col } from "react-bootstrap"
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

const Sponsors = () => {
    return (
        <section id="sponsors">
             <Row>
                 <Col md="3">
                     <ImageLink redirectUrl="https://iica.int" image={iica} altText="IICA" />
                 </Col>
                 <Col md="3">
                     <ImageLink redirectUrl="https://iica.int" image={agfam} altText="IICA" />
                 </Col>
                 <Col md="3">
                     <ImageLink redirectUrl="https://iica.int" image={reaf} altText="IICA" />
                 </Col>
                 <Col md="3">
                     <ImageLink redirectUrl="https://iica.int" image={minagricultura} altText="IICA" />
                 </Col>
             </Row>
             <Row>
                 <Col md="2">
                    <ImageLink redirectUrl="https://iica.int" image={ministerio} altText="IICA" />
                 </Col>
                 <Col md="2">
                    <ImageLink redirectUrl="https://iica.int" image={mapa} altText="IICA" />
                 </Col>
                 <Col md="2">
                    <ImageLink redirectUrl="https://iica.int" image={ministerio_argentina} altText="IICA" />
                 </Col>
                 <Col md="2">
                    <ImageLink redirectUrl="https://iica.int" image={indap} altText="IICA" />
                 </Col>
                 <Col md="2">
                    <ImageLink redirectUrl="https://iica.int" image={mgap} altText="IICA" />
                 </Col>
             </Row>
        </section>
    )
}

export default Sponsors;