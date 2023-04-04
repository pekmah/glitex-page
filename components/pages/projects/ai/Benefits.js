import React from 'react'
import Button from '../../../general/Button'

const Benefits = () => {
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
                            The integration of AI and Machine learning technology helps to reduce the occurrence of human error, streamline tasks, and enhance the quality of results.
                        </p>
                        <ul className='list-disc pl-4 '>
                            <li className='my-1'>Accelerated Decision Making with Algorithm-Driven Automation - Harness the power of algorithms to streamline processes and enhance decision making capabilities.</li>
                            <li className='my-1'>
                                Unlock New Opportunities for Innovation and Growth through Understanding Data Patterns.
                            </li>
                            <li className='my-1'>
                                Adapt to Changes Quickly - Machine learning models can analyze and update data at a much faster pace than humans, allowing for greater adaptability in changing circumstances.
                            </li>
                            <li className='my-1'>
                                Accelerate Business Operations - Streamline your operations and enhance efficiency with the power of AI, enabling rapid business growth.
                            </li>
                        </ul>
                    </div>
                    <div className="flex">
                        <Button
                            className={"bg-primary w-48 text-secondary text-base md:text-lg"}
                            text={"Call us Today!"}
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-1 p-4 h-full">
                <img
                    src="/images/projects/ai-2.jpg"
                    alt="__"
                    className="h-[600px] w-full object-cover"
                />
            </div>
        </div>
    )
}

export default Benefits