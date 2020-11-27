import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";

import { getEvents } from "../api/events";
import Event from "../Components/Events/Event";
import EventModal from "../Components/Events/EventModal";
import MoreLink from "../Components/Generic/MoreLink";
import SectionHeader from "../Components/SectionHeader";

import "./EventList.css";

const EventList = ({ page="list" }) => {
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
        getEvents(page)
        .then((res) => {
            setEvents(res)
            setEventCount(res.length)
            setLoaded(true)            
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    const renderMoreLink = (page) =>{
        if(page == "home" && eventCount > 4) {
            
            return (
                <MoreLink link='/events' />
            )
        }

        return null;
    }

    if(loaded) {
        return(
            <main>
                <a className="anchor" id="anchor-event-list"></a>
                <section id="event-list" className="section-bg">         
                    <Container>
                        <SectionHeader text="Eventos y Foros" />
                        <Row>
                            {
                                events.map((event, index) => {
                                    return (
                                        <Event event={ event } arrayPosition={index} handleOpen={handleOpen} />
                                    )
                                })
                            }
                        </Row>
                        {renderMoreLink(page)}
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