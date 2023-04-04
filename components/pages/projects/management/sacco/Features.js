import React from 'react'

const Features = () => {
    return (
        <div
            className={" bg-secondary text-primary text-center flex flex-col justify-center py-12"}
        >
            <h3 className="lg:text-4xl sm:text-3xl text-2xl font-bold lg:leading-[50px] sm:leading-[50px] leading-8 lg:w-[85%] mx-auto mb-2 md:mb-5">
                Features in the Sacco Management system
            </h3>



            {/* VStack */}
            <div className='w-10/12 mx-auto'>

                <div className='flex'>
                    <div className='flex-1 flex flex-col gap-6 '>
                        {left_array?.map(item => (
                            <ServiceItem
                                title={item?.title}
                                body={item?.description}
                            />
                        ))}
                    </div>

                    <div className='flex-1 flex flex-col gap-6'>
                        {right_array?.map(item => (<ServiceItem
                            title={item?.title}
                            body={item?.description}
                        />)
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features
const ServiceItem = ({ title, body }) => (
    <div className="w-11/12 text-left">
        {/* // title */}
        <h6 className="font-bold text-lg">{title}</h6>

        {/* // body */}
        <p className="leading-8 text-base sm:text-lg">{body}</p>
    </div>
);

const left_array = [
    {
        "title": "Mpesa & Bank Integrated",
        "description": "Smoothly integrates with Mpesa and banking systems in Kenya to facilitate automated payment processes for your SACCO."
    },
    {
        "title": "Cloud Based",
        "description": "Take advantage of the cloud's capabilities. Our platform is accessible through your web browser and mobile apps, allowing you to conduct lending operations from any location."
    },
    {
        "title": "Bulk SMS & Email Notifications",
        "description": "Ensure your SACCO members stay informed by sending reminders and payment confirmations through bulk SMS, push notifications, and email. No more missed updates for your members."
    },
    {
        "title": "Multiple Branches",
        "description": "Expand your SACCO with ease using our SACCO ERP. Our system is designed to support multi-branch operations, making it simple to open new branches."
    },
    {
        "title": "Multi User",
        "description": "Our SACCO Management Information System provides access for multiple users, enabling you to serve your members smoothly and efficiently."
    },
    {
        "title": "User’s roles & permissions",
        "description": "The SACCO Management System gives you the ability to assign specific roles to users in your SACCO."
    },
    {
        "title": "Unlimited loan products",
        "description": "Our SACCO management platform gives you the freedom to create an unlimited number of loan products with tailored terms."
    },
    {
        "title": "Self service",
        "description": "Empower Your Members with Self-Service Access - The SACCO Management System offers a user-friendly self-service portal and a convenient mobile app, allowing your members to access information and manage their accounts with ease."
    },
    {
        "title": "Member statement",
        "description": "Generate Precise Financial Statements Effortlessly. Our SACCO Management System offers robust financial reporting capabilities, enabling you to effortlessly access your Trial Balance, Balance Sheet, Profit & Loss, General Ledger, and Cash Book through just a few simple clicks."
    }
]
const right_array = [
    {
        "title": "Effortless Member Account Creation",
        "description": "Our SACCO Management System streamlines the process of opening savings, deposit, share, and other types of accounts for your members with just a few simple steps."
    },
    {
        "title": "Effortless Loan Management",
        "description": "Manage all loan operations seamlessly with our SACCO ERP. From loan application to amortization, disbursement, repayment, rescheduling, penalties, waiver, and write-off, every step can be effortlessly executed and monitored."
    },
    {
        "title": "Track and Manage All Incomes Effortlessly",
        "description": "With our SACCO Management System, keeping track of all income transactions has never been easier. Easily manage and record loan interest, penalties, fees, and other sources of income."
    },
    {
        "title": "Expenses Management",
        "description": "With the SACCO management system, managing expenses becomes a breeze. All your SACCO's expenses can be tracked and managed efficiently and effectively."
    },
    {
        "title": "Vendor/Suppliers Management",
        "description": "Effortlessly manage your vendors/suppliers with our SACCO Management Software. Keep track of the services provided by the people or companies that support your SACCO's operations in a centralized and organized manner."
    },
    {
        "title": "Financial Reports & Statements",
        "description": "Generate Accurate Financial Reports with Ease. Our SACCO Management Software provides comprehensive financial reporting capabilities, allowing you to access your Trial Balance, Balance Sheet, Profit & Loss, General Ledger, and Cash Book with just a few clicks."
    },
    {
        "title": "Loan reports",
        "description": "Easily Generate Loan Reports with Our Platform. Our SACCO Management System provides a wide range of loan reports, including Loan Balances, Active Loans, Defaulted Loans, Due Loans, Aging Analysis, and Loan Portfolio, among others."
    },
    {
        "title": "Audit trail",
        "description": "Keep Track of User Activity with Ease. Our SACCO Management System logs every action performed by users, which are stored in a secure and tamper-proof format. This feature allows you to easily access and review the history of user activity."
    }
]