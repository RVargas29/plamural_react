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
    var [recordCount, setRecordCount] = useState(0)
    var [currentRecord, setCurrentRecord] = useState(null)
    var [currentRecordIndex, setcurrentRecordIndex] = useState(0)
    var [loaded, setLoaded] = useState(false)    
    var [showModal, setShowModal] = useState(false)

    const handleOpen = (record, arrayPosition) => {
        setCurrentRecord(record)
        setcurrentRecordIndex(arrayPosition)
        setShowModal(true);
    } 

    const handleClose = () => {
        setCurrentRecord(null)
        setcurrentRecordIndex(0)
        setShowModal(false)
    }

    const handlePreviousNext = (arrayPosition) => {
        setCurrentRecord(records[arrayPosition])
        setcurrentRecordIndex(arrayPosition)
    }

    useEffect(() => {
        getRecordCards()
        .then((res) => {
            setRecords(res)
            setRecordCount(res.length)
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
                            { records.map((record, index) => {
                                return(
                                    <Record record={record} arrayPosition={index} handleOpen={ handleOpen } />
                                )
                            }) }
                        </Row>
                    </Container>
                    <RecordModal record={ currentRecord } recordIndex={ currentRecordIndex } handleClose={ handleClose } handlePreviousNext={ handlePreviousNext } show={ showModal } recordCount={ recordCount }/>
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