import React from 'react'
import OutlinedButton from '../../../general/OutlinedButton'

const Portfolio = () => {
    return (
        <div className={"bg-secondary py-4 md:py-8 flex flex-col gap-2"}>
            <div className="flex flex-col md:flex-row my-4">
                {/* image div */}
                <div className="flex flex-row items-center justify-center flex-[0.8] p-4 md:p-10">
                    <img
                        src="/images/projects/game-1.jpg"
                        alt="__"
                        className=" object-contain w-full "
                    />
                </div>
                {/* text description div */}
                <div className="flex flex-col gap-3 md:gap-6 flex-1 justify-start text-primary justify-center pt-8">
                    <h5 className="text-2xl px-2 md:px-0 md:text-3xl font-medium">
                        Game Development
                    </h5>
                    {/* body */}
                    <p className="text-base md:text-lg w-11/12 mx-auto md:mx-0 ">
                        At Glitex Solutions Limited, we offer a wide range of services related to game software development. We work closely with our clients to understand their game concept and vision and provide comprehensive solutions to bring their ideas to life. Our services include game design, programming, graphics and animation, sound and music, quality assurance, platform support, and more. We specialize in developing games across various genres, including action, adventure, role-playing, simulation, and more. Our team of experienced and skilled game developers use the latest technologies and tools to deliver high-quality and engaging games that provide an immersive experience to players. Contact us today to learn more about our game software development services and how we can help you create your next game.
                    </p>

                    <div className="flex px-3">
                        <OutlinedButton
                            className={"border-primary text-primary border-2 text-lg w-44"}
                            text={"Portfolio"}
                        />
                    </div>
                    {/* view more button */}
                </div>
            </div>
        </div>
    )
}

export default Portfolio