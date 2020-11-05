const { default: About } = require("../Components/About")
const { default: Features } = require("../Components/Features")
const { default: MoreFeautres } = require("../Components/MoreFeatures")

const Home = () => {
    return(
        <main>
            <About />
            <Features />
            <MoreFeautres />
        </main>
    )
}

export default Home;