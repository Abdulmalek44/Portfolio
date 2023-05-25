import React from 'react'
import { NavLink } from 'react-router-dom'


const CardWork = ({ items }) => {
    return (
        <div style={{ backgroundImage: `url(${items.img})` }}
            className='bg-[#1A1A1A] shadow-xl shadow-black mx-auto flex flex-col justify-center items-center
            group container  rounded-md  content-div '>
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font bold text-white tracking-wider text-center '>
                    <h4 className='mb-5 font-semibold'> {items.title} </h4>
                </span>
                <div className='flex items-center justify-center'>
                    <a href={items.github} target="_blank" rel="noreferrer " >
                        <NavLink to={items.path}>
                            <button className=' rounded-lg px-4 py-3 m-2 bg-white hover:bg-[#edecec] duration-300 text-gray-700 font-bold text-lg'>
                                More Info
                            </button>
                        </NavLink>
                    </a>
                </div >
            </div>
        </div >
    )
}

export default CardWork
