import React from 'react'
import Carousel from '../../../components/general/Carousel'
import Layout from '../../../components/main/layout'
import Footer from '../../../components/pages/home/footer'
import About from '../../../components/pages/projects/management/hospital/About'
import AreYouInSearch from '../../../components/pages/projects/management/hospital/AreYouInSearch'
import Features from '../../../components/pages/projects/management/hospital/Features'

const Health = () => {
    return (
        <Layout>
            <Carousel
                title={
                    <div className="text-center leading-8 lg:leading-[50px] mt-5 md:mt-0">
                        <p className={" mx-auto mt-5"}>
                            Hospital Management information System Kenya | HMIS System in Kenya
                        </p>
                    </div>
                }
            />

            {/* About */}
            <About />

            {/* Health System Features... */}
            <Features />

            {/* what sets us apart */}
            <AreYouInSearch />

            <Footer />
        </Layout>
    )
}

export default Health