import React from 'react'
import Carousel from '../../../components/general/Carousel'
import Layout from '../../../components/main/layout'
import Footer from '../../../components/pages/home/footer'
import About from '../../../components/pages/projects/management/school/About'
import AreYouInNeed from '../../../components/pages/projects/management/school/AreYouInNeed'
import Features from '../../../components/pages/projects/management/school/Features'

const school = () => {
    return (
        <Layout>
            <Carousel
                title={
                    <div className="text-center leading-8 lg:leading-[50px] mt-5 md:mt-0">
                        <p className={"lg:w-[90%] mx-auto mt-5"}>
                            School Management System with both Android and IOS Apps in Nairobi, Kenya
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

export default school