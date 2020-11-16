import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getRecordCards } from "../api/record_cards";
import Record from "../Components/Record";
import RecordModal from "../Components/RecordModal";
import SectionHeader from "../Components/SectionHeader";
import "./RecordList.css";

const RecordList = () => {

    var [records, setRecords] = useState(null)
    var [loaded, setLoaded] = useState(false)
    var [currentRecord, setCurrentRecord] = useState(null);
    var [showModal, setShowModal] = useState(false);

    const handleOpen = (record) => {
        setCurrentRecord(record)
        setShowModal(true);
    } 

    const handleClose = () => {
        setCurrentRecord(null)
        setShowModal(false)
    }

    useEffect(() => {
        getRecordCards()
        .then((res) => {
            setRecords(res)
            setLoaded(true)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    if(loaded) {
        return (     
            <main>
                <section id="record-list" className="section-bg">         
                    <Container>
                        <SectionHeader text="Records" />
                        <Row>
                            { records.map((record) => {
                                return(
                                    <Record record={record} key={record.id} handleOpen={ handleOpen } />
                                )
                            }) }
                        </Row>
                    </Container>
                    <RecordModal record={ currentRecord } handleClose={ handleClose } show={ showModal }/>
                </section>
            </main>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }
    
}

export default RecordList;