import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";

import { getVideos } from "../api/videos";
import SectionHeader from "../Components/SectionHeader";
import Video from "../Components/Videos/Video";
import VideoModal from "../Components/Videos/VideoModal";

import "./VideoList.css"

const VideoList = ({ match }) => {
    var [videos, setVideos] = useState(null)
    var [videoCount, setVideoCount] = useState(0)
    var [currentVideo, setCurrentVideo] = useState(null)
    var [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    var [loaded, setLoaded] = useState(false)    
    var [showModal, setShowModal] = useState(false)

    const handleOpen = (doc, arrayPosition) => {
        setCurrentVideo(doc)
        setCurrentVideoIndex(arrayPosition)
        setShowModal(true);
    } 

    const handleClose = () => {
        setCurrentVideo(null)
        setCurrentVideoIndex(0)
        setShowModal(false)
    }

    const handlePreviousNext = (arrayPosition) => {
        setCurrentVideo(videos[arrayPosition])
        setCurrentVideoIndex(arrayPosition)
    }

    useEffect(() => {
        getVideos()
        .then((res) => {
            setVideos(res)
            setVideoCount(res.length)
            setLoaded(true)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    if(loaded) {
        return(
            <main>
                <a className="anchor" id="anchor-video-list"></a>
                <section id="video-list" className="section-bg">
                    <Container>
                        <SectionHeader text="Mujeres emprendedoras"/>
                        <Row>
                            {
                                videos.map((video, index) => {
                                    return (
                                        <Video video={ video } handleOpen={ handleOpen } arrayPosition={ index } />
                                    )
                                })
                            }
                        </Row>
                    </Container>
                    <VideoModal video={ currentVideo } videoIndex={ currentVideoIndex } handleClose={ handleClose } handlePreviousNext={ handlePreviousNext } show={ showModal } videoCount={ videoCount } />
                </section>
            </main>
        )
    } else {
        return (            
            <section>
                <a className="anchor" id="anchor-video-list"></a>
                <h1>Cargando videos...</h1>
            </section>            
        )
    }
}

export default VideoList