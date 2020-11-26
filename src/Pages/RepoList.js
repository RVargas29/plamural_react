import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getDocuments } from "../api/docs";
import Doc from "../Components/Documents/Doc";
import SectionHeader from "../Components/SectionHeader";

const RepoList = ({ match }) => {
    var [docs, setDocs] = useState(null)
    var [docsCount, setDocsCount] = useState(0)
    var [currentDoc, setCurrentDoc] = useState(null)
    var [currentDocIndex, setCurrentDocIndex] = useState(0)
    var [loaded, setLoaded] = useState(false)    
    var [showModal, setShowModal] = useState(false)

    const handleOpen = (doc, arrayPosition) => {
        currentDoc(doc)
        currentDocIndex(arrayPosition)
        setShowModal(true);
    } 

    const handleClose = () => {
        setCurrentDoc(null)
        setCurrentDocIndex(0)
        setShowModal(false)
    }

    const handlePreviousNext = (arrayPosition) => {
        setCurrentDoc(docs[arrayPosition])
        setCurrentDocIndex(arrayPosition)
    }

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
                                    <Doc doc={doc} arrayPosition={index} handleOpen={handleOpen} />
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