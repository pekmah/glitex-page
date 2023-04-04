import React from 'react'
import Button from '../../../general/Button'

const GameDevs = () => {
    return (
        <div className="flex flex-col md:flex-row py-6 md:py-12 bg-white">
            {/* image div */}

            {/* text description div */}
            <div className="flex flex-col gap-6 flex-1 justify-center items-center">
                <div className="flex flex-col w-[85%] gap-4 md:gap-8">
                    <h5 className="text-2xl md:text-3xl font-semibold leading-8 sm:leading-10 lg:leading-[50px]">
                        Benefits of AI & Machine Learning
                    </h5>
                    {/* body */}
                    <div className="">
                        <p className="text-base md:text-lg mb-4 font-medium">
                            At Glitex Solutions Limited, we offer a wide range of services related to game software development. We work closely with our clients to understand their game concept and vision and provide comprehensive solutions to bring their ideas to life. Our services include game design, programming, graphics and animation, sound and music, quality assurance, platform support, and more. We specialize in developing games across various genres, including action, adventure, role-playing, simulation, and more. Our team of experienced and skilled game developers use the latest technologies and tools to deliver high-quality and engaging games that provide an immersive experience to players. Contact us today to learn more about our game software development services and how we can help you create your next game.
                        </p>
                    </div>
                    <div className="flex">
                        <Button
                            className={"bg-primary w-48 text-secondary text-base md:text-lg"}
                            text={"Call us Today!"}
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-1 p-6 h-full">
                <img
                    src="/images/projects/game-2.jpg"
                    alt="__"
                    className=" w-full object-contain"
                />
            </div>
        </div>
    )
}

export default GameDevs