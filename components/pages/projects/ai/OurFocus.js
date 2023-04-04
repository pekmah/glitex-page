import React from 'react'

const OurFocus = () => {
    return (
        <div
            className={" bg-primary text-center flex flex-col justify-center py-12"}
        >
            <h3 className="lg:text-4xl sm:text-3xl text-2xl font-bold lg:leading-[50px] sm:leading-[50px] leading-8 lg:w-[85%] mx-auto mb-2 md:mb-5">
                Our focus on Artificial Intelligence and machine learning
            </h3>

            {/* VStack */}
            <div className="flex flex-wrap gap-8 w-10/12 mx-auto">
                <ServiceItem
                    title={"1. AI driven software apps"}
                    body={
                        <p>
                            Our AI powered software application utilizes advanced artificial intelligence techniques and algorithms to enhance performance and deliver innovative solutions. With its ability to process vast amounts of digital data, this AI software can provide valuable insights, automate processes, and drive new business opportunities for organizations.
                        </p>
                    }
                />

                <ServiceItem
                    title={"4.Digital Assistants & Self learning"}
                    body={
                        <p>Our AI-powered software endows digital assistants and enterprise software with self-learning abilities. These programs have the ability to analyze key events and contexts and provide recommendations based on specified parameters. Tasks such as prioritizing the day, managing appointments, handling documents, reminders and project management can now all be efficiently executed through the use of digital assistants. </p>
                    }
                />

                <ServiceItem
                    title={"2. Ecommerce portals"}
                    body={
                        <p> Glitex Solutions harnesses the power of AI to develop self-learning e-Commerce applications. Our data-driven solutions aim to give e-Commerce platforms an edge by offering accurate predictions, cross-selling recommendations, automated pricing, and product suggestions. </p>
                    }
                />

                <ServiceItem
                    title={"5. Real-time Data Science"}
                    body={
                        <p>The vastness of digital data can be overwhelming and it's crucial for companies to have real-time access to it in order to remain competitive. Our utilization of Machine Learning enables us to uncover the underlying patterns in the data that are relevant to significant business events. This is achieved by analyzing data from a multitude of sources and delivering insightful results.</p>
                    }
                />

                <ServiceItem
                    title={"3.Smart business processes"}
                    body={
                        <p>Utilizing AI and Machine learning, conventional processes that were based on rules are now being transformed into intelligent ones that have the ability to uncover new patterns in vast and complex data sets. These intelligent processes make strategic predictions and recommendations without the need for explicit directions. With the use of AI, many repetitive tasks are being replaced by smart automation, demonstrating its credibility as a leading alternative solution.</p>
                    }
                />
            </div>
        </div>
    )
}

export default OurFocus
const ServiceItem = ({ title, body }) => (
    <div className="w-[46%] text-left">
        {/* // title */}
        <h6 className="font-bold text-lg">{title}</h6>

        {/* // body */}
        <p className="leading-8 text-base sm:text-lg mx-0">{body}</p>
    </div>
);
