import React from 'react'

const Tree = () => {
    return (

        <div
            className={
                "p-3 sm:p-5 md:p-8 lg:p-12 bg-primary text-center flex flex-col justify-center items-center"
            }
        >


            <p className="md:my-6 lg:text-xl sm:text-lg w-[95%] lg:w-2/3 leading-8 lg:leading-9">
                We have developed a <strong>12 step process</strong> to help us align and serve our customers to the very best of our ability, here is a breakdown of the process:
            </p>

            {/* Tree */}
            <div className='flex gap-5 w-9/12 mx-auto'>
                {/* LEFT BRANCHES */}
                <div className='flex flex-col flex-1 py-8 gap-32'>
                    <Branch
                        title={"Introduction"}
                        number={1}
                        description={"This is the stage where we receive a call or an enquiry from a prospective client from our various marketing channels. during this phase we introduce ourselves and answer any questions that the prospect might have , If the prospect is still interested we organize to schedule for a project briefing session."}
                    />


                    <Branch
                        title={"Project briefing/ Requirement workshop"}
                        number={3}
                        description={"This session is mainly run by our founders and senior developers as we get to understand if we are the right fit for the client needs. The client describes the problem or requirements as our team seeks to deeply understand."}
                    />


                    <Branch
                        title={"Official proposal"}
                        number={5}
                        description={"Glitex pens down a proposal per the discussions and findings from the research. The proposal typically entails a brief project description, solution ,estimated cost and timelines."}
                    />


                    <Branch
                        title={"Contract signing"}
                        number={7}
                        description={"We rewrite the proposal again as per the agreed cost and timeline and sign it off as a binding contract."}
                    />

                    <Branch
                        title={"Project Kick-off and server setup"}
                        number={9}
                        description={"The team starts off with the UX process as the engineers handle the system architecture design , set up environments."}
                    />

                    <Branch
                        title={"Contract signing"}
                        number={11}
                        description={"We rewrite the proposal again as per the agreed cost and timeline and sign it off as a binding contract."}
                    />

                    <Branch
                        title={"Project completion & handover"}
                        number={13}
                        description={"the project will be handed over and offered full development."}
                    />

                </div>
                {/* MID LINE */}
                <div className='flex relative justify-center'>
                    <div className='bg-secondary h-4 w-4 rounded-full absolute' />
                    <div className='bg-secondary w-1' />
                </div>
                {/* RIGHT BRANCHES */}
                <div className='flex flex-col  flex-1'>
                    {/* <Branch className={"h-24"} /> */}
                    <div className={"h-40"} />
                    <Branch
                        title={"NDA Signing"}
                        number={2}
                        description={"Glitex legitimately has an NDA that we avail for our clients, If our clients have theirs , we review it with our prominent lawyers , come to an agreement and sign it off. This ensures we have a good working relation."}
                    />

                    <div className={"h-40"} />


                    <Branch
                        title={"Research and Solution development"}
                        number={4}
                        description={"After the session , we conduct a research to further our understanding. We then develop a solution that we believe serves the client's needs."}
                    />

                    <div className={"h-36"} />

                    <Branch
                        title={"Negotiation and agreement"}
                        number={6}
                        description={"At this stage our founders negotiate on the price and timelines. At this stage we expect both parties to come to an agreement."}
                    />

                    <div className={"h-28"} />

                    <Branch
                        title={"Project Milestone Mapping"}
                        number={8}
                        description={"The Chief product officer leads a session with the lead team handling the project and map out the key milestones with their subsequent timelines."}
                    />

                    <div className={"h-40"} />

                    <Branch
                        title={"Weekly updating"}
                        number={10}
                        description={"The client and the team have weekly updates/ calls on the project progress."}
                    />

                    <div className={"h-40"} />

                    <Branch
                        title={"Testing & QA"}
                        number={12}
                        description={" testing & QA will be promptly done during development."}
                    />
                </div>
            </div>
        </div>

    )
}

export default Tree

const Branch = ({ title, description, number, className }) => (
    <div className={`flex flex-col justify-center ${className}`}>
        {/* Title  */}
        <div className='flex gap-4'>
            {/* Label */}
            {number && <div className='bg-secondary rounded-full h-8 w-8 text-white flex items-center justify-center '>
                {number}
            </div>}
            {/* Title */}
            <h5 className='font-bold text-xl text-secondary'>{title}</h5>
        </div>
        {/* description */}
        <p className='text-sm text-left mt-2'>
            {description}
        </p>
    </div>
)