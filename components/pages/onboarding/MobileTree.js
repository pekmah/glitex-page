import React from 'react'
import { Branch } from './Tree'

const MobileTree = () => {
    return (
        <div
            className={
                "p-3 sm:p-5 md:p-8 lg:p-12 bg-primary text-center flex flex-col justify-center items-center"
            }
        >


            <p className="md:my-6 lg:text-xl sm:text-lg w-[98%] lg:w-2/3 md:leading-8 lg:leading-9">
                We have developed a <strong>12 step process</strong> to help us align and serve our customers to the very best of our ability, here is a breakdown of the process:
            </p>
            {/* Tree */}
            <div className='flex gap-5 mx-auto'>

                <div className='flex flex-col flex-1 py-8 gap-4'>
                    <div className='flex justify-start'>
                        <Branch
                            className='w-11/12'
                            title={"Introduction"}
                            number={1}
                            description={"This is the stage where we receive a call or an enquiry from a prospective client from our various marketing channels. during this phase we introduce ourselves and answer any questions that the prospect might have , If the prospect is still interested we organize to schedule for a project briefing session."}
                        />
                    </div>
                    <div className='flex justify-end'>
                        <Branch
                            className='w-11/12'
                            title={"NDA Signing"}
                            number={2}
                            description={"Glitex legitimately has an NDA that we avail for our clients, If our clients have theirs , we review it with our prominent lawyers , come to an agreement and sign it off. This ensures we have a good working relation."}

                        />
                    </div>

                    <div className='flex justify-start'>
                        <Branch
                            className='w-11/12'
                            title={"Project briefing/ Requirement workshop"}
                            number={3}
                            description={"This session is mainly run by our founders and senior developers as we get to understand if we are the right fit for the client needs. The client describes the problem or requirements as our team seeks to deeply understand."}
                        />
                    </div>

                    <div className='flex justify-end'>
                        <Branch
                            className='w-11/12'
                            title={"Research and Solution development"}
                            number={4}
                            description={"After the session , we conduct a research to further our understanding. We then develop a solution that we believe serves the client's needs."}
                        />
                    </div>

                    <div className='flex justify-start'>
                        <Branch
                            className='w-11/12'
                            title={"Official proposal"}
                            number={5}
                            description={"Glitex pens down a proposal per the discussions and findings from the research. The proposal typically entails a brief project description, solution ,estimated cost and timelines."}
                        />
                    </div>

                    <div className='flex justify-end'>
                        <Branch
                            className='w-11/12'
                            title={"Negotiation and agreement"}
                            number={6}
                            description={"At this stage our founders negotiate on the price and timelines. At this stage we expect both parties to come to an agreement."}
                        />
                    </div>

                    <div className='flex justify-start'>
                        <Branch
                            className='w-11/12'
                            title={"Contract signing"}
                            number={7}
                            description={"We rewrite the proposal again as per the agreed cost and timeline and sign it off as a binding contract."}
                        />
                    </div>


                    <div className='flex justify-end'>
                        <Branch
                            className='w-11/12'
                            title={"Project Milestone Mapping"}
                            number={8}
                            description={"The Chief product officer leads a session with the lead team handling the project and map out the key milestones with their subsequent timelines."}
                        />
                    </div>

                    <div className='flex justify-start'>
                        <Branch
                            className='w-11/12'
                            title={"Project Kick-off and server setup"}
                            number={9}
                            description={"The team starts off with the UX process as the engineers handle the system architecture design , set up environments."}
                        />
                    </div>

                    <div className='flex justify-end'>
                        <Branch
                            className='w-11/12'
                            title={"Weekly updating"}
                            number={10}
                            description={"The client and the team have weekly updates/ calls on the project progress."}
                        />
                    </div>


                    <div className='flex justify-start'>
                        <Branch
                            className='w-11/12'
                            title={"Contract signing"}
                            number={11}
                            description={"We rewrite the proposal again as per the agreed cost and timeline and sign it off as a binding contract."}
                        />
                    </div>

                    <div className='flex justify-end'>
                        <Branch
                            className='w-11/12'
                            title={"Testing & QA"}
                            number={12}
                            description={" testing & QA will be promptly done during development."}
                        />
                    </div>

                    <div className='flex justify-start'>
                        <Branch
                            className='w-11/12'
                            title={"Project completion & handover"}
                            number={13}
                            description={"the project will be handed over and offered full development."}
                        />
                    </div>

                </div>
            </div>
        </div>
        // </div >
    )
}

export default MobileTree