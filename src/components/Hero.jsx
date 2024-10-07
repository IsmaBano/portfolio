import React from 'react'
import shubhamabout from "../assets/shubhamabout.png"; 
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { SiLinkedin } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaTwitterSquare } from "react-icons/fa";
import mernStack from "../assets/mernStack.png";
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom"



const Hero = () => {
    
    return (
        <>
            <div className='w-full flex justify-center items-center mt-9 md:mt-16 lg:mt-20'>
                <div className='md:w-[85%]'>
                    <div className="hero w-full ">
                        <div className="w-full hero-content flex-col md:flex-row-reverse p-7 justify-between items-center">
                            <div className='w-full md:w-[50%] flex flex-col justify-center items-center'>
                                <div className='w-[200px] md:w-[260px] lg:w-[310px] h-[200px] md:h-[260px] lg:h-[310px] rounded-full' style={{ backgroundImage: `url(${shubhamabout})`, backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat", boxShadow: "rgba(0,128,128, 0.4) 0px 0px 0px 3px, rgba(0,128,128, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"}}>
                                </div>
                                <div className='flex items-center w-full flex-col justify-center'>
                                    <img src={mernStack} alt="" className='selector w-44 h-24 bg-transparent' />
                                    <p>Developer</p>
                                </div>
                            </div>
                            <div className='w-full md:w-[50%] flex flex-col items-start justify-start'>
                                <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3">Hi There,</h1>
                                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">I'm <span className='text-[#008080] dark:text-[#14F8A3]'>Shubham</span></h1>
                                <div className="py-6 float-left text-[19px] md:text-[23px]">
                                    <Typewriter
                                        options={{
                                            strings: ['Fullstack Developer !', 'MERN Stack Developer !', 'Problem Solving Abilities !', 'Clean And Reusable Codes !'],
                                            autoStart: true,
                                            deleteSpeed: 4,
                                            loop: true,
                                        }}
                                    />
                                </div>
                                <p className='text-[15px]'>Welcome to my portfolio! I'm Shubham , a passionate full stack web developer. Explore my projects, achievements, and the innovative solutions I've crafted. Feel free to connect with me for any inquiries or collaboration opportunities. Enjoy your visit!</p>
                                <div><Link to={"/about"} onClick={() => window.scroll(0, 0)} className='btn text-lg text-[#008080] dark:text-[#14F8A3] bg-transparent shadow-sm shadow-slate-900 hover:bg-transparent text-[15px] mt-5' >About Me <span className='text-lg hover:scale-110'><IoMdArrowDropdownCircle /></span></Link></div>
                                <div className='flex gap-7 mt-9'>
                                    <div className='text-2xl hover:scale-125 text-[#008080] dark:text-[#14F8A3] cursor-pointer'><a href="https://www.linkedin.com/in/shubham-b-b35455258/" target='_blank'><SiLinkedin /></a></div>
                                    <div className='text-2xl hover:scale-125 text-[#008080] dark:text-[#14F8A3] cursor-pointer'><a href="https://github.com/s7917" target='_blank'><VscGithub /></a></div>
                                    <div className='text-2xl hover:scale-125 text-[#008080] dark:text-[#14F8A3] cursor-pointer'><FaTwitterSquare /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero