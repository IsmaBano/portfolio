import React from "react";
import girl from "../assets/girl.jpg";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { SiLinkedin } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaTwitterSquare } from "react-icons/fa";
import mernStack from "../assets/mernStack.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center mt-9 md:mt-16 lg:mt-20">
      <div className="md:w-[85%]">
        <div className="hero w-full">
          <div className="w-full hero-content flex-col md:flex-row-reverse p-7 justify-between items-center">
            {/* Profile Section */}
            <div className="w-full md:w-[50%] flex flex-col justify-center items-center">
              <div
                className="w-[200px] md:w-[260px] lg:w-[310px] h-[200px] md:h-[260px] lg:h-[310px] rounded-full shadow-lg"
                style={{
                  backgroundImage: `url(${girl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  boxShadow:
                    "rgba(143, 43, 223, 0.4) 0px 0px 0px 3px, rgba(143, 43, 223, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
                }}
              ></div>
              <div className="flex items-center w-full flex-col justify-center mt-4">
                <img
                  src={mernStack}
                  alt="MERN Stack"
                  className="selector w-44 h-24 bg-transparent animate-bounce"
                />
                <p className="text-xl font-semibold mt-2">Fullstack Developer</p>
              </div>
            </div>

            {/* Intro Section */}
            <div className="w-full md:w-[50%] flex flex-col items-start justify-start">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-3">
                Hi There,
              </h1>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
                I'm <span className="text-[#CB9DF0] dark:text-[#8f2bdf]">Isma</span>
              </h1>
              <div className="py-6 text-[19px] md:text-[23px]">
                <Typewriter
                  options={{
                    strings: [
                      "Fullstack Developer!",
                      "MERN Stack Enthusiast!",
                      "Problem Solver!",
                      "Clean & Reusable Code Advocate!",
                    ],
                    autoStart: true,
                    deleteSpeed: 4,
                    loop: true,
                  }}
                />
              </div>
              <p className="text-[16px] leading-relaxed">
                Welcome to my portfolio! I'm Isma, a dedicated full-stack web
                developer driven by innovation and creativity. Explore my
                projects, achievements, and the unique solutions I bring to life.
                Whether you're here to connect, collaborate, or get inspired, I'm
                excited to share my journey with you. Enjoy your visit!
              </p>
              <Link
                to={"/about"}
                onClick={() => window.scroll(0, 0)}
                className="btn text-lg text-[#CB9DF0] dark:text-[#8f2bdf] bg-transparent shadow-md shadow-slate-900 hover:scale-105 transition-transform duration-200 text-[15px] mt-5"
              >
                About Me{" "}
                <span className="text-lg hover:scale-110 transition-transform duration-150">
                  <IoMdArrowDropdownCircle />
                </span>
              </Link>
              <div className="flex gap-7 mt-9">
                <a
                  href="https://www.linkedin.com/in/isma-bano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-125 text-[#CB9DF0] dark:text-[#8f2bdf] transition-transform duration-150 cursor-pointer"
                >
                  <SiLinkedin />
                </a>
                <a
                  href="https://github.com/IsmaBano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-125 text-[#CB9DF0] dark:text-[#8f2bdf] transition-transform duration-150 cursor-pointer"
                >
                  <VscGithub />
                </a>
                <a
                  href="#"
                  className="text-2xl hover:scale-125 text-[#CB9DF0] dark:text-[#8f2bdf] transition-transform duration-150 cursor-pointer"
                >
                  <FaTwitterSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
