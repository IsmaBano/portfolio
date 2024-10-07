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
      // console.log(currTheme)
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
                contentArrowStyle={{ borderRight: '7px solid  #008080' }}
                date="2019 - 2020"
                iconStyle={{ background: '#008080', color: `${color}` }}
                icon={<IoSchoolSharp className='text-[#1D232A]' />}
              >
                <h3 className="vertical-timeline-element-title text-[#008080] dark:text-[#14F8A3] text-2xl">High School</h3>
                <h4 className="vertical-timeline-element-subtitle text-md">Parmeshwari devi dhanuka saraswati vidya mandir,  Vrindavan, Uttar pradesh</h4>
                <p>
                  <p>Percentage - 89 % ( CBSE BOARD)</p>
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', color: `${color}` }}
                contentArrowStyle={{ borderRight: '7px solid  #008080' }}
                date="2021 - 2022"
                iconStyle={{ background: '#008080', color: `${color}` }}
                icon={<GiDiploma className='text-[#1D232A]' />}
              >
                <h3 className="vertical-timeline-element-title text-[#008080] dark:text-[#14F8A3] text-2xl">Intermediate</h3>
                <h4 className="vertical-timeline-element-subtitle text-md">Parmeshwari devi dhanuka saraswati vidya mandir, Vrindavan, Uttar pradesh</h4>
                <p>Percentage - 91 % ( CBSE BOARD)</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', color: `${color}` }}
                contentArrowStyle={{ borderRight: '7px solid  #008080' }}
                date="2019 - 2021"
                iconStyle={{ background: '#008080', color: `${color}` }}
                icon={<FaGoogleScholar className='text-[#1D232A]' />}
              >
                <h3 className="vertical-timeline-element-title text-[#008080] dark:text-[#14F8A3] text-2xl">Advance Diploma in Computer Application</h3>
                <h4 className="vertical-timeline-element-subtitle text-md"></h4>
                <p>Branch - Computer Science & Engineering</p>
                <p>Percentage - 80% </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', color: `${color}` }}
                contentArrowStyle={{ borderRight: '7px solid  #008080' }}
                date="2022 - PRESENT"
                iconStyle={{ background: '#008080', color: `${color}` }}
                icon={<FaGraduationCap className='text-[#1D232A]' />}
              >
                <h3 className="vertical-timeline-element-title text-[#008080] dark:text-[#14F8A3] text-2xl">B.Tech</h3>
                <h4 className="vertical-timeline-element-subtitle text-md">Harcourt Butler Technical University, Kanpur, Uttar Pradesh</h4>
                <p>Branch - Information Technology</p>
                <p>Present</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme