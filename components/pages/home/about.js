const About = () => {
    return (
        <section id='about' className="s-about">
            <div className="row section-header has-bottom-sep" data-aos="fade-up">
                <div className="col-full">
                    <h3 className="subhead subhead--dark">Hello There</h3>
                    <h1 className="display-1 display-1--light">We Are Glitex Solutions</h1>
                </div>
            </div>
            <div className="row about-desc" data-aos="fade-up">
                <div className="col-full">
                    <p>
                        We believe in transforming ideas into reality through technology and
                        are therefore dedicated to providing you
                        with quality software solutions for your personal and business
                        needs.

                        You can count on us to deliver the quality you need to push your business to
                        the next level.
                    </p>
                </div>
            </div>
            <div className="row about-stats stats block-1-4 block-m-1-2 block-mob-full" data-aos="fade-up">
                {/*<div className="col-block stats__col ">
                    <div className="stats__count">127</div>
                    <h5>Awards Received</h5>
                </div>
                <div className="col-block stats__col">
                    <div className="stats__count">1505</div>
                    <h5>Cups of Coffee</h5>
                </div>*/}
                <div className="col-block stats__col"/>
                <div className="col-block stats__col">
                    <div className="stats__count">12</div>
                    <h5>Projects Completed</h5>
                </div>
                <div className="col-block stats__col">
                    <div className="stats__count">12</div>
                    <h5>Happy Clients</h5>
                </div>
            </div>
            <div className="about__line"/>
        </section>
    )
}

export default About;