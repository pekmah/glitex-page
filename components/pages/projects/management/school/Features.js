import React from 'react'

const Features = () => {
    return (
        <div
            className={" bg-secondary text-primary text-center flex flex-col justify-center py-12"}
        >
            <h3 className="lg:text-4xl sm:text-3xl text-2xl font-bold lg:leading-[50px] sm:leading-[50px] leading-8 lg:w-[85%] mx-auto mb-2 md:mb-5">
                Modules
            </h3>



            {/* VStack */}
            <div className=' w-11/12 lg:w-10/12 mx-auto'>

                <div className='md:flex'>
                    <div className='flex-1 flex flex-col gap-6 '>
                        {left_array?.map(item => (
                            <ServiceItem
                                title={item?.title}
                                list={item?.list}
                            />
                        ))}
                    </div>

                    <div className='flex-1 flex flex-col gap-6'>
                        {right_array?.map(item => (<ServiceItem
                            title={item?.title}
                            list={item?.list}
                        />)
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features
const ServiceItem = ({ title, list }) => (
    <div className="w-11/12 text-left">
        {/* // title */}
        <h6 className="font-bold text-lg">{title}</h6>

        {/* // body */}
        <ol className="text-base sm:text-lg list-decimal px-4">
            {list?.map(item => <li>{item}</li>)}
        </ol>
    </div>
);

const left_array = [
    {
        "title": "Register Master for Teachers and Students",
        "list": [
            "Personal Details",
            "Passport Photos",
            "Contacts and Relatives",
            "Discipline and Punishment Details",
            "Freelance notes that can be attached by a teacher to a student.",
            "Archiving past students and teachers in history for any duration desired"
        ]
    },
    {
        "title": "Inventory management",
        "list": [
            "Maintaining Item Details",
            "Stocking and Replenishing",
            "Issuing Statutory Stationery to Students and Teachers",
            "Stock Taking",
            "Asset Register",
            "Reporting"
        ]
    },
    {
        "title": "Fee management",
        "list": [
            "Maintaining fee structures based on class groups",
            "Generating due fees and balances for students",
            "Collecting daily fees from students",
            "Collecting fees via batch journals",
            "Recording fee deposits from banks or other financial sources",
            "Importing fees from Excel spreadsheets",
            "Generating fee statements for students"
        ]
    }
]

const right_array = [
    {
        "title": "Reports",
        "list": [
            "Ledger Reports",
            "Standard Reports such as Income & Expenses Statements, Balance Sheets, and Trial Balances",
            "Transaction Reports",
            "School Reports such as Subjects & Exam Results, End of Term Reports, and Classroom Reports",
            "Library Reports",
            "Inventory Reports",
            "Student & Teacher Reports",
            "Many others"
        ]
    },
    {
        "title": "Ledgers & Accounts",
        "list": [
            "Ledger Journals & Transactions Entry",
            "Recurrent Transactions",
            "Importing data from Excel spreadsheets",
            "Account Reconciliation",
            "Asset Register",
            "Budgeting",
            "Integration of ledger transactions with school fees"
        ]
    },
    {
        "title": "Academics",
        "list": [
            "Class Students List",
            "Daily Attendance",
            "Subjects & Exams",
            "Result Markings and Ranking",
            "Teacher Messaging Sub-System for Productivity and Discussions",
            "Time Tables & Time Management",
            "SMS Services for Parents, Teachers, and Inquiries"
        ]
    }
]