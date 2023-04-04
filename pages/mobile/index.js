import React from "react";
import Carousel from "../../components/general/Carousel";
import Layout from "../../components/main/layout";
import Footer from "../../components/pages/home/footer";
import About from "../../components/pages/mobile/About";
import AndroidDevs from "../../components/pages/mobile/AndroidDevs";
import AreYouInSearch from "../../components/pages/mobile/AreYouInSearch";
import BestMobileDevs from "../../components/pages/mobile/BestMobileDevs";
import Types from "../../components/pages/mobile/Types";
import Slider from "../../components/pages/portfolio/Slider";

const Mobile = () => {
    return (
        <Layout>
            <Carousel
                title={
                    <div className="text-center leading-10 md:leading-[50px] mt-8">
                        <span>Mobile App developers in Kenya </span>
                        <br className="hidden md:block" />
                        <span>Android apps | IOS apps </span>
                    </div>
                }
            />

            <About />
            {/* Android and IOS apps developers in Kenya */}
            <AndroidDevs />

            {/* Best mobile app Developers in Kenya */}
            <BestMobileDevs />

            {/* Types of mobile apps */}
            <Types />

            {/* Carousel slider: some of the apps we have built*/}
            <div className="md:block hidden">
                <Slider />  
            </div>
            {/* Are you in */}
            <AreYouInSearch />
            {/* Footer */}
            <Footer />
        </Layout>
    );
};

export default Mobile;
