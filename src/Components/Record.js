import { Col } from "react-bootstrap";

const Record = ({ record }) => {

    const tags = (tags) => {
        if(tags) {
            return (
                <div><strong>Tags: </strong><span>{ tags }</span></div>                
            )
        }
    }
       
    return(
        <Col md="4">
            <h3>{ record.title }</h3>
            <div>
                <strong>Country: </strong><span>{ record.countries }</span>
            </div>
        </Col>
    )

}

export default Record;