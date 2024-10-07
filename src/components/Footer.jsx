import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='w-full flex justify-center items-center mt-10 md:mt-16 lg:mt-20 pb-20'>
                <div className='md:w-[85%]'>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <h2 className='text-4xl md:text-5xl font-bold text-[#008080] dark:text-[#14F8A3]'>Thank You</h2>
                        <p className='mt-5 text-sm sm:text-lg'>Your time and expertise are highly respected.</p>
                    </div>
                    <div className='mt-7 pl-3 pr-3'>
                        <div className='flex'>
                            <span className='text-[#008080] dark:text-[#14F8A3] text-2xl mr-2'><FaQuoteLeft /></span>
                            <h2 className='text-lg md:text-3xl lg:text-4xl'>
                                Let's Build Something Amazing Together
                            </h2>
                            <span className='text-[#008080] dark:text-[#14F8A3] text-2xl ml-2'><FaQuoteRight /></span>
                        </div>
                        <p className='mt-4 text-[13px] sm:text-md md:text-lg'>Thank you for visiting my portfolio. I’m passionate about crafting exceptional digital experiences that make a difference. Whether you have a project in mind or just want to connect, I’d love to hear from you. Let’s collaborate and bring your ideas to life!</p>
                        <p className='mt-4 text-[13px] sm:text-md md:text-lg'>Feel free to reach out. I look forward to connecting with you!</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer