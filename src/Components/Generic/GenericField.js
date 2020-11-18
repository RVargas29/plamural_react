const { Row, Col } = require("react-bootstrap");

const GenericField = ({ label, inline=true, html=false, children}) => {
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

export default GenericField;