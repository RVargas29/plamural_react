import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getRecordCards } from "../api/record_cards";
import Record from "../Components/Record";
import SectionHeader from "../Components/SectionHeader";

const RecordList = () => {

    var [records, setRecords] = useState(null);
    var [loaded, setLoaded] = useState(false)
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
                <section id="record-list">       
                    <Container>
                        <SectionHeader text="Records" />
                        <Row>
                            { records.map((record) => {
                                return(
                                    <Record record={record} key={record.id} />
                                )
                            }) }
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

export default RecordList;