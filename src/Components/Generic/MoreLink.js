const { Row, Col } = require("react-bootstrap");
const { Link } = require("react-router-dom");

const MoreLink = ({ text="Ver más", link }) => {

    return (
        <Row>
            <Col md={{ span:2, offset:5 }}>
                <Link to={ link } className="btn btn-secondary">
                    <i className="fas fa-list"></i> {text}
                </Link>
            </Col>
        </Row>
        
    )

}

export default MoreLink;