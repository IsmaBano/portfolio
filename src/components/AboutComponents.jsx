import React from "react";
import { SiLinkedin } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import shubhamabout from "../assets/shubhamabout.png";

const AboutComponents = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-10 md:mt-16 lg:mt-20 mb-20">
        <div className="md:w-[85%]">
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-4xl text-[#008080] dark:text-[#14F8A3]">
              About Me
            </h2>
            <div className="w-20 h-[1.5px] bg-[#008080] dark:bg-[#14F8A3]"></div>
            <p className="mt-5 text-sm sm:text-lg">
              Wow, A whole page about me !!
            </p>
          </div>
          <div className="hero mt-9">
            <div className="hero-content flex-col lg:flex-row">
              <div className="hidden md:flex shadow-sm shadow-slate-900 rounded-md">
                <img
                  src={shubhamabout}
                  className="selector max-w-sm h-[340px] pl-20 opacity-90 rounded-lg shadow-2xl"
                />
              </div>
              <div className="pl-10 pr-10">
                <h1 className="text-2xl md:text-4xl font-bold ">
                  A Bit About{" "}
                  <span className="text-[#008080] dark:text-[#14F8A3]">Me</span>
                </h1>
                <p className="py-6">
                  Hello! I'm Shubham, a passionate full stack web developer with
                  a keen eye for crafting digital experiences that are both
                  user-friendly and technically sound. With expertise in
                  front-end and back-end development, I strive to build robust,
                  scalable solutions. Alongside my web development journey, I
                  actively work on Data Structures and Algorithms (DSA),
                  ensuring my problem-solving skills are sharp and efficient.
                  Let's build something innovative together!
                </p>
                <div className="flex gap-7 mt-2">
                  <div className="text-2xl hover:scale-125 text-[#008080] dark:text-[#14F8A3] cursor-pointer">
                    <a
                      href="https://www.linkedin.com/in/shubham-b-b35455258/"
                      target="_blank"
                    >
                      <SiLinkedin />
                    </a>
                  </div>
                  <div className="text-2xl hover:scale-125 text-[#008080] dark:text-[#14F8A3] cursor-pointer">
                    <a href="https://github.com/s7917" target="_blank">
                      <VscGithub />
                    </a>
                  </div>
                  <div className="text-2xl hover:scale-125 text-[#008080] dark:text-[#14F8A3] cursor-pointer">
                    <FaTwitterSquare />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link
                    to={"/about"}
                    onClick={() => window.scroll(0, 0)}
                    className="btn text-lg text-[#008080] dark:text-[#14F8A3] bg-transparent shadow-sm shadow-slate-900 hover:bg-transparent text-[15px] mt-5"
                  >
                    More About Me
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

export default AboutComponents;
