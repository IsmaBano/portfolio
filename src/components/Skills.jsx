import React from 'react';
import { FaHtml5, FaCss3, FaBootstrap, FaJava, FaPython, FaNodeJs, FaReact, FaDocker } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiMysql, SiNextdotjs, SiRedux, SiTypescript, SiPostgresql, SiMicrosoftazure, SiApachekafka, SiRedis, SiDrizzle, SiNumpy, SiPandas } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

const Skills = () => {
    return (
        <>
            <div className='w-full flex justify-center items-center mt-10 md:mt-16 lg:mt-20 mb-20'>
                <div className='md:w-[85%]'>
                    <div className='w-full flex gap-5 flex-col'>
                        <div className='w-full flex flex-col justify-center items-center'>
                            <h2 className='text-4xl text-[#CB9DF0] dark:text-[#8f2bdf]'>Skills</h2>
                            <div className='w-20 h-[1.5px] bg-[#CB9DF0] dark:bg-[#8f2bdf]'></div>
                            <p className='mt-5 text-sm sm:text-lg'>Here are my skills that might impress you.</p>
                        </div>
                        <div className="grid pl-3 pr-3 grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-7 mt-7">
                            {/* Languages */}
                            <Skill name="HTML5" icon={<FaHtml5 />} color="#FF5733" value={90} />
                            <Skill name="CSS3" icon={<FaCss3 />} color="#2965F1" value={80} />
                            <Skill name="JavaScript" icon={<IoLogoJavascript />} color="#F7DF1E" value={75} />
                            <Skill name="TypeScript" icon={<SiTypescript />} color="#3178C6" value={70} />
                            <Skill name="Java" icon={<FaJava />} color="#0078D7" value={75} />
                            <Skill name="Python" icon={<FaPython />} color="#3776AB" value={75} />
                            <Skill name="SQL" icon={<SiMysql />} color="#00758F" value={80} />

                            {/* Frontend */}
                            <Skill name="React.js" icon={<FaReact />} color="#61DAFB" value={75} />
                            <Skill name="Next.js" icon={<SiNextdotjs />} color="#518f3f" value={70} />
                            <Skill name="TailwindCSS" icon={<RiTailwindCssLine />} color="#38B2AC" value={85} />
                            <Skill name="Bootstrap" icon={<FaBootstrap />} color="#7952B3" value={85} />
                            <Skill name="Redux" icon={<SiRedux />} color="#764ABC" value={75} />
                            <Skill name="Axios" icon={<SiExpress />} color="#5A29E4" value={70} />

                            {/* Backend */}
                            <Skill name="Node.js" icon={<FaNodeJs />} color="#68A063" value={75} />
                            <Skill name="Express.js" icon={<SiExpress />} color="#661a1a" value={80} />
                            <Skill name="JWT Auth" icon={<SiExpress />} color="#FF4500" value={70} />
                            <Skill name="bcrypt.js" icon={<SiExpress />} color="#333" value={65} />

                            {/* Databases */}
                            <Skill name="MongoDB" icon={<SiMongodb />} color="#47A248" value={75} />
                            <Skill name="PostgreSQL" icon={<SiPostgresql />} color="#336791" value={75} />
                            <Skill name="Drizzle ORM" icon={<SiDrizzle />} color="#00A86B" value={70} />
                            <Skill name="Mongoose" icon={<SiMongodb />} color="#4DB33D" value={70} />

                            {/* Cloud & DevOps */}
                            <Skill name="Docker" icon={<FaDocker />} color="#0db7ed" value={75} />
                            <Skill name="Microsoft Azure" icon={<SiMicrosoftazure />} color="#0078D4" value={65} />

                            {/* AI & Data */}
                            <Skill name="Machine Learning" icon={<SiNumpy />} color="#FF6F00" value={70} />
                            <Skill name="Deep Learning" icon={<SiPandas />} color="#150458" value={70} />
                            <Skill name="Vision-Language Models" icon={<SiPandas />} color="#8A2BE2" value={65} />
                            <Skill name="NumPy" icon={<SiNumpy />} color="#013243" value={80} />
                            <Skill name="Pandas" icon={<SiPandas />} color="#150458" value={80} />

                            {/* Core CS */}
                            <Skill name="Data Structures & Algorithms" icon={<SiExpress />} color="#FF6347" value={85} />
                            <Skill name="OOP" icon={<SiExpress />} color="#4682B4" value={80} />
                            <Skill name="DBMS" icon={<SiExpress />} color="#2E8B57" value={75} />
                            <Skill name="Operating Systems" icon={<SiExpress />} color="#708090" value={70} />
                            <Skill name="Computer Networks" icon={<SiExpress />} color="#8B0000" value={70} />
                            <Skill name="System Design" icon={<SiExpress />} color="#FFD700" value={75} />

                            {/* Tools */}
                            <Skill name="GitHub" icon={<FaGithub />} color="#333" value={70} />
                            <Skill name="VS Code" icon={<SiExpress />} color="#007ACC" value={80} />

                            {/* Distributed Systems */}
                            <Skill name="Apache Kafka" icon={<SiApachekafka />} color="#000000" value={70} />
                            <Skill name="Redis" icon={<SiRedis />} color="#DC382D" value={75} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const Skill = ({ name, icon, color, value }) => (
    <div className='flex flex-col gap-3 justify-center items-center'>
        <div className="radial-progress" style={{ "--value": value, color }} role="progressbar">
            {value}%
        </div>
        <div className='flex items-center gap-3'>
            <p>{name}</p>
            <span style={{ color }}>{icon}</span>
        </div>
    </div>
);

export default Skills;
