import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (

        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='w-full flex justify-center items-center mt-10 md:mt-16 lg:mt-32 mb-20'>
                <div className='md:w-[85%]'>
                    <div className="flex gap-5 justify-evenly items-center flex-wrap">
                        <div className='w-[140px] md:w-[200px] h-[80px] md:h-[100px] flex items-center justify-center flex-col rounded-lg bg-transparent shadow-md shadow-slate-900 hover:bg-transparent hover:shadow-inner hover:shadow-slate-900'>
                            <span className='text-xl md:text-3xl text-[#CB9DF0] dark:text-[#8f2bdf]'>
                                {counterOn && <CountUp end={20} duration={3} />}
                                <span>+</span>
                            </span>
                            <span className='text-lg md:text-xl'>Projects</span>
                        </div>
                        <div className='w-[140px] md:w-[200px] h-[80px] md:h-[100px] flex items-center justify-center flex-col rounded-lg bg-transparent shadow-md shadow-slate-900 hover:bg-transparent hover:shadow-inner hover:shadow-slate-900'>
                            <span className='text-xl md:text-3xl text-[#CB9DF0] dark:text-[#8f2bdf]'>
                                {counterOn && <CountUp end={10} duration={3} />}
                                <span>+</span>
                            </span>
                            <span className='text-lg md:text-xl'>Awards</span>
                        </div>
                        <div className='w-[140px] md:w-[200px] h-[80px] md:h-[100px] flex items-center justify-center flex-col rounded-lg bg-transparent shadow-md shadow-slate-900 hover:bg-transparent hover:shadow-inner hover:shadow-slate-900'>
                            <span className='text-xl md:text-3xl text-[#CB9DF0] dark:text-[#8f2bdf]'>
                                {counterOn && <CountUp end={5} duration={3} />}
                                <span>+</span>
                            </span>
                            <span className='text-lg md:text-xl'>Certifications</span>
                        </div>
                        {/* <div className='w-[140px] md:w-[200px] h-[80px] md:h-[100px] flex items-center justify-center flex-col rounded-lg bg-transparent shadow-md shadow-slate-900 hover:bg-transparent hover:shadow-inner hover:shadow-slate-900'>
                            <span className='text-xl md:text-3xl text-[#CB9DF0] dark:text-[#8f2bdf]'>
                                {counterOn && <CountUp end={1} duration={1} />}
                                <span></span>
                            </span>
                            <span className='text-lg md:text-xl'>Internship</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </ScrollTrigger>

    )
}

export default Counter