import { Col } from "react-bootstrap";

import "./Record.css"

const Record = ({ record }) => {

    const tags = (tags) => {
        if(tags) {
            return (
                <div><strong>Categoria: </strong><span>{ tags }</span></div>                
            )
        }
    }
       
    return(
        <Col md="4">
            <h3>{ record.nombre }</h3>
            <div>
                <strong>País: </strong><span>{ record.pais }</span>
                { tags(record.categoria) }
            </div>
        </Col>
    )

}

export default Record;