import { Button, ButtonGroup, Col } from "react-bootstrap";

import "./Event.css";

const Event = ({ event, handleOpen, arrayPosition }) => {
    var handleOpenCallback = handleOpen;

    return (
        <Col md="6">
            <div className="box wow event-container">
                <div className="icon"><i className="fas fa-calendar-alt"></i></div>
                <h4 className="title">{ event.title }</h4>
                <div className="description">
                    <div>
                        <strong>Fecha y hora: </strong><span>{ event.fecha }</span>
                    </div>
                    <ButtonGroup>
                        <Button onClick={ () => {
                            handleOpenCallback(event, arrayPosition)
                        } }><i className="fas fa-file"></i> Más información</Button>
                    </ButtonGroup>
                </div>
            </div>
        </Col>
    )
}

export default Event;