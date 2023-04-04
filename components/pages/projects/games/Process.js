import React from 'react'

const Process = () => {
    return (
        <div
            className={" bg-primary text-center flex flex-col justify-center py-12"}
        >
            <h3 className="lg:text-4xl sm:text-3xl text-2xl font-bold lg:leading-[50px] sm:leading-[50px] leading-8 lg:w-[85%] mx-auto mb-2 md:mb-5">
                Our focus on Artificial Intelligence and machine learning
            </h3>



            {/* VStack */}
            <div className='w-10/12 mx-auto'>
                <p className='text-center flex-1 w-11/12 text-lg mb-8'>
                    The game design & development  process involves conceptualizing and developing a video game from an idea into a fully functional and engaging experience for players. It is a crucial stage in game development as it sets the foundation for the rest of the development process. Here are the typical steps involved in the game design process:
                </p>

                <div className="flex flex-wrap gap-2 ">
                    <ServiceItem
                        title={"1. Brainstorming:"}
                        body={"The first step in the game design process is to brainstorm ideas for the game. This can involve coming up with a game concept, exploring different game mechanics, and identifying potential challenges and opportunities."}
                    />

                    <ServiceItem
                        title={"10. Programming:"}
                        body={" Describe the programming languages and tools used in game development, such as Unity, Unreal Engine, and C++."}
                    />

                    <ServiceItem
                        title={"2. Game concept::"}
                        body={"Once the brainstorming process is complete, the game concept is developed. This is the overall idea for the game, including its genre, story, characters, and game mechanics."}
                    />

                    <ServiceItem
                        title={"11. Graphics and animation:"}
                        body={" Highlight the importance of creating visually appealing game assets, such as character models, textures, and animations."}
                    />

                    <ServiceItem
                        title={"3. Prototyping:"}
                        body={"A prototype of the game is created to test the concept and refine the game mechanics. This can involve creating a paper-based prototype or a simple digital prototype to test the basic gameplay."}
                    />

                    <ServiceItem
                        title={"12. Sound and music: "}
                        body={"Explain how sound effects and music can enhance the gaming experience and create an immersive atmosphere."}
                    />

                    <ServiceItem
                        title={"4. Iteration:"}
                        body={"Based on the feedback from the prototype, the game design is iterated and refined until the core gameplay is fun and engaging."}
                    />

                    <ServiceItem
                        title={"13. Quality assurance:"}
                        body={" Discuss the importance of testing games thoroughly to ensure that they are bug-free and provide a seamless experience for players."}
                    />

                    <ServiceItem
                        title={"5. Game mechanics:"}
                        body={"Once the core gameplay is established, the game mechanics are developed. This involves defining the rules of the game, including how the player interacts with the game world, the objectives, and the challenges."}
                    />

                    <ServiceItem
                        title={"14. Platform support:"}
                        body={" Explain the various platforms you support, such as consoles, PCs, and mobile devices."}
                    />

                    <ServiceItem
                        title={"6. Story and characters:"}
                        body={" The game story and characters are developed, including the plot, dialogue, and character designs. This is a critical aspect of the game design, as it can greatly influence the player's emotional engagement with the game."}
                    />

                    <ServiceItem
                        title={"15. Game genres: "}
                        body={"Discuss the different types of games you develop, such as action, adventure, role-playing, and simulation."}
                    />

                    <ServiceItem
                        title={"7. Balancing and tuning:"}
                        body={" The game is balanced and tuned to ensure that the difficulty level is appropriate and the gameplay is engaging."}
                    />

                    <ServiceItem
                        title={"16. Portfolio:"}
                        body={" Showcase some of the games you have developed, including screenshots, trailers, and links to download or purchase the games."}
                    />

                    <ServiceItem
                        title={"8. Design:"}
                        body={"The final stage of the game design process involves designiing the game mechanics, story, characters, and overall design. This includes creating a detailed game design document that outlines all aspects of the game and serves as a reference for the development team."}
                    />

                    <ServiceItem
                        title={"17. Team:"}
                        body={" Introduce your game development team, highlighting their experience and expertise in the field."}
                    />

                    <ServiceItem
                        title={"9. Testimonials:"}
                        body={" Include testimonials from satisfied clients or players to demonstrate your expertise and the quality of your work."}
                    />

                    <ServiceItem
                        title={"18. Contact information:"}
                        body={" Provide contact details so that potential clients or players can get in touch with you for inquiries or support."}
                    />

                </div>
            </div>
        </div>
    )
}

export default Process

const ServiceItem = ({ title, body }) => (
    <div className="w-[46%] text-left">

        <span className="font-bold text-lg">{title}</span>
        <span className="leading-8 text-base sm:text-md px-2">
            {/* // title */}
            {/* // body */}

            {body}
        </span>
    </div>
);
