import React from 'react'


const CardSkills = ({ path, title }) => {
    return (
        <div className='bg-[#1A1A1A] shadow-xl shadow-black w-fit py-3 px-6 flex flex-col justify-center items-center hover:scale-110 rounded-md duration-500'>
            <img src={path} alt='No_photo' />
            <h3 className='text-gray-300'> {title} </h3>

        </div>
    )
}

export default CardSkills