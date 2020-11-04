const { default: About } = require("../Components/About")
const { default: Features } = require("../Components/Features")

const Home = () => {
    return(
        <main>
            <About />
            <Features />
        </main>
    )
}

export default Home;