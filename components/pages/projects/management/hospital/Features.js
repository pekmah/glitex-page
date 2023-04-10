import React from 'react'

const Features = () => {
    return (
        <div
            className={" bg-secondary text-primary text-center flex flex-col justify-center py-12"}
        >
            <h3 className="lg:text-4xl sm:text-3xl text-2xl font-bold lg:leading-[50px] sm:leading-[50px] leading-8 lg:w-[85%] mx-auto mb-2 md:mb-5">
                Features of HMIS
            </h3>



            {/* VStack */}
            <div className='w-10/12 mx-auto'>

                <div className='md:flex'>
                    <div className='flex-1 flex flex-col gap-6 '>
                        <ServiceItem
                            title={"Appointments and schedules"}
                            body={"Streamline appointment scheduling and patient registration with our hospital management software. With online appointment booking, reduce wait times and ensure smooth patient flow. The system also effectively manages patient registration and provides up-to-date patient information, such as blood type, age, address, and name, making it a crucial tool for healthcare organizations seeking to stay ahead of the competition."}
                        />
                        <ServiceItem
                            title={"Inpatient Registration, Boarding And Billing"}
                            body={`With our software, you can easily register new patients, manage bed allocation, and handle billing and discharge processes. By providing complete patient demographics, the software simplifies the onboarding process and provides real-time visibility of bed availability for authorized users to allocate.
                        The software also offers a one-stop solution for seamless discharge, including the release of discharge summaries, billing details, and reports. Additionally, it streamlines all inpatient services, such as surgery costs and room pricing.
                        The digitized MIS reports across departments eliminate manual methods and provide automatic alerts for payment overdue. It also gives patients more control by allowing them to share claim details with insurance companies directly.`}
                        />
                        <ServiceItem
                            title={"Outpatient Payment Alerts And Process Management"}
                            body={`Our hospital management software is specifically designed to cater to both inpatient and outpatient patients. With its efficient system, it ensures prompt delivery of medicines, test results, and reports for outpatient patients. The software also prioritizes timely payment reminders, ensuring that payments are made in a timely manner.`}
                        />
                        <ServiceItem
                            title={"Consultation Management"}
                            body={`The Hospital Management System's capabilities streamline the process of scheduling appointments with healthcare providers. Patients can quickly and easily book consultations with a variety of specialists`}
                        />
                        <ServiceItem
                            title={"Pharmacy & Store Management"}
                            body={`This module is designed for efficient management of the pharmacy. It integrates with the billing counter for increased transparency, allowing for proper monitoring of drug distribution and ensuring that any issues are promptly reported to users.`}
                        />
                    </div>

                    <div className='flex-1 flex flex-col gap-6'>
                        <ServiceItem
                            title={"Vital Tracking And Management"}
                            body={"The importance of managing vitals is paramount, and our Hospital Management System helps ensure its security and streamlines its management. The system effortlessly handles sample collection, sample tracking, and delivering test results, making it a reliable solution for vital management."}
                        />
                        <ServiceItem
                            title={"Staff Interaction And Collaboration"}
                            body={`With our advanced Hospital Management System, your team can achieve greater productivity. Its top-notch features provide real-time visibility, alerts, and notifications to help eliminate inefficiencies, minimize redundancies, and seize new opportunities, enabling your team to tackle a large volume of work with ease.`}
                        />
                        <ServiceItem
                            title={"Staff management"}
                            body={`Optimize your workforce with ease through our Hospital Management System. The system provides real-time visibility of physician and provider availability, enabling you to provide patients with the option of booking appointments with available medical professionals. Ensure certainty, transparency, and agility in your operations and aim to delight patients with every visit.`}
                        />
                        <ServiceItem
                            title={"Lab management"}
                            body={`
                        The laboratory module of the Hospital Management System (HMS) enhances its performance, enabling efficient record-keeping and report analysis. Its ability to manage reports and support testing needs is impressive. The system not only allows inpatient (IPD) and outpatient (OPD) patients to receive bills, but it also enables them to generate bills, making the transition to the HMS seamless. Patients can also verify the authenticity of the panel through this feature.`}
                        />
                        <ServiceItem
                            title={"Lab management"}
                            body={`
                        The laboratory module of the Hospital Management System (HMS) enhances its performance, enabling efficient record-keeping and report analysis. Its ability to manage reports and support testing needs is impressive. The system not only allows inpatient (IPD) and outpatient (OPD) patients to receive bills, but it also enables them to generate bills, making the transition to the HMS seamless. Patients can also verify the authenticity of the panel through this feature.
                        
                        It provides valuable support in tracking all items and monitoring reorder levels, with alerts and notifications of incoming and outgoing stock to assist in decision-making. The module also helps in keeping a check on drugs from pharmaceutical companies, distributors, and other sources.
                        `}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features

const ServiceItem = ({ title, body }) => (
    <div className="md:w-11/12 text-left">
        {/* // title */}
        <h6 className="font-bold text-lg">{title}</h6>

        {/* // body */}
        <p className="leading-8 text-base sm:text-lg">{body}</p>
    </div>
);