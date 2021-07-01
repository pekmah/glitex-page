import SingleWork from "./single_work";

const Works = () => {
    return (
        <section id='works' className="s-works">
            <div className="intro-wrap">
                <div className="row section-header has-bottom-sep light-sep" data-aos="fade-up">
                    <div className="col-full">
                        <h3 className="subhead">Recent Works</h3>
                        <h1 className="display-2 display-2--light">We love what we do, check out some of our latest
                            projects</h1>
                    </div>
                </div>
            </div>
            <div className="row works-content">
                <div className="col-full masonry-wrap">
                    <div style={{minHeight: "100%"}} className="masonry">
                        <SingleWork
                            link={"#"}
                            title={"Destiny Capsules E-Book Store"}
                            image={"/images/portfolio/destiny_capsules/destiny_capsules.jpg"}
                            description={"An e-commerce application that sells books"}/>
                        <SingleWork
                            link={"#"}
                            title={"NPBC Portal"}
                            image={"/images/portfolio/npbc/npbc.jpg"}
                            description={"A school portal application"}/>
                        <SingleWork
                            link={"https://play.google.com/store/apps/details?id=com.glitexsolutions.nuru"}
                            title={"Nuru Mobile Application"}
                            image={"/images/portfolio/nuru_app/nuru_app.jpg"}
                            description={"A company thatimport Head from 'next/head' supplies waste incinerators"}/>
                        <SingleWork
                            link={"#"}
                            title={"Services Mobile Application"}
                            image={"/images/portfolio/services_app/services_app.jpg"}
                            description={"An information page for Destiny Capsules"}/>
                    </div>
                </div>
                <div className="col text-center">
                    <a style={{marginTop: "5rem"}}
                       href="/gallery" className="smoothscroll btn btn--stroke">Explore Gallery</a>
                </div>
            </div>
        </section>
    )
}

export default Works;