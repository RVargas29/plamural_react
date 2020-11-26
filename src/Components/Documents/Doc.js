import { apiUrl as apiUrl } from '../../app.json';

import { ButtonGroup, Col } from "react-bootstrap"

import "./Doc.css"

const Doc = ({ doc, arrayPosition }) => {

    const tags = (tags) => {
        if(tags) {
            return (
                <div><strong>Categoria: </strong><span>{ tags }</span></div>                
            )
        }
    }

    const author = (author) => {
        if(author) {
            return (
                <div><strong>Autor: </strong><span>{ author }</span></div>                
            )
        }
    }

    const summary = (summary) => {
        if(summary) {
            return (
                <div><strong>Resumen: </strong><div dangerouslySetInnerHTML={{ __html: summary }}></div></div>                
            )
        }
    }

    return (
        <Col md="12">
            <div className="doc-container box">
                <h4 className="title">{ doc.title }</h4>
                <div>
                {author(doc.author)}
                <strong>País: </strong><span>{ doc.country }</span>
                { tags(doc.tags) }
                { summary(doc.summary) }
                <hr/>
                <ButtonGroup>
                    <a href={ apiUrl + doc.file } target="_blank" className="btn btn-primary"><i class="fas fa-file-download"></i> Descargar</a>
                </ButtonGroup>
                </div>
            </div>
        </Col>
    )
}

export default Doc;