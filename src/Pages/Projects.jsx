import React from 'react'
import wanderlust from "../assets/wanderlust.png"
import ecommerce from "../assets/ecommerce.png"
import foodOrdering from "../assets/foodOrdering.png"
import classyads from "../assets/classyads.png"
import blogApp from "../assets/blogApp.png"
import bookStore from "../assets/bookStore.png"
import Haloween from "../assets/Haloween.png"
import NewsApp from "../assets/NewsApp.png"
import SocialMedia from "../assets/SocialMedia.png"
import movieflix from "../assets/movieflix.png"
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaTwitterSquare } from "react-icons/fa";
import ProjectCards from '../components/ProjectCards'

const Projects = () => {
  return (
    <>
      <div className='w-full relative flex justify-center items-center mt-10 md:mt-16 lg:mt-20 mb-20'>
        <div className='md:w-[85%]'>
          <div className='w-full flex gap-5 flex-col'>

            <div className=''>
              <div className="grid justify-items-center align-middle grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                
                <ProjectCards image={ecommerce} url={"https://github.com/s7917/Code-shares"} title={"Fullstack online Code Collabration App developed using MERN technology."}/>
                <ProjectCards image={wanderlust} url={"https://github.com/s7917/CurioMart"} title={"Fullstack online Ecommerce website Using Mern Stack technology"}/>
                <ProjectCards image={foodOrdering} url={"https://github.com/s7917/PARALLAX-EFFECT-website"} title={" parallax effect website using HTML, CSS, JavaScript"}/>
                <ProjectCards image={blogApp} url={"https://github.com/s7917/Razorpay-clone"} title={"RazorPay Clone using HTML , Tailwind CSS "}/>
                <ProjectCards image={bookStore} url={"https://github.com/s7917/PORTFOLIO-MAKER-APP.github.io"} title={"Devloped a portfolio Maker APP using HTML , CSS , Javascript"}/>
                <ProjectCards image={classyads} url={"https://github.com/s7917/digital-Clock.github.io"} title={"devloped a digital Clock Using HTML , CSS , Javascript"}/>
                <ProjectCards image={NewsApp} url={"https://github.com/s7917/usabilitywebsite.github.io"} title={"Usabilitywebsite Clone using html ,CSS , javascript"}/>
                <ProjectCards image={SocialMedia} url={"https://github.com/s7917/Amazon-clone-html-css-project"} title={"Amazon website clone"}/>
                <ProjectCards image={movieflix} url={"https://github.com/s7917/CALCULATOR"} title={"A simple Calculator"}/>

              </div>

              <div className='flex md:pl-8 mt-20'>
                <p className='flex gap-3 text-2xl'>To Be Continued <span className="loading loading-dots loading-lg text-[#008080] dark:text-[#14F8A3]"></span></p>
              </div>
            </div>

          </div>

          <div className='fixed top-56 left-0'>
            <div className='flex flex-col gap-7 mt-9'>
              <div className='text-2xl hover:scale-125 text-[#008080] dark:text-[#14F8A3] cursor-pointer'><a href="https://www.linkedin.com/in/shubham-b-b35455258/" target='_blank'><SiLinkedin /></a></div>
              <div className='text-2xl hover:scale-125 text-[#008080] dark:text-[#14F8A3] cursor-pointer'><a href="https://github.com/s7917" target='_blank'><VscGithub /></a></div>
              <div className='text-2xl hover:scale-125 text-[#008080] dark:text-[#14F8A3] cursor-pointer'><FaTwitterSquare /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects