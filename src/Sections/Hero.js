import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import Typed from 'react-typed'

const Hero = () => {
    return (
        <div id='home' className='w-full h-screen bg-[#121212] ' >
            <div className=' max-w-[1000px] mx-auto px-8  flex flex-col justify-center h-full lg:px-16 '>
                <h2 className='text-4xl  sm:text-7xl font-bold text-[#0078d4]'> Abdulmalek Al-Aktaa </h2>
                <h3 className='text-4xl sm:text-7xl font-bold text-[#cdcdcd]'> React Front-End Developer </h3>
                <div className='flex'>
                    {/* <p className='text-white'> Skills & Expertise:  </p>
                    <Typed className='text-yellow-300'
                        strings={[
                            'Attention to detail',
                            'Problem-solving',
                            'Time management',
                            'Communication',
                            'Creativity',
                            'Adaptability'
                        ]}
                        typeSpeed={80}
                        backSpeed={70}
                        loop >
                    </Typed> */}
                </div>
                <p className='text-gray-300 my-4 max-w-[800px]'>
                    As a Junior Front End Developer, I am skilled in React JS, HTML, CSS, and JavaScript.
                    I have a passion for creating aesthetically pleasing and functional websites, and I am dedicated
                    to constantly improving my skills in this field. My goal is to become a leading expert in front-end
                    development, creating responsive and interactive websites using the latest technologies.
                </p>
                <div className=''>
                    <Link to="work" spy={true} smooth={true} offset={-20} duration={500}>
                        <button className='text-white border-2 px-6 group py-3 my-2 flex items-center hover:bg-[#0078d4]
                                hover:border-[#0078d4] duration-200'> View My Work
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero