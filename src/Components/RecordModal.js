import { render } from "@testing-library/react";
import { Button, ButtonGroup, Col, Modal, Row } from "react-bootstrap";
import "./RecordModal.css";

const RecordField = ({ label, inline=true, html=false, children}) => {
    const renderChildren = (children) => {
        if(!html) {
            return (
                <span>{children}</span>
            );
        } else {
            return (
                <div dangerouslySetInnerHTML={{ __html: children }}></div>
            )
        }
    }
    if(children) {
        if(inline) {
            return (
                <Row>
                    <Col md="12"> <strong>{label}: </strong> { renderChildren(children) }</Col>
                </Row>
            )
        } else {
            <Row>
                <Col md="12"> <strong>{label}: </strong></Col>
                <Col md="12">{ renderChildren(children) }</Col>
            </Row>
        }        
    }
    return null;
}

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

const PNButtonGroup = ({recordIndex, recordCount, handlePreviousNext}) => {
    var handlePreviousNextCallback = handlePreviousNext
    var previous = null;
    var next = null;
    if(recordIndex > 0) {
        previous = (
            <Button variant="primary" onClick={() => {handlePreviousNextCallback(recordIndex-1)}}>
                Anterior
            </Button>
        )
    }
    if(recordIndex < recordCount - 1) {
        next = (
            <Button variant="primary" onClick={() => {handlePreviousNextCallback(recordIndex+1)}}>
                Siguiente
            </Button>
        )
    }
    return(
        <ButtonGroup>                        
            {previous}
                {next}
        </ButtonGroup>
    )
}

const RecordModal = ({record, recordIndex, show, recordCount, handleClose, handlePreviousNext}) => {
    
    if(show) {
        return(
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{ record.nombre }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RecordField label="Forma de acceso">{record.acceso}</RecordField>
                    <RecordField label="Institucion">{record.institucion}</RecordField>
                    <RecordField label="Año de inicio">{record.anno}</RecordField>
                    <RecordField label="Referente de registro">{record.referente}</RecordField>
                    <RecordLink label="Correo referente" email="true">{record.contacto}</RecordLink>
                    <RecordLink label="Link">{record.link}</RecordLink>   
                    <hr/>
                    <RecordField label="Linea de acción" inline="false">{record.linea_accion}</RecordField>           
                    <RecordField label="Descripción general" html="true" inline="false">{record.descripcion}</RecordField>      
                    <RecordField label="Objetivos" html="true" inline="false">{record.objetivo}</RecordField>                    
                    <RecordField label="Población objetivo" html="true" inline="false">{record.poblacion_objetivo}</RecordField>                    
                    <RecordField label="Razones de interés" html="true" inline="false">{record.razon_interes}</RecordField>
                    <RecordField label="Evaluación de impacto" html="true" inline="false">{record.evaluacion_impacto}</RecordField>
                    <hr/>
                    <AlcanceTable subsidios_produccion={record.subsidios_produccion} credito={record.credito} asistencia_tecnica={record.asistencia_tecnica} capacitacion={record.capacitacion} />
                </Modal.Body>
                <Modal.Footer>
                    <PNButtonGroup recordIndex={recordIndex} recordCount={recordCount} handlePreviousNext={handlePreviousNext} />
                </Modal.Footer>
            </Modal>
        )
    }
    return null;
}

export default RecordModal;