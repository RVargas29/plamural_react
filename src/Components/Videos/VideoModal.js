import { Accordion, Button, Card, Modal } from "react-bootstrap";
import GenericField from "../Generic/GenericField";
import PNButtonGroup from "../Generic/PNButtonGroup";
import "./VideoModal.css";

const VideoModal = ({ video, videoIndex, show, videoCount, handleClose, handlePreviousNext }) => {
    if(show && video) {
        return (
            <Modal show={show} onHide={handleClose} size="lg" className="info-modal video-modal">
                <Modal.Header closeButton>
                    <Modal.Title>{ video.title }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Header>
                            <i className="fas fa-info-circle"></i> Video
                        </Card.Header>
                        <Card.Body>
                            <iframe src={video.video}></iframe>
                        </Card.Body>
                    </Card>                    
                </Modal.Body>
                <Modal.Footer>
                    <PNButtonGroup index={videoIndex} count={videoCount} handlePreviousNext={handlePreviousNext} />
                </Modal.Footer>
            </Modal>
        )
    }

    return null;
}

export default VideoModal;