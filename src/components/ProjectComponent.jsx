import React from "react";
import wanderlust from "../assets/wanderlust.png";
import codetogether from "../assets/codetogether.png";
import paralex from "../assets/paralex.png";
import razorpay from "../assets/razorpay.png";
import digiclock from "../assets/digiclock.png";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import ProjectCards from "./ProjectCards";
import curiomart from "../assets/curiomart.png";

const ProjectComponent = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-10 md:mt-16 lg:mt-20 mb-20">
        <div className="md:w-[85%]">
          <div className="w-full flex gap-5 flex-col">
            <div className="w-full flex flex-col justify-center items-center">
              <h2 className="text-4xl text-[#008080] dark:text-[#14F8A3]">
                Projects
              </h2>
              <div className="w-20 h-[1.5px] bg-[#008080] dark:bg-[#14F8A3]"></div>
              <p className="mt-5 text-sm sm:text-lg">
                Here are some of the my projects.{" "}
              </p>
            </div>

            <div className="mt-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProjectCards image={codetogether} url={"https://github.com/s7917/Code-shares"} title={"Fullstack online Code Collabration App developed using MERN technology."}/>
              <ProjectCards image={curiomart} url={"https://github.com/s7917/CurioMart"} title={"Fullstack online Ecommerce website Using Mern Stack technology"}/>
              <ProjectCards image={paralex} url={"https://github.com/s7917/PARALLAX-EFFECT-website"} title={" parallax effect website using HTML, CSS, JavaScript"}/>
              <ProjectCards image={razorpay} url={"https://github.com/s7917/Razorpay-clone"} title={"RazorPay Clone using HTML , Tailwind CSS "}/>
              <ProjectCards image={digiclock} url={"https://github.com/s7917/digital-Clock.github.io"} title={"Digital Clock using HTML , Tailwind CSS , javascript "}/>
             
             

                <div className="flex items-center">
                  <Link
                    to={"/projects"}
                    onClick={() => window.scroll(0, 0)}
                    className="btn text-lg text-[#008080] dark:text-[#14F8A3] bg-transparent shadow-sm shadow-slate-900 hover:bg-transparent text-[15px] mt-5"
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
