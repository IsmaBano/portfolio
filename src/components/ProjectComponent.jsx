import React from "react";
import jobtool from "../assets/jobtool.png";
import planiq from "../assets/planiq.png";
import probshare from "../assets/probshare.png";;
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import ProjectCards from "./ProjectCards";


const ProjectComponent = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-10 md:mt-16 lg:mt-20 mb-20">
        <div className="md:w-[85%]">
          <div className="w-full flex gap-5 flex-col">
            <div className="w-full flex flex-col justify-center items-center">
              <h2 className="text-4xl text-[#CB9DF0] dark:text-[#8f2bdf]">
                Projects
              </h2>
              <div className="w-20 h-[1.5px] bg-[#CB9DF0] dark:bg-[#8f2bdf]"></div>
              <p className="mt-5 text-sm sm:text-lg">
                Here are some of the my projects.{" "}
              </p>
            </div>

            <div className="mt-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProjectCards image={jobtool} url={"https://github.com/IsmaBano/jobTool"} title={"JobTool: A MERN stack-powered platform for seamless job management and opportunities, styled with Tailwind CSS."}/>
              <ProjectCards image={planiq} url={"https://github.com/IsmaBano/planiq"} title={"A simple and efficient planiq app built with EJS, Node.js, and MongoDB for streamlined task management."}/>
              <ProjectCards image={probshare} url={"https://github.com/IsmaBano/probshare"} title={"ProbShare: A collaborative problem-sharing platform built with EJS, Node.js, MongoDB, and robust authentication for secure user interactions."}/>
             

                <div className="flex items-center ">
                  <Link
                    to={"/projects"}
                    onClick={() => window.scroll(0, 0)}
                    className="btn text-lg text-[#CB9DF0] dark:text-[#8f2bdf]  bg-transparent shadow-sm shadow-slate-900 hover:bg-transparent hover:scale-105 transition-transform duration-200 text-[15px] mt-5"
                  >
                    View all projects{" "}
                    <span>
                      <MdKeyboardDoubleArrowRight />
                    </span>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectComponent;
