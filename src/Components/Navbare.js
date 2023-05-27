import React, { useState } from 'react'
import { Link } from 'react-scroll';
import img from '../Image/Logo.png'
import { FaTimes, FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import DownloadResume from './DownloadResume';
import CopyButton from './CopyButton';
import Footer from './Footer';


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
                <li className=' hover:text-[#cfcece]  px-4 duration-200'>
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={500}> Home </Link>
                </li>
                <li className=' hover:text-[#cfcece]  px-4 duration-200'>
                    <Link to="about" spy={true} smooth={true} offset={-40} duration={500}> About </Link>
                </li>
                <li className=' hover:text-[#cfcece]  px-4 duration-200'>
                    <Link to="skills" spy={true} smooth={true} offset={-40} duration={500}> Skills </Link>
                </li>
                <li className=' hover:text-[#cfcece]  px-4 duration-200'>
                    <Link to="work" spy={true} smooth={true} offset={-40} duration={500}> Work </Link>
                </li>
                <li className=' hover:text-[#cfcece]  px-4 duration-200'>
                    <Link to="contact" spy={true} smooth={true} offset={-10} duration={500}> Contact </Link>
                </li>
            </ul>


            {/* hamburger */}
            <div className='md:hidden z-10 cursor-pointer transition-all' onClick={handelClick} >
                {click ?
                    <span className='rounded-full absolute top-16 right-1/4 p-2 shadow-lg shadow-black/30 dark:shadow-black/50 
                    hover:rotate-90 duration-300 ' >
                        <FaTimes size={30} style={{ color: '#ffffff' }} />
                    </span>
                    : <FaBars size={30} style={{ color: '#ffffff' }} />}
            </div>

            {/* Mobile menu */}
            <div className={click ? '  absolute top-0 left-0 w-full h-screen ' : 'hidden'}>
                <div className='w-4/5 h-screen bg-[#191919] p-10 flex flex-col '>
                    <div>
                        <Link to='hero' spy={true} smooth={true} offset={-100} duration={500} className='' >
                            <img src={img} alt='No_Photo' className='w-28  py-4' />
                        </Link>
                        <p className='pb-5 w-4/5'>Let's build something legendary together</p>
                        <hr />
                    </div>
                    <ul className={click ? 'py-4 ' : 'hidden'}>
                        <li className='text-2xl font-medium py-3  '>
                            <Link onClick={handelClick} to="home" spy={true} smooth={true} offset={-100} duration={500}> Home </Link>
                        </li>
                        <li className='text-2xl font-medium py-3 ' >
                            <Link onClick={handelClick} to="about" spy={true} smooth={true} offset={-40} duration={500}> About </Link>
                        </li>
                        <li className='text-2xl font-medium py-3 ' >
                            <Link onClick={handelClick} to="skills" spy={true} smooth={true} offset={-40} duration={500}> Skills </Link>
                        </li>
                        <li className='text-2xl font-medium py-3 ' >
                            <Link onClick={handelClick} to="work" spy={true} smooth={true} offset={-40} duration={500}> Work </Link>
                        </li>
                        <li className='text-2xl font-medium py-3 ' >
                            <Link onClick={handelClick} to="contact" spy={true} smooth={true} offset={-10} duration={500}> Contact </Link>
                        </li>
                    </ul>
                    <Footer />
                </div>
            </div>

            {/* Socal icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-500  px-4 bg-blue-600'>
                        <a href="https://linkedin.com/in/abdulmalek-al-aktaa" target="_blank" rel="noreferrer" className='flex justify-between items-center w-full'>
                            Linkedin <FaLinkedin size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-500  px-4 bg-[#334155]'>
                        <a href="https://github.com/Abdulmalek44" target="_blank" rel="noreferrer" className='flex justify-between items-center w-full'>
                            Github <FaGithub size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-500  px-4 bg-green-400'>
                        <CopyButton  >
                            Email <HiOutlineMail size={30} /></CopyButton>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-105px] hover:ml-[-10px] duration-500  px-4 bg-gray-500'>
                        <button className='flex justify-between items-center w-full ' onClick={DownloadResume}>
                            Resume <BsFillPersonLinesFill size={30} /></button>
                    </li>
                </ul>
            </div>
        </header >
    )
}

export default Navbare
