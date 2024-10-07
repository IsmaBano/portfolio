import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import {Link} from 'react-router-dom'

const ProjectCards = ({ image, url, title }) => {
    return (
        <>
            <div className="card bg-base-100 w-72 sm:w-64 md:w-72 shadow-sm shadow-slate-900 rounded-md">
                <figure>
                    <img
                        src={image} alt="Shoes" className='hover:scale-105 cursor-pointer' />
                </figure>
                <div className="p-5">
                    <p>{title}</p>
                    <div><Link target='_blank' to={url} onClick={() => window.scroll(0, 0)} className='btn text-lg text-[#008080] dark:text-[#14F8A3] bg-transparent shadow-sm shadow-slate-900 hover:bg-transparenttext-[15px] mt-5' >Code <span className='text-sm'><FaArrowRight /></span></Link></div>
                </div>
            </div>
        </>
    )
}

export default ProjectCards