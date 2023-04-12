import React from 'react'
import Button from '../../../../general/Button'
import {handleDialerButtonClick} from "../../../../main/header";

const AreYouInNeed = () => {
    return (
        <div className="flex flex-col md:flex-row py-6 md:py-12 bg-white">
            {/* image div */}

            {/* text description div */}
            <div className="flex flex-col gap-6 flex-1 justify-center items-center">
                <div className="flex flex-col w-[85%] gap-4 md:gap-8">
                    <h5 className="text-2xl md:text-3xl font-bold leading-8 sm:leading-10 lg:leading-[50px]">
                        Are you in search of School Management System or SMIS system in Kenya?
                    </h5>
                    {/* body */}
                    <div className="">
                        <p className="text-base md:text-lg mb-4 font-medium">
                            This is the right place. Glitex Solutions Limited are experts in developing management
                            systems for schools.
                        </p>
                    </div>
                    <div className="flex">
                        <Button
                            className={"bg-primary w-48 text-secondary text-base md:text-lg"}
                            text={"Call us Today!"}
                            handleClick={handleDialerButtonClick}
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center flex-1 p-4 h-full">
                <img
                    src="/images/projects/management/management-1.webp"
                    alt="__"
                    className="lg:h-[600px] w-full object-contain"
                />
            </div>
        </div>
    )
}

export default AreYouInNeed
