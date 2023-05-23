import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import DownloadResume from './DownloadResume';
import CopyButton from './CopyButton';

const Footer = () => {
    return (
        <div className='lg:hidden bg-[#121212] w-full  h-32 text-[#e2e2e2]'>
            <ul className='flex justify-evenly mx-auto items-center w-1/2'>
                <li className='w-[60px] h-[60px] flex justify-between items-center rounded-full mx-2 bg-blue-600 hover:bg-[#1950c8]  duration-300'>
                    <a href="https://www.linkedin.com/in/abd-almalek-al-aktaa-703416226/" target="_blank" rel="noreferrer">
                        <FaLinkedin size={30} /></a>
                </li>
                <li className='w-[60px] h-[60px] flex justify-between items-center rounded-full mx-2 bg-[#334155] hover:bg-[#272f38] duration-300'>
                    <a href="https://github.com/Abdulmalek44" target="_blank" rel="noreferrer" >
                        <FaGithub size={30} /></a>
                </li>
                <li className='w-[60px] h-[60px] flex justify-between items-center rounded-full mx-2 bg-green-400 hover:bg-[#3bc76e] duration-300'>
                    <CopyButton  >
                        <HiOutlineMail size={30} /></CopyButton>
                </li>
                <li className='w-[60px] h-[60px] flex justify-between items-center rounded-full mx-2 bg-gray-500 hover:bg-[#4d525c] duration-300'>
                    <button onClick={DownloadResume}>
                        <BsFillPersonLinesFill size={30} /></button>
                </li>

            </ul>
        </div >
    )
}

export default Footer
