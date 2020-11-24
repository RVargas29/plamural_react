import intro_left from '../static/images/intro-left.jpg';
import intro_right from '../static/images/intro-right.jpg';

import "./Intro.css"

const Intro = () => {
    return(
        <section id="intro">
            <div className="intro-text">
                <h2>Plataforma de Mujeres Rurales Emprendedoras</h2>                
                <h2>del MERCOSUR Ampliado</h2>
            </div>
            <div className="product-screens">
                <div className="product-screen-left wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s" style={{ visibility: "visible", animationDuration: "0.6s", animationDelay: "0.4s", animationName: "fadeInUp" }}>
                    <img src={intro_left} alt="" style={{ borderRadius:"280px" }} width="30%;"/>
                </div>
                <div className="product-screen-right wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s" style={{ visibility: "visible", animationDuration: "0.6s", animationDelay: "0.4s", animationName: "fadeInUp" }}>
                    <img src={intro_right} alt="" style={{ borderRadius:"280px" }} width="42%;" />
                </div>
            </div>
        </section>        
    );
}

export default Intro;