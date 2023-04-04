import React from 'react'

const About = () => {
    return (
        <div
            className={
                "p-3 sm:p-5 md:p-8 lg:p-12 bg-primary text-center flex flex-col justify-center items-center"
            }
        >
            <h3 className="lg:text-4xl sm:text-2xl text-xl font-bold w-[95%] lg:w-[90%] leading-8 md:leading-10 lg:leading-[50px]">
                Game developers Nairobi Kenya | Game design
            </h3>

            <p className="md:my-6 lg:text-xl sm:text-lg w-[95%] lg:w-2/3 leading-8 lg:leading-9">
                Game development is the process of creating video games for various platforms, such as consoles, PCs, and mobile devices. It involves designing and coding game mechanics, creating game assets, and integrating sound and music.
            </p>
        </div>
    )
}

export default About