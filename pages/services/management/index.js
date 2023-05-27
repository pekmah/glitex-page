import React from 'react'
import Carousel from '../../../components/general/Carousel'
import Layout from '../../../components/main/layout'
import Footer from '../../../components/pages/home/footer'
import About from '../../../components/pages/projects/management/About'
import AreYouInNeed from '../../../components/pages/projects/management/AreYouInNeed'
import Portfolio from '../../../components/pages/projects/management/Portfolio'

const Management = () => {
    return (
        <Layout>
            <Carousel
                title={
                    <div className="text-center leading-8 lg:leading-[50px] mt-5 md:mt-0">
                        <p className={" mx-auto mt-5"}>
                            Management Information Systems
                        </p>
                    </div>
                }
            />

            {/* About */}
            <About />

            {/* Portfolio */}
            <Portfolio />

            {/* Are you in need */}
            <AreYouInNeed />

            {/* Footer */}
            <Footer />

        </Layout>
    )
}

export default Management