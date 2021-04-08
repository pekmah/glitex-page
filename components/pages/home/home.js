const Home = () => {
    return (
        <section id="home" className="s-home target-section"
                 data-parallax="scroll"
                 data-image-src="images/hero-bg.jpg"
                 data-natural-width="3000" data-natural-height="2000" data-position-y="center">
            <div className="overlay"/>
            <div className="shadow-overlay"/>
            <div className="home-content">
                <div className="row home-content__main">
                    <h1 style={{fontSize: "15rem"}}>
                       GLITEX
                    </h1>
                    <h1 className="display-3">
                        Solutions
                    </h1>
                    <h3 className="display-3">
                        You Deserve Quality!
                    </h3>
                    <div className="home-content__buttons">
                        <a href="#contact" className="smoothscroll btn btn--stroke">
                            Enquire
                        </a>
                        <a href="#about" className="smoothscroll btn btn--stroke">
                            More About Us
                        </a>
                    </div>
                </div>
                <div className="home-content__scroll">
                    <a href="#about" className="scroll-link smoothscroll">
                        <span>Scroll Down</span>
                    </a>
                </div>
                <div className="home-content__line"/>
            </div>
            <ul className="home-social">
                <li>
                    <a href="#0"><i className="fa fa-facebook" aria-hidden="true"/><span>Facebook</span></a>
                </li>
                <li>
                    <a href="#0"><i className="fa fa-twitter" aria-hidden="true"/><span>Twiiter</span></a>
                </li>
                <li>
                    <a href="#0"><i className="fa fa-instagram" aria-hidden="true"/><span>Instagram</span></a>
                </li>
                <li>
                    <a href="#0"><i className="fa fa-behance" aria-hidden="true"/><span>Behance</span></a>
                </li>
                <li>
                    <a href="#0"><i className="fa fa-dribbble" aria-hidden="true"/><span>Dribbble</span></a>
                </li>
            </ul>
        </section>
    )
}

export default Home;