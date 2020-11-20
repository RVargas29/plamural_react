import { render } from "@testing-library/react";
import { Accordion, Button, ButtonGroup, Card, Col, Modal, Row } from "react-bootstrap";
import GenericField from "./Generic/GenericField";
import PNButtonGroup from "./Generic/PNButtonGroup";
import "./RecordModal.css";

const RecordLink = ({ label, children, email=false }) => {
    if(children) {
        return (
            <Row>
                <Col md="12"> <strong>{label}: </strong> <span><a href={ email ? "mailto:" + children : children } target="_blank"> { children } </a></span></Col>
            </Row>
        )
    }
    return null;
}

const AlcanceTable = ({ subsidios_produccion, credito, asistencia_tecnica, capacitacion }) => {
    return (
        <Row>
            <Col md="12">
                <h4>Alcance</h4>
                <table className="table table-bordered">
                    <tr>
                        <th>Subsidios</th>
                        <th>Créditos</th>
                        <th>Asistencia técnica</th>
                        <th>Capacitación</th>
                    </tr>
                    <tr>
                        <td>{subsidios_produccion}</td>
                        <td>{credito}</td>
                        <td>{asistencia_tecnica}</td>
                        <td>{capacitacion}</td>
                    </tr>
                </table>
            </Col>
        </Row>
    )
}

const RecordModal = ({record, recordIndex, show, recordCount, handleClose, handlePreviousNext}) => {
    
    if(show && record) {
        return(
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{ record.nombre }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Información general
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <GenericField label="Forma de acceso">{record.acceso}</GenericField>
                            <GenericField label="Institucion">{record.institucion}</GenericField>
                            <GenericField label="Año de inicio">{record.anno}</GenericField>
                            <GenericField label="Referente de registro">{record.referente}</GenericField>
                            <GenericField label="Correo referente" email="true">{record.contacto}</GenericField>
                            <GenericField label="Link">{record.link}</GenericField>   
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Detalle
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <GenericField label="Linea de acción" inline="false">{record.linea_accion}</GenericField>           
                            <GenericField label="Descripción general" html="true" inline="false">{record.descripcion}</GenericField>      
                            <GenericField label="Objetivos" html="true" inline="false">{record.objetivo}</GenericField>                    
                            <GenericField label="Población objetivo" html="true" inline="false">{record.poblacion_objetivo}</GenericField>                    
                            <GenericField label="Razones de interés" html="true" inline="false">{record.razon_interes}</GenericField>
                            <GenericField label="Evaluación de impacto" html="true" inline="false">{record.evaluacion_impacto}</GenericField>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            Alcance
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <AlcanceTable subsidios_produccion={record.subsidios_produccion} credito={record.credito} asistencia_tecnica={record.asistencia_tecnica} capacitacion={record.capacitacion} />
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>                                        
                </Modal.Body>
                <Modal.Footer>
                    <PNButtonGroup index={recordIndex} count={recordCount} handlePreviousNext={handlePreviousNext} />
                </Modal.Footer>
            </Modal>
        )
    }
    return null;
}

export default RecordModal;