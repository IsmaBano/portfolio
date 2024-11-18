import React from 'react'
import jobtool from "../assets/jobtool.png";
import planiq from "../assets/planiq.png";
import probshare from "../assets/probshare.png";


import { SiLinkedin } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaTwitterSquare } from "react-icons/fa";
import ProjectCards from '../components/ProjectCards'

import drumkit from "../assets/drumkit.png"
import calculator from "../assets/calculator.png"
import luckydice from "../assets/luckydice.png"
import jokeapp from "../assets/jokeapp.png"
import amazon from "../assets/amazon.png"
import usablity from "../assets/usablity.png"


const Projects = () => {
  return (
    <>
      <div className='w-full relative flex justify-center items-center mt-10 md:mt-16 lg:mt-20 mb-20'>
        <div className='md:w-[85%]'>
          <div className='w-full flex gap-5 flex-col'>

            <div className=''>
              <div className="grid justify-items-center align-middle grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                
              <ProjectCards image={jobtool} url={"https://github.com/IsmaBano/jobTool"} title={"JobTool: A MERN stack-powered platform for seamless job management and opportunities, styled with Tailwind CSS."}/>
              <ProjectCards image={planiq} url={"https://github.com/IsmaBano/planiq"} title={"A simple and efficient planiq app built with EJS, Node.js, and MongoDB for streamlined task management."}/>
              <ProjectCards image={probshare} url={"https://github.com/IsmaBano/probshare"} title={"ProbShare: A collaborative problem-sharing platform built with EJS, Node.js, MongoDB, and robust authentication for secure user interactions."}/>
              <ProjectCards image={luckydice} url={"https://github.com/IsmaBano/luckyrollsgame"} title={"LuckyRollsGame: A dynamic React-based game of chance, delivering fun and excitement with every roll!"}/>
                <ProjectCards image={jokeapp} url={"https://github.com/IsmaBano/jokeapp"} title={"Devloped a jokeapp Maker APP using react"}/>
                <ProjectCards image={drumkit} url={"https://github.com/IsmaBano/drumkit"} title={"devloped a drumkitk Using HTML , CSS , Javascript"}/>
                <ProjectCards image={amazon} url={"https://github.com/IsmaBano/amazonclone"} title={"Amazon website clone using HTML ,CSS"}/>
              

              </div>

              <div className='flex md:pl-8 mt-20'>
                <p className='flex gap-3 text-2xl'>To Be Continued <span className="loading loading-dots loading-lg text-[#CB9DF0] dark:text-[#8f2bdf]"></span></p>
              </div>
            </div>

          </div>

          <div className='fixed top-56 left-0'>
            <div className='flex flex-col gap-7 mt-9'>
              <div className='text-2xl hover:scale-125 text-[#CB9DF0] dark:text-[#8f2bdf] cursor-pointer'><a href="https://www.linkedin.com/in/isma-bano" target='_blank'><SiLinkedin /></a></div>
              <div className='text-2xl hover:scale-125 text-[#CB9DF0] dark:text-[#8f2bdf] cursor-pointer'><a href="https://github.com/IsmaBano" target='_blank'><VscGithub /></a></div>
              <div className='text-2xl hover:scale-125 text-[#CB9DF0] dark:text-[#8f2bdf] cursor-pointer'><FaTwitterSquare /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects