import { Col, Container, Row } from 'react-bootstrap';
import  SectionHeader  from "./SectionHeader";

import about_image from "../static/images/about-img.jpg";

import "./About.css"
import { useState } from 'react';
import AboutPanel from './Generic/AboutPanel';


const About = () => {

    const [ queEsDd, setQueEsDd ] = useState(false);
    const [ porQueDd, setPorQueDd ] = useState(false);
    const [ paraQueDd, setParaQueDd ] = useState(false);

    return(
        <section id="about" className="section-bg">
            <Container fluid>
                <SectionHeader text="¿Qué es la plataforma?" />
                <Row>
                    <Col lg="6" className="about-img wow fadeInLeft" style={{ visibility:"visible", animationName:"fadeInLeft" }}>
                        <img src={about_image} alt="About"/>
                    </Col>
                    <Col lg="6" className="content wow fadeInRight" style={{ visibility:"visible", animationName:"fadeInRight" }}>
                        <h2>Antecedentes</h2>
                        <p>                           
                            La REAF ha priorizado como uno de sus temas de trabajo, el de género, con énfasis en mujeres
                            rurales, y en los últimos años ha desarrollado una serie de acciones tendientes al diálogo sobre
                            políticas públicas e instrumentos de acción en beneficio de la equidad de género, la visibilidad de
                            las mujeres rurales, su empoderamiento económico y político. Los Programas de Género de la
                            REAF han contribuido al fortalecimiento de las organizaciones de mujeres y la promoción de la
                            equidad de género y la inclusión de las mujeres en la economía rural de sus países.            
                        </p>
                        <p>
                            Por su parte, el IICA ha venido consolidando sus esfuerzos hacia la transversalización del tema género y juventud en 
                            todo el quehacer institucional y en la cooperación técnica que brinda a sus países miembros. Una acción afirmativa de 
                            fuerte impulso desde el IICA, es la de reconocer y valorar el papel y la importancia de las mujeres rurales en el 
                            desarrollo de los territorios rurales, como un aspecto clave en el desarrollo de nuestros países y la construcción de 
                            sociedades más justas. 
                        </p>
                        <div id="accordion" className="panel-group">
                            <AboutPanel title="¿Que es?" collapseHandler={setQueEsDd} collapseVariable={queEsDd}>
                                Es un espacio presencial y virtual en red, de relacionamiento entre mujeres rurales del MERCOSUR ampliado, vinculado al eje temático autonomía económica e inserción comercial al mercado que busca valorar el rol estratégico de las mujeres rurales, movilizar el proceso de incidencia en políticas públicas promocionen oportunidades y propuestas efectivas para la igualdad y equidad de género.
                            </AboutPanel>
                            <AboutPanel title="¿Por qué?" collapseHandler={setPorQueDd} collapseVariable={porQueDd}>
                                Porque es necesario continuar construyendo el camino hacia la inclusión efectiva de mujeres rurales en el desarrollo de nuestros territorios y su autonomía económica, fortaleciendo el trabajo colaborativo y en red, al tiempo de disminuir las brechas con las que éstas se encuentran en torno al acceso a servicios rurales, de apoyo productivo y de acceso a las Tecnologías de Información y Comunicación, incluyendo la brecha digital.
                            </AboutPanel>
                            <AboutPanel title="¿Para qué?" collapseHandler={setParaQueDd} collapseVariable={paraQueDd}>
                                Para capitalizar las trayectorias, experiencias recorridas por las propias mujeres rurales desde sus emprendimientos; para rescatar los avances en términos de políticas públicas en temas de género; para reforzar el ejercicio de diálogo, intercambio, interacción, colaboración y cooperación mutua entre pares; para el rescate y aprendizaje a partir de experiencias y lecciones capitalizadas por las mujeres rurales en sus emprendimientos; y, para potenciar sus capacidades sociales, organizativas, técnicas y de participación efectiva.
                            </AboutPanel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;