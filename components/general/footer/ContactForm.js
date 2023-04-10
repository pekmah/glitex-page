import React from 'react'

const ContactForm = () => {
    return (
        <div className='text-white bg-inherit flex-1'>
            {/*inputs */}
            <div className='lg:flex gap-2 text-white'>
                <div className='flex-1 flex flex-col gap-3'>
                    {/* Name input */}
                    <div className=''>
                        <h6 className='text-primary font-medium '>Name</h6>

                        {/* input */}
                        <input style={{ color: "whitesmoke" }} type='text' className=' p-2 h-12 bg-[#1f1f1f] w-full mt-2 rounded focus:outline-none' />
                    </div>

                    {/* Email input */}
                    <div className=''>
                        <h6 className='text-primary font-medium '>Your Email</h6>

                        {/* input */}
                        <input style={{ color: "whitesmoke" }} type='email' className='  p-2 h-12 bg-[#1f1f1f] w-full mt-2 rounded focus:outline-none' />
                    </div>

                    {/* Subject input */}
                    <div className=''>
                        <h6 className='text-primary font-medium '>Subject</h6>

                        {/* input */}
                        <input style={{ color: "whitesmoke" }} type='text' className=' focus:text-slate-50 p-2 h-12 bg-[#1f1f1f] w-full mt-2 rounded focus:outline-none' />
                    </div>
                </div>

                <div className=' h-40 lg:h-auto flex-1 mt-6 lg:mt-0 lg:px-4 py-1 '>
                    <textarea style={{ color: "whitesmoke" }} className='focus:outline-none bg-[#1f1f1f] p-2 h-full w-full rounded-md' name='text' spellcheck="true" id="wider"></textarea>

                </div>
            </div>
            {/* text area */}
        </div>
    )
}

export default ContactForm