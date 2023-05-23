import React, { useState } from 'react'
import { Link } from 'react-scroll';
import img from '../Image/Logo.png'
import { FaTimes, FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import DownloadResume from './DownloadResume';
import CopyButton from './CopyButton';


const Navbare = () => {

    //States
    const [click, setClick] = useState(false);


    //Function

    const handelClick = () => { setClick(!click) }


    return (
        <header className='fixed w-full h-20 flex items-center justify-between px-10 bg-[#121212] text-[#e2e2e2]' >
            <div className='logo'>
                <Link to='hero' spy={true} smooth={true} offset={-100} duration={500} className='logo' >
                    <img src={img} alt='No_Photo' className='w-28  ' />
                </Link>
            </div>

            {/* Menu */}
            <ul className='hidden md:flex '>
                <li className=' hover:text-[#cfcece] duration-200'><Link to="home" spy={true} smooth={true} offset={-100} duration={500}> Home </Link></li>
                <li className=' hover:text-[#cfcece] duration-200'><Link to="about" spy={true} smooth={true} offset={-40} duration={500}> About </Link></li>
                <li className=' hover:text-[#cfcece] duration-200'><Link to="skills" spy={true} smooth={true} offset={-40} duration={500}> Skills </Link></li>
                <li className=' hover:text-[#cfcece] duration-200'><Link to="work" spy={true} smooth={true} offset={-40} duration={500}> Work </Link></li>
                <li className=' hover:text-[#cfcece] duration-200'><Link to="contact" spy={true} smooth={true} offset={-10} duration={500}> Contact </Link></li>
            </ul>


            {/* hamburger */}
            <div className='md:hidden z-10 cursor-pointer transition-all' onClick={handelClick} >
                {click ? <FaTimes size={30} style={{ color: '#ffffff' }} /> :
                    <FaBars size={30} style={{ color: '#ffffff' }} />}


            </div>

            {/* Mobile menu */}
            <ul className={click ? 'absolute top-0 left-0 w-full h-screen bg-[#121212] flex flex-col justify-center items-center'
                : 'hidden'}>
                <li className='py-6 text-4xl hover:text-[#cfcece] duration-200'><Link onClick={handelClick} to="home" spy={true} smooth={true} offset={-100} duration={500}> Home </Link></li>
                <li className='py-6 text-4xl hover:text-[#cfcece] duration-200'><Link onClick={handelClick} to="about" spy={true} smooth={true} offset={-40} duration={500}> About </Link></li>
                <li className='py-6 text-4xl hover:text-[#cfcece] duration-200'><Link onClick={handelClick} to="skills" spy={true} smooth={true} offset={-40} duration={500}> Skills </Link></li>
                <li className='py-6 text-4xl hover:text-[#cfcece] duration-200'><Link onClick={handelClick} to="work" spy={true} smooth={true} offset={-40} duration={500}> Work </Link></li>
                <li className='py-6 text-4xl hover:text-[#cfcece] duration-200'><Link onClick={handelClick} to="contact" spy={true} smooth={true} offset={-10} duration={500}> Contact </Link></li>
            </ul>

            {/* Socal icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-500 bg-blue-600'>
                        <a href="https://www.linkedin.com/in/abd-almalek-al-aktaa-703416226/" target="_blank" rel="noreferrer" className='flex justify-between items-center w-full'>
                            Linkedin <FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-500 bg-[#334155]'>
                        <a href="https://github.com/Abdulmalek44" target="_blank" rel="noreferrer" className='flex justify-between items-center w-full'>
                            Github <FaGithub size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-500 bg-green-400'>
                        <CopyButton  >
                            Email <HiOutlineMail size={30} /></CopyButton>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-500 bg-gray-500'>
                        <button className='flex justify-between items-center w-full ' onClick={DownloadResume}>
                            Resume <BsFillPersonLinesFill size={30} /></button>
                    </li>
                </ul>
            </div>
        </header >
    )
}

export default Navbare
