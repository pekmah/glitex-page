import React from 'react';
import Layout from "../../components/main/layout";
import Carousel from "../../components/general/Carousel";
import About from "../../components/pages/projects/e_learning/about";
import Portfolio from "../../components/pages/projects/e_learning/portfolio";
import Features from "../../components/pages/projects/e_learning/features";
import WhatSetsApart from "../../components/pages/projects/e_learning/whatSetsApart";
import Footer from "../../components/pages/home/footer";

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
                        {/*<br className="hidden md:block"/>*/}
                        {/*<span>Kenya for Primary,Secondary Schools, </span>*/}
                        {/*<br className="hidden md:block"/>*/}
                        {/*<span>Colleges & Universities</span>*/}

                    </div>
                }
            />

            {/* About */}
            <About/>

            {/* best block... */}
            <Portfolio/>

            {/* why choose .... */}
            <Features/>

            {/* what sets us apart */}
            <WhatSetsApart/>

            <Footer/>
        </Layout>
    );
};

export default Ai;
