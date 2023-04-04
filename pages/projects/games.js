import React from 'react'
import Carousel from '../../components/general/Carousel'
import Layout from '../../components/main/layout'
import Footer from '../../components/pages/home/footer'
import About from '../../components/pages/projects/games/About'
import GameDevs from '../../components/pages/projects/games/GameDevs'
import Portfolio from '../../components/pages/projects/games/Portfolio'
import Process from '../../components/pages/projects/games/Process'

const games = () => {
    return (
        <Layout>
            <Carousel
                title={
                    <div className="text-center leading-8 lg:leading-[50px] mt-5 md:mt-0">
                        <p className={"w-[80%] mx-auto mt-5"}>
                            Game developers Nairobi Kenya | Game design
                        </p>

                    </div>
                }
            />

            {/* About */}
            <About />

            {/* AI portfolio... */}
            <Portfolio />

            {/* Our Focus .... */}
            <Process />

            {/* what sets us apart */}
            <GameDevs />

            <Footer />
        </Layout>

    )
}

export default games