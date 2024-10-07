import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap, FaJava, FaPython, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";



const Skills = () => {
    return (
        <>
            <div className='w-full flex justify-center items-center mt-10 md:mt-16 lg:mt-20 mb-20'>
                <div className='md:w-[85%]'>
                    <div className='w-full flex gap-5 flex-col'>
                        <div className='w-full flex flex-col justify-center items-center'>
                            <h2 className='text-4xl text-[#008080] dark:text-[#14F8A3]'>Skills</h2>
                            <div className='w-20 h-[1.5px] bg-[#008080] dark:bg-[#14F8A3]'></div>
                            <p className='mt-5 text-sm sm:text-lg'>Here are my skills that might impress you. </p>
                        </div>
                        <div className="grid pl-3 pr-3 grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-7 mt-7">
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#F08080]" style={{ "--value": 90 }} role="progressbar">
                                    90%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>HTML5</p>
                                    <span className='text-[#F08080]'><FaHtml5 /></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#379AD6]" style={{ "--value": 80 }} role="progressbar">
                                    80%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>CSS3</p>
                                    <span className='text-[#379AD6]'><FaCss3 /></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#EFD81D]" style={{ "--value": 70 }} role="progressbar">
                                    70%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>JavaScript</p>
                                    <span className='text-[#EFD81D]'><IoLogoJavascript /></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#6E10EE]" style={{ "--value": 85 }} role="progressbar">
                                    85%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>Bootstrap</p>
                                    <span className='text-[#6E10EE]'><FaBootstrap /></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#507E9C]" style={{ "--value": 75 }} role="progressbar">
                                    75%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>C++</p>
                                    <span className='text-[#507E9C]'><FaJava /></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#F6D146]" style={{ "--value": 75 }} role="progressbar">
                                    75%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>Python</p>
                                    <span className='text-[#F6D146]'><FaPython /></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#5ED3F3]" style={{ "--value": 70 }} role="progressbar">
                                    70%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>ReactJs</p>
                                    <span className='text-[#5ED3F3]'><FaReact /></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#629957]" style={{ "--value": 75 }} role="progressbar">
                                    75%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>Node.Js</p>
                                    <span className='text-[#629957]'><FaNodeJs /></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#676F78]" style={{ "--value": 80 }} role="progressbar">
                                    80%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>Express.Js</p>
                                    <span className='text-[#676F78]'><SiExpress /></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#118D4D]" style={{ "--value": 75 }} role="progressbar">
                                    75%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>MongoDB</p>
                                    <span className='text-[#118D4D]'><SiMongodb /></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#EA8C10]" style={{ "--value": 80 }} role="progressbar">
                                    80%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>MySQL</p>
                                    <span className='text-[#EA8C10]'><SiMysql /></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#17B7B3]" style={{ "--value": 85 }} role="progressbar">
                                    85%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>TailwindCSS</p>
                                    <span className='text-[#17B7B3]'><RiTailwindCssLine /></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress " style={{ "--value": 70 }} role="progressbar">
                                    70%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>GitHub</p>
                                    <span className=''><FaGithub /></span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills