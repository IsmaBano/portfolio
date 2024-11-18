import React, { useEffect, useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoSchoolSharp } from "react-icons/io5";
import { GiDiploma } from "react-icons/gi";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";

const Aboutme = () => {

  const [currTheme, setCurrTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  let color = "";

  useEffect(()=>{
    if(currTheme === "dark"){
      color = "white"
    }else{
      color = "black"
    }
  },[currTheme])


  return (
    <>
      <div className='w-full flex justify-center items-center mt-9 md:mt-16 lg:mt-20'>
        <div className='md:w-[85%]'>
          <div>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', color: `${color}` }}
                contentArrowStyle={{ borderRight: '7px solid  #CB9DF0' }}
                date="2018 - 2019"
                iconStyle={{ background: '#CB9DF0', color: `${color}` }}
                icon={<IoSchoolSharp className='text-[#1D232A]' />}
              >
                <h3 className="vertical-timeline-element-title text-[#CB9DF0] dark:text-[#8f2bdf] text-2xl">High School</h3>
                <h4 className="vertical-timeline-element-subtitle text-md">Bishop Johnson School and College,Allahabad, Uttar pradesh</h4>
                <p>
                  <p> ( ICSE BOARD)</p>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', color: `${color}` }}
                contentArrowStyle={{ borderRight: '7px solid  #CB9DF0' }}
                date="2020 - 2021"
                iconStyle={{ background: '#CB9DF0', color: `${color}` }}
                icon={<GiDiploma className='text-[#1D232A]' />}
              >
                <h3 className="vertical-timeline-element-title text-[#CB9DF0] dark:text-[#8f2bdf] text-2xl">Intermediate</h3>
                <h4 className="vertical-timeline-element-subtitle text-md">Bishop Johnson School and College Allahabad, Uttar pradesh</h4>
                <p> ( ISC BOARD)</p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', color: `${color}` }}
                contentArrowStyle={{ borderRight: '7px solid  #CB9DF0' }}
                date="2022 - PRESENT"
                iconStyle={{ background: '#CB9DF0', color: `${color}` }}
                icon={<FaGraduationCap className='text-[#1D232A]' />}
              >
                <h3 className="vertical-timeline-element-title text-[#CB9DF0] dark:text-[#8f2bdf] text-2xl">B.Tech</h3>
                <h4 className="vertical-timeline-element-subtitle text-md">Harcourt Butler Technical University, Kanpur, Uttar Pradesh</h4>
                <p>Branch - Computer Science and Engineering</p>
                <p>Present-</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme