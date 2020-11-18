import { useState } from "react";
import { Button, ButtonGroup, Col, Modal, Row } from "react-bootstrap";
import GenericField from "./Generic/GenericField";
import PNButtonGroup from "./Generic/PNButtonGroup";
import "./RecordModal.css";

const EventModal = ({ event, eventIndex, show, eventCount, handleClose, handlePreviousNext }) => {
    
    var [programa, setPrograma] = useState(null)
    var [hasLoaded, setHasLoaded] = useState(false)
    
    if(show && event) {
        return (
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{ event.title }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <GenericField label="Descripción" html="true" inline="false">{event.descripcion}</GenericField>  
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