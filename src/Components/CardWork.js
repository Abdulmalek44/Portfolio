import React from 'react'


const CardWork = ({ path, title, github, live }) => {
    return (
        <div style={{ backgroundImage: `url(${path})` }}
            className='bg-[#1A1A1A] shadow-xl shadow-black mx-auto flex flex-col justify-center items-center
            group container rounded-md  content-div '>
            <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font bold text-white tracking-wider text-center '>
                    <h4 className='mb-5'> {title} </h4>
                </span>
                <div>
                    <a href={github} target="_blank" rel="noreferrer " >
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:bg-[#edecec] duration-300 text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                    </a>
                    <a href={live} target="_blank" rel="noreferrer" >
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white  hover:bg-[#edecec] duration-300 text-gray-700 font-bold text-lg'>
                            Demo
                        </button>
                    </a>
                </div >
            </div>
        </div >
    )
}

export default CardWork
