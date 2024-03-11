import React from "react";
import JobAnimation from "./Helper/JobAnimation";

const Hero = () =>{
    return(
        <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh]" id="hero">
            <div className="flex justify-center flex-col mx-auto w-[80%] h-full ">
                <div className="grid grid-cols md:grid-cols-2 gap-[3rem] items-center">
                    <div>
                        <h1 className="text-[#c4cfde] mb-[1.3rem]">My Portfolio</h1>
                        <div>
                            <h1 className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.4rem] text-white">
                                Hi,I'm <span className="text-primary">Mahmoud</span>
                            </h1>
                            <JobAnimation/>
                        </div>
                        <div className="mt-[2rem] flex items-center space-x-6">
                            <button className="relative flex h-[50px] w-40 items-center justify-center font-semibold
                             overflow-hidden bg-primary text-white shadow-2xl transition-all before:duration-500 before:absolute 
                             before:h-0 before:w-0 before:rounded-full hover:text-primary before:bg-[#c4cfde] before:ease-out hover:before:h-56 hover:before:w-56">
                                <a href="#contact" className="relative no-underline z-10">Let's Work</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;