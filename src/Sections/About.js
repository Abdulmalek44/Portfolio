import React from 'react'

const About = () => {
    return (
        <div id='about' className='w-full h-screen bg-[#121212] text-gray-300'>
            <div className='w-full h-full flex justify-center items-center flex-col'>
                <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-5 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#0078d4] ' > About </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <p className=' text-2xl sm:text-right sm:text-4xl font-bold  '>
                        Hi, I'm Abdulmalek!
                        welcome to my corner of the web,
                        I pour my heart into every project to make it shine.
                        Thanks for visiting and enjoy your stay.
                    </p>
                    <p className='  text-xl sm:text-2xl font-bold '>
                        I am a dedicated and passionate Junior Front End Developer using React JS with strong technical skills, attention
                        to detail, and problem-solving abilities. I am a quick learner and an effective communicator, with a focus on
                        delivering high-quality work. I am confident in my ability to create engaging websites and contribute positively to
                        any development team.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default About
