import { useState } from "react";
import { Accordion, Button, Card, Modal } from "react-bootstrap";
import GenericField from "./Generic/GenericField";
import PNButtonGroup from "./Generic/PNButtonGroup";
import "./EventModal.css";

const EventModal = ({ event, eventIndex, show, eventCount, handleClose, handlePreviousNext }) => {
    
    if(show && event) {
        return (
            <Modal show={show} onHide={handleClose} size="lg" className="info-modal">
                <Modal.Header closeButton>
                    <Modal.Title>{ event.title }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    <i class="fas fa-info-circle"></i> Información general
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <GenericField label="Descripción" html="true" inline="false">{event.descripcion}</GenericField>  
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    <i class="fas fa-file"></i> Presentaciones y documentos
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <GenericField label="Presentaciones" html="true" inline="false">{event.presentaciones}</GenericField>  
                                    <GenericField label="Programa" inline="true"><a href={ "http://plamurural.local" + event.programa } rel="noreferrer" target="_blank">Descargar programa</a></GenericField>  
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    <i class="fas fa-video"></i> Video / Transmisión
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                    <div className="video-embed-container">
                                        <GenericField label="Transmisión / Video" html="true" inline="false">{event.video}</GenericField>  
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    
                </Modal.Body>
                <Modal.Footer>
                    <PNButtonGroup index={eventIndex} count={eventCount} handlePreviousNext={handlePreviousNext} />
                </Modal.Footer>
            </Modal>
        )
    }

    return null;
}

export default EventModal;