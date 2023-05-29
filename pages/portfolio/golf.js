import React from 'react'
import Footer from '../../components/pages/home/footer'
import Layout from '../../components/main/layout'
import Carousel from '../../components/general/Carousel'
import Description from '../../components/pages/portfolio/golf/Description'
import Gallery from '../../components/pages/portfolio/golf/Gallery'

const okapy = () => {
    return (
        <Layout>
            <Carousel
                title={
                    <div className="text-center leading-[50px]">
                        <span> Muthaiga Golf Club Application </span>
                    </div>
                }
                img={"/images/portfolio/typing-glitex.jpeg"}
                showClients={false}
                className={"h-[40vh]"}
            />

            {/* okapy description*/}
            <Description />

            {/* gallery */}
            <Gallery />

            <Footer />
        </Layout>
    )
}

export default okapy