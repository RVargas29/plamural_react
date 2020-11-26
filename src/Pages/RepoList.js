import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getDocuments } from "../api/docs";
import Doc from "../Components/Documents/Doc";
import SectionHeader from "../Components/SectionHeader";

import "./RepoList.css"

const RepoList = ({ match }) => {
    var [docs, setDocs] = useState(null)
    var [docsCount, setDocsCount] = useState(0)
    var [loaded, setLoaded] = useState(false)    

    useEffect(() => {
        getDocuments()
        .then((res) => {
            setDocs(res)
            setDocsCount(res.length)
            setLoaded(true)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    if(loaded) {
        return (
            <main>
                <section id="repo-list" className="section-bg">
                    <Container>
                        <SectionHeader text="Repositorio de documentos"/>
                        <Row>
                            { docs.map((doc, index) => {
                                return(
                                    <Doc doc={doc} arrayPosition={index} />
                                )
                            })}
                        </Row>
                    </Container>
                </section>
            </main>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
}

export default RepoList;