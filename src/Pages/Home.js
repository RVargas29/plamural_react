const { default: About } = require("../Components/About")
const { default: Features } = require("../Components/Features")
const { default: MoreFeautres } = require("../Components/MoreFeatures")
const { default: PhotoGallery } = require("../Components/PhotoGallery")

const Home = () => {
    return(
        <main>
            <About />
            <Features />
            <MoreFeautres />    
            <PhotoGallery />        
        </main>
    )
}

export default Home;