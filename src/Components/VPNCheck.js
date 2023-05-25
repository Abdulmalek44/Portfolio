import React from 'react'
import { FaRegDotCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Pages = ({ content }) => {

    const technologies = content.techno;
    return (
        <>
            <div className='w-full h-screen relative text-white'>
                <img
                    src={content.img}
                    alt='no_photo'
                    className='w-full h-[330px] object-cover'
                />
                <div className='w-full h-[330px] absolute top-0 left-0 bg-black/70 '>
                    <div className=' absolute bottom-14 left-16'>
                        <h1 className='text-white font-bold text-4xl'>{content.title}</h1>
                        <h1 className='text-white font-bold text-lg'>React JS / Tailwind / Firebase </h1>
                    </div>
                </div>
                <div className='w-11/12 h-fit mx-auto sm:grid sm:grid-cols-2 grid-cols-1 items-center justify-items-end  p-5 '>
                    <div>
                        <h1 className='text-3xl font-bold pb-4'> Overview </h1>
                        <p>{content.overview}</p>
                        <div className='pt-6'>
                            <a href={content.github} target="_blank" rel="noreferrer " >
                                <button className='text-center rounded-lg px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-500  duration-300 text-gray-700 font-bold text-base'>
                                    Code
                                </button>
                            </a>
                            <a href={content.live} target="_blank" rel="noreferrer" >
                                <button className='text-center rounded-lg px-5 py-3 ml-5 bg-gradient-to-r from-cyan-500 to-blue-500 duration-300 text-gray-700 font-bold text-base'>
                                    Demo
                                </button>
                            </a>
                        </div >
                    </div>
                    <div className='bg-[#1A1A1A] sm:w-fit shadow-xl w-full shadow-black mt-4 py-3 px-6 flex flex-col justify-center items-center hover:scale-105 rounded-md duration-500'>
                        <h1 className='pb-5 font-semibold'>Technologies</h1>
                        <ul className='w-full'>
                            {
                                technologies.map(item =>
                                    <li className='flex items-center mb-2'><FaRegDotCircle size={10} className='mr-2' />
                                        {item}
                                    </li>
                                )
                            }

                        </ul>
                    </div>
                    <button className='underline font-bold text-xl hover:text-[#d4d4d4] duration-300 py-3 w-full sm:w-fit sm:bg-gradient-to-r sm:from-transparent sm:to-transparent bg-gradient-to-r from-cyan-500 to-blue-500' >
                        <NavLink to='/' > Back </NavLink>
                    </button>
                </div>

            </div >
        </>
    )
}

export default Pages
