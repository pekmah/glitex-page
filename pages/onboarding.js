import React from 'react'
import Carousel from '../components/general/Carousel'
import Layout from '../components/main/layout'
import Footer from '../components/pages/home/footer'
import Tree from '../components/pages/onboarding/Tree'

const onboarding = () => {
    return (
        <Layout>
            <Carousel
                title={
                    <div className="text-center leading-8 lg:leading-[50px] mt-5 md:mt-0">
                        <p className={"mx-auto mt-5"}>
                            Onboarding processs
                        </p>
                    </div>
                }
                img={"/images/typing.jpg"}
            />

            <Tree />

            <Footer />
        </Layout>
    )
}

export default onboarding