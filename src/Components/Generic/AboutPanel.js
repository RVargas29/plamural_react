import { Collapse } from 'react-bootstrap';

const AboutPanel = ({ title, collapseVariable, collapseHandler, children }) => {

    var handleCollapse = collapseHandler;

    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a href="#" onClick={ (e) => { e.preventDefault(); handleCollapse(!collapseVariable) }}>
                        <div style={{color:"cadetblue"}}><i className="far fa-check-square"></i> {title}</div>
                    </a>
                </h4>
            </div>
            <Collapse id="collapse1" className="panel-collapse" in={collapseVariable}>
                <div className="panel-body">
                    {children}
                </div>
            </Collapse>
        </div>
    )
}

export default AboutPanel