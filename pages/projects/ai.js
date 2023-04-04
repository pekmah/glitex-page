import React from 'react';
import Layout from "../../components/main/layout";
import Carousel from "../../components/general/Carousel";
import Footer from "../../components/pages/home/footer";
import About from '../../components/pages/projects/ai/About';
import Portfolio from '../../components/pages/projects/ai/Portfolio';
import OurFocus from '../../components/pages/projects/ai/OurFocus';
import Benefits from '../../components/pages/projects/ai/Benefits';

const Ai = () => {
    return (
        <Layout>
            <Carousel
                title={
                    <div className="text-center leading-8 lg:leading-[50px] mt-5 md:mt-0">
                        <p className={"w-[80%] mx-auto mt-5"}>AI and ML (Artificial Intelligence & Machine learning)
                            Developers in
                            Nairobi
                            Kenya | Glitex Solutions Limited </p>
                    </div>
                }
            />

            {/* About */}
            <About/>

            {/* AI portfolio... */}
            <Portfolio/>

            {/* Our Focus .... */}
            <OurFocus />

            {/* what sets us apart */}
            <Benefits />

            <Footer/>
        </Layout>
    );
};

export default Ai;
