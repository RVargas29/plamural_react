import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutPanel from "../Components/Generic/AboutPanel";
import SectionHeader from "../Components/SectionHeader";

import './Gobernanza.css'

const Gobernanza = () => {

    var [comoTrabajamosFlag, setComoTrabajamosFlag] = useState(true)
    var [reafFlag, setReafFlag] = useState(false)
    var [iicaFlag, setIicaFlag] = useState(false)

    return (
        <section id="gobernanza">
            <SectionHeader text="Gobernanza" />
            <Container>
                <Row>
                    <Col md="12">
                        <AboutPanel title="¿Cómo trabajamos?" collapseHandler={setComoTrabajamosFlag} collapseVariable={comoTrabajamosFlag} icon="far fa-question-circle">
                            <p>
                            La Plataforma es dirigida por un Grupo Técnico Regional conformado por los puntos focales de género de los Gobiernos Nacionales integrantes de la Reunión Especializada de la Agricultura Familiar (REAF) y por una representante de las organizaciones de las mujeres rurales por país. Este Grupo Técnico Regional es quien define permanentemente las normativas y políticas que rigen a la Plataforma; establece un Plan de Trabajo Semestral, acorde a las actividades lideradas por la Presidencia Pro-Témpore de la REAF en los temas de organización de mujeres emprendedoras; aprueba el tipo de instituciones socias y aliadas; y da seguimiento a la implementación de las actividades y el funcionamiento de la Plataforma.
                            </p>
                            <p>
                            Un Grupo de Trabajo por país, para alimentar la información de cada componente de acuerdo a criterios previamente acordados activa de manera permanente y cuenta con representantes en el Grupo Técnico Regional. 
                            </p>
                            <p>
                            La plataforma cuenta con un Centro de Gestión (CG) ubicado en el IICA, responsable de la administración y operación de la Plataforma, así como de velar por la calidad de la información y del Sitio Web.  
                            </p>
                        </AboutPanel>
                        <hr/>
                        <AboutPanel title="La REAF" collapseHandler={setReafFlag} collapseVariable={reafFlag} icon="far fa-question-circle">
                            <p>
                            Es la Reunión Especializada en Agricultura Familiar (REAF) del Mercosur, órgano asesor vinculado al Grupo de Mercado Común (GMC). Impulsa el diálogo político desde el año 2004 cuando fue creado por Resolución GMC 11/2004 con la finalidad de fortalecer las políticas públicas para el sector, promover el comercio de los productos de la agricultura familiar y facilitar la comercialización en la región.
                            </p>
                            <p>
                            Al ser un órgano oficial y asesor de los órganos ejecutivos del MERCOSUR, responde a la orientación política y programática de los 4 Estados fundadores, Argentina, Brasil, Paraguay y Uruguay, más Chile y Colombia1 como Estados Asociados, que participan en las deliberaciones. Entre sus cometidos, están el de facilitar el diálogo político y el intercambio entre los estados miembros y las organizaciones de  la sociedad civil vinculadas a la Agricultura Familiar Campesina e Indígena, y el de elevar Recomendaciones al Grupo Mercado Común (GMC) y al Consejo del Mercado Común (CMC), en las áreas de su competencia: Integración y articulación de las políticas públicas de los estados parte orientadas a la AF y facilitación del comercio de los productos de la AF en vistas a la disminución de las asimetrías en el bloque.
                            </p>
                            <p>
                            Cuenta con 6 comisiones de trabajo: Facilitación del Comercio, Juventud Rural, Equidad de Género, Acceso a la Tierra, Registro de la Agricultura Familiar y Cambios Climáticos y Gestión del Riesgo. 
                            </p>
                            <p>
                            Más información en: <a href="http://www.reafmercosul.org/sobre-reaf" target="_blank">http://www.reafmercosul.org/sobre-reaf</a>  
                            </p>
                        </AboutPanel>
                        <hr/>
                        <AboutPanel title="El IICA" collapseHandler={setIicaFlag} collapseVariable={iicaFlag} icon="far fa-question-circle">
                            <p>
                            El Instituto Interamericano de Cooperación para la Agricultura (IICA) es el organismo especializado en agricultura del Sistema Interamericano que apoya los esfuerzos de los Estados Miembros para lograr el desarrollo agrícola y el bienestar rural. 
                            </p>
                            <p>
                            Brinda cooperación mediante el trabajo cercano y permanente con nuestros 34 Estados Miembros, cuyas necesidades atendemos oportunamente. Cuenta con vasta experiencia en temas como tecnología e innovación para la agricultura, sanidad agropecuaria, calidad e inocuidad de los alimentos, comercio agropecuario internacional, agricultura familiar, desarrollo rural, gestión de los recursos naturales y bioeconomía. 
                            </p>
                            <p>
                            El IICA ha venido consolidando sus esfuerzos hacia la transversalización del tema género y juventud en todo el quehacer institucional y en la cooperación técnica que brinda a sus países miembros. En este marco, para garantizar la consecución efectiva y sostenible de dicha acción, ha estabelecido una “Estrategia de Género y Mujeres Rurales en el desarrollo agrícola y los territorios rurales” para el periodo 2018-2022 cuyo propósito es el de avanzar en la promoción de un mejor posicionamiento de las mujeres en los territorios rurales desde una visión multidimensional y en particular, su rol en la agricultura como una vía legítima para promover cambios en las relaciones de género por una mayor equidad.
                            </p>
                            <p>
                            Por ello, la primera acción afirmativa propuesta por el IICA en dicha Estrategia, es la de reconocer y valorar el papel y la importancia de las mujeres rurales en el desarrollo de los territorios rurales, como un aspecto clave en el desarrollo de nuestros países y la construcción de sociedades más justas. De ahí, el interés y compromiso institucional del IICA en participar de manera activa y propositiva en esta iniciativa e impulsarla como herramienta que ayude no solo a la valoración del rol estratégico de las mujeres rurales, sino también el de movilizar el proceso de incidencia en políticas públicas promocionen oportunidades y propuestas efectivas para la igualdad y equidad de género. Para el IICA, además, esta Plataforma se constituye en una herramienta clave para la disminución de brechas en torno al acceso a servicios rurales, de apoyo productivo y de acceso a las Tecnologías de Información y Comunicación y la brecha digital que las mujeres rurales tienen en torno a ello. 
                            </p>
                            <p>
                            Más información en: <a href="https://www.iica.int/es" target="_blank">https://www.iica.int/es</a>  
                            </p>
                        </AboutPanel>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Gobernanza