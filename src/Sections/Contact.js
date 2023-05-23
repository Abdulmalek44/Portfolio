import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#121212] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/e71a6a9c-2288-4af4-bd7a-0563020ac1bd"
                className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#0078d4]  text-gray-300'>Contact</p>
                </div>
                <input className=' p-2 bg-[#1e1e1e] outline-2 outline-[#0078d4] outline rounded-sm text-white ' type="text" placeholder='Name' name='name' required />
                <input className='my-4 p-2 bg-[#1e1e1e] outline-2   outline-[#0078d4] outline rounded-sm text-white ' type="email" placeholder='Email' name='email' required />
                <textarea className='bg-[#1e1e1e] outline-2 outline-[#0078d4] outline  p-2 rounded-sm text-white ' name="message" rows="10" placeholder='Message' required></textarea>
                <button className='text-white border-2 hover:bg-[#0078d4]
                                 hover:border-[#0078d4] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate
                </button>
            </form>
        </div >
    )
}

export default Contact