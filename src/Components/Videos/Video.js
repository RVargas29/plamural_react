import { apiUrl as apiUrl } from '../../app.json';

import { ButtonGroup, Col } from "react-bootstrap"

import "./Video.css"
import { Link } from 'react-router-dom';

const Video = ({ video, handleOpen, arrayPosition }) => {
    var handleOpenCallback = handleOpen

    const transformVideoImage = (image) => {
        return image.replace('src="/', 'src="' + apiUrl)
    }

    return (
        <Col md="6">
            <div className="box wow video-container">                
                <div className="image-wrapper">         
                    <Link onClick={ () => {
                        handleOpenCallback(video, arrayPosition)
                    } }>
                        <i class="far fa-play-circle"></i>
                        <div dangerouslySetInnerHTML={{ __html:transformVideoImage(video.video_imagen) }}>
                        </div>   
                    </Link>
                </div>
                <h4 className="title">{ video.title }</h4>
            </div>
        </Col>
    )
}

export default Video;