import  SectionHeader  from "./SectionHeader";

import './PhotoGallery.css'

import gallery_1 from "../static/images/gallery/gallery-1.png";
import gallery_2 from "../static/images/gallery/gallery-2.png";
import gallery_3 from "../static/images/gallery/gallery-3.png";
import gallery_4 from "../static/images/gallery/gallery-4.png";
import gallery_5 from "../static/images/gallery/gallery-5.png";
import gallery_6 from "../static/images/gallery/gallery-6.png";
import Gallery from "react-photo-gallery";
import { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

const photos = [
    {
        src: gallery_1,
        width: 1,
        height: 1
    },
    {
        src: gallery_2,
        width: 1,
        height: 1
    },
    {
        src: gallery_3,
        width: 1,
        height: 1
    },
    {
        src: gallery_4,
        width: 1,
        height: 1
    },
    {
        src: gallery_5,
        width: 1,
        height: 1
    },
    {
        src: gallery_6,
        width: 1,
        height: 1
    },
]

const PhotoGallery = () => {

    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)

    const openLightbox = useCallback((event, {photo, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    })

    const closeLightBox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    }

    return (
        <section id="photo-gallery">
            <SectionHeader text="Galería">
                Reconocimiento al papel decisivo de la mujeres en el desarrollo, la seguridad alimentaria y la erradicación de la pobreza.
            </SectionHeader>
            <div className="container">
                <Gallery photos={photos} columns={3} onClick={ openLightbox }/>
                <ModalGateway>
                    {
                        viewerIsOpen ? (
                            <Modal onClose={closeLightBox}>
                                <Carousel
                                currentIndex={currentImage}
                                views={
                                    photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))
                                }/>
                            </Modal>
                        ) : null
                    }
                </ModalGateway>
            </div>            
        </section>
    )
}

export default PhotoGallery;