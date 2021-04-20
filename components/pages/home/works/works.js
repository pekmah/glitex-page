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
                    <div className="masonry">
                        <SingleWork
                            link={"https://destinycapsules.co.ke/"}
                            title={"E-Book Store"}
                            image={"/images/portfolio/woodcraft.jpg"}
                            description={"An e-commerce application that sells books"}/>
                        <SingleWork
                            link={"https://calculators.kenlan.co.ke/"}
                            title={"Kenlan Calculators"}
                            image={"/images/portfolio/woodcraft.jpg"}
                            description={"An application that facilitates finance calculations"}/>
                        <SingleWork
                            link={"https://www.systechfabrication.co.ke/"}
                            title={"Systec Fabrication Services"}
                            image={"/images/portfolio/woodcraft.jpg"}
                            description={"A company that supplies waste incinerators"}/>
                        <SingleWork
                            link={"https://destinycapsules.com"}
                            title={"Destiny Capsules Information Page"}
                            image={"/images/portfolio/woodcraft.jpg"}
                            description={"An information page for Destiny Capsules"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works;