import React from 'react'
import Carousel from '../../../components/general/Carousel'
import Layout from '../../../components/main/layout'
import Footer from '../../../components/pages/home/footer'
import About from '../../../components/pages/projects/management/sacco/About'
import AreYouInNeed from '../../../components/pages/projects/management/sacco/AreYouInNeed'
import Features from '../../../components/pages/projects/management/sacco/Features'

const sacco = () => {
    return (
        <Layout>
            <Carousel
                title={
                    <div className="text-center leading-8 lg:leading-[50px] mt-5 md:mt-0">
                        <p className={"lg:w-[90%] mx-auto mt-5"}>
                            SACCO Management System Kenya
                        </p>
                    </div>
                }
            />

            {/* About */}
            <About />

            {/* Health System Features... */}
            <Features />

            {/* what sets us apart */}
            <AreYouInNeed />

            <Footer />
        </Layout>
    )
}

export default sacco