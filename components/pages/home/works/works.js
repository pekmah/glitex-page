import TheGallery from "../../gallery";

const Works = () => {
    return (
        <section style={{paddingBottom: 0}} id='works' className="s-works">
            <div style={{
                paddingBottom: 0,
                paddingTop: "10rem"
            }} className="intro-wrap">
                <div style={{marginBottom: "0"}} className="row section-header has-bottom-sep light-sep"
                     data-aos="fade-up">
                    <div className="col-full">
                        <h3 className="subhead">Recent Works</h3>
                        <h1 className="display-2 display-2--light">We love what we do, check out some of our latest
                            projects</h1>
                    </div>
                </div>
            </div>
            <div style={{
                paddingBottom: 0,
                paddingTop: "1rem"
            }} className="intro-wrap">
                <TheGallery dontShowNav={true}/>
            </div>
            <div style={{backgroundColor: "#111111",}}>
                <div style={{
                    marginTop: "0",
                }} className="row works-content">
                    <div className="col text-center">
                        <a style={{marginTop: "5rem"}}
                           href="/gallery" className="smoothscroll btn btn--stroke">Explore Gallery</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works;