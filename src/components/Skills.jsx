import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap, FaJava, FaPython, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

const Skills = () => {
    return (
        <>
            <div className='w-full flex justify-center items-center mt-10 md:mt-16 lg:mt-20 mb-20'>
                <div className='md:w-[85%]'>
                    <div className='w-full flex gap-5 flex-col'>
                        <div className='w-full flex flex-col justify-center items-center'>
                            <h2 className='text-4xl text-[#CB9DF0] dark:text-[#8f2bdf]'>Skills</h2>
                            <div className='w-20 h-[1.5px] bg-[#CB9DF0] dark:bg-[#8f2bdf]'></div>
                            <p className='mt-5 text-sm sm:text-lg'>Here are my skills that might impress you.</p>
                        </div>
                        <div className="grid pl-3 pr-3 grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-7 mt-7">
                            {/* HTML5 */}
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#FF5733]" style={{ "--value": 90 }} role="progressbar">
                                    90%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>HTML5</p>
                                    <span className='text-[#FF5733]'><FaHtml5 /></span>
                                </div>
                            </div>
                            {/* CSS3 */}
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#2965F1]" style={{ "--value": 80 }} role="progressbar">
                                    80%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>CSS3</p>
                                    <span className='text-[#2965F1]'><FaCss3 /></span>
                                </div>
                            </div>
                            {/* JavaScript */}
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#F7DF1E]" style={{ "--value": 70 }} role="progressbar">
                                    70%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>JavaScript</p>
                                    <span className='text-[#F7DF1E]'><IoLogoJavascript /></span>
                                </div>
                            </div>
                           
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#7952B3]" style={{ "--value": 85 }} role="progressbar">
                                    85%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>Bootstrap</p>
                                    <span className='text-[#7952B3]'><FaBootstrap /></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#0078D7]" style={{ "--value": 75 }} role="progressbar">
                                    75%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>Java</p>
                                    <span className='text-[#0078D7]'><FaJava /></span>
                                </div>
                            </div>
                        
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#3776AB]" style={{ "--value": 75 }} role="progressbar">
                                    75%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>Python</p>
                                    <span className='text-[#3776AB]'><FaPython /></span>
                                </div>
                            </div>
                     
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#61DAFB]" style={{ "--value": 70 }} role="progressbar">
                                    70%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>ReactJs</p>
                                    <span className='text-[#61DAFB]'><FaReact /></span>
                                </div>
                            </div>
                         
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#68A063]" style={{ "--value": 75 }} role="progressbar">
                                    75%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>Node.Js</p>
                                    <span className='text-[#68A063]'><FaNodeJs /></span>
                                </div>
                            </div>
                         
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#661a1a]" style={{ "--value": 80 }} role="progressbar">
                                    80%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>Express.Js</p>
                                    <span className='text-[#661a1a]'><SiExpress /></span>
                                </div>
                            </div>
                           
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#47A248]" style={{ "--value": 75 }} role="progressbar">
                                    75%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>MongoDB</p>
                                    <span className='text-[#47A248]'><SiMongodb /></span>
                                </div>
                            </div>
                            
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#00758F]" style={{ "--value": 80 }} role="progressbar">
                                    80%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>MySQL</p>
                                    <span className='text-[#00758F]'><SiMysql /></span>
                                </div>
                            </div>
                           
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#38B2AC]" style={{ "--value": 85 }} role="progressbar">
                                    85%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>TailwindCSS</p>
                                    <span className='text-[#38B2AC]'><RiTailwindCssLine /></span>
                                </div>
                            </div>
                        
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#333]" style={{ "--value": 70 }} role="progressbar">
                                    70%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>GitHub</p>
                                    <span className='text-[#333]'><FaGithub /></span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 justify-center items-center'>
                                <div className="radial-progress text-[#518f3f]" style={{ "--value": 80 }} role="progressbar">
                                    70%
                                </div>
                                <div className='flex items-center gap-3'>
                                    <p>Next.js</p>
                                    <span className='text-[#518f3f]'><SiNextdotjs /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;
