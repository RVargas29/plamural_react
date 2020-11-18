import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";

import { getEvents } from "../api/events";
import Event from "../Components/Event";
import EventModal from "../Components/EventModal";
import SectionHeader from "../Components/SectionHeader";

const EventList = () => {
    var [events, setEvents] = useState(null)
    var [eventCount, setEventCount] = useState(0)
    var [currentEvent, setCurrentEvent] = useState(null)
    var [currentEventIndex, setcurrentEventIndex] = useState(0)
    var [loaded, setLoaded] = useState(false)    
    var [showModal, setShowModal] = useState(false)

    const handleOpen = (record, arrayPosition) => {
        setCurrentEvent(record)
        setcurrentEventIndex(arrayPosition)
        setShowModal(true);
    } 

    const handleClose = () => {
        setCurrentEvent(null)
        setcurrentEventIndex(0)
        setShowModal(false)
    }

    const handlePreviousNext = (arrayPosition) => {
        setCurrentEvent(events[arrayPosition])
        setcurrentEventIndex(arrayPosition)
    }

    useEffect(() => {
        getEvents()
        .then((res) => {
            setEvents(res)
            setEventCount(res.length)
            setLoaded(true)            
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    if(loaded) {
        return(
            <main>
                <section id="record-list" className="section-bg">         
                    <Container>
                        <SectionHeader text="Events" />
                        <Row>
                            {
                                events.map((event, index) => {
                                    return (
                                        <Event event={ event } arrayPosition={index} handleOpen={handleOpen} />
                                    )
                                })
                            }
                        </Row>
                    </Container>   
                    <EventModal event={ currentEvent } eventIndex={ currentEventIndex } handleClose={ handleClose } handlePreviousNext={ handlePreviousNext } show={ showModal } eventCount={ eventCount } />               
                </section>
            </main>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }

}

export default EventList;