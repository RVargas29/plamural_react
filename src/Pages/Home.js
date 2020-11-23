import EventList from "./EventList"

const { default: About } = require("../Components/About")
const { default: Features } = require("../Components/Features")
const { default: PhotoGallery } = require("../Components/PhotoGallery")

const Home = () => {
    return(
        <main>
            <About />
            <Features />
            <EventList page="home"/>    
            <PhotoGallery />        
        </main>
    )
}

export default Home;