import React from "react";
import { SiLinkedin } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import girl from "../assets/girl.jpg";

const AboutComponents = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-10 md:mt-16 lg:mt-20 mb-20">
        <div className="md:w-[85%]">
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-4xl text-[#CB9DF0] dark:text-[#8f2bdf]">
              About Me
            </h2>
            <div className="w-20 h-[1.5px] bg-[#CB9DF0] dark:bg-[#8f2bdf]"></div>
            <p className="mt-5 text-sm sm:text-lg">
              Wow, A whole page about me !!
            </p>
          </div>
          <div className="hero mt-9">
            <div className="hero-content flex-col lg:flex-row">
              <div className="hidden md:flex shadow-sm shadow-slate-900 rounded-md">
                <img
                  src={girl}
                  className="selector max-w-sm h-[340px] pl-20 opacity-90 rounded-lg shadow-2xl"
                />
              </div>
              <div className="pl-10 pr-10">
                <h1 className="text-2xl md:text-4xl font-bold ">
                  A Little About{" "}
                  <span className="text-[#CB9DF0] dark:text-[#8f2bdf]">Me</span>
                </h1>
                <p className="py-6">
                Hi, I’m Isma, a full-stack web developer with a strong focus on creating seamless and efficient digital solutions. I specialize in both front-end and back-end technologies, aiming to build applications that are not only functional but also intuitive and scalable. Alongside web development, I am constantly honing my skills in Data Structures and Algorithms (DSA) to tackle complex problems with precision. I’m always excited to collaborate on innovative projects that push the boundaries of what’s possible!
                </p>
                <div className="flex gap-7 mt-2">
                  <div className="text-2xl hover:scale-125 text-[#CB9DF0] dark:text-[#8f2bdf] cursor-pointer">
                    <a
                      href="https://www.linkedin.com/in/isma-bano"
                      target="_blank"
                    >
                      <SiLinkedin />
                    </a>
                  </div>
                  <div className="text-2xl hover:scale-125 text-[#CB9DF0] dark:text-[#8f2bdf] cursor-pointer">
                    <a href="https://github.com/IsmaBano" target="_blank">
                      <VscGithub />
                    </a>
                  </div>
                  <div className="text-2xl hover:scale-125 text-[#CB9DF0] dark:text-[#8f2bdf] cursor-pointer">
                    <FaTwitterSquare />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Link
                    to={"/about"}
                    onClick={() => window.scroll(0, 0)}
                    className="btn text-lg text-[#CB9DF0] dark:text-[#8f2bdf] bg-transparent hover:scale-105 transition-transform duration-200 shadow-sm shadow-slate-900 hover:bg-transparent text-[15px] mt-5"
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
