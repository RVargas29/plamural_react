import { Button, ButtonGroup, Col } from "react-bootstrap";

import "./Record.css"

const Record = ({ record, handleOpen, arrayPosition }) => {

    var handleOpenCallback = handleOpen;

    const tags = (tags) => {
        if(tags) {
            return (
                <div><strong>Categoria: </strong><span>{ tags }</span></div>                
            )
        }
    }
       
    return(
        <Col md="6">
            <div className="record-container box">
                <h4 className="title">{ record.nombre }</h4>
                <div>
                    <strong>País: </strong><span>{ record.pais }</span>
                    { tags(record.categoria) }
                    <ButtonGroup>
                        <Button onClick={ () => {
                            handleOpenCallback(record, arrayPosition)
                        } }><i class="fas fa-info"></i> Más información</Button>
                    </ButtonGroup>
                </div>
            </div>
        </Col>
    )

}

export default Record;