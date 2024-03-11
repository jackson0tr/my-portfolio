import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const About = () => {
    return(
        <div className="mt-[-4rem]  pb-[3rem]" id="about">
            <div className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem] ">
                <div>
                    <p className="heading_mini">About Me</p>
                    <h1 className="heading_sec">Professional Web Developer <span className="text-primary">MERN Stack</span></h1>
                    <p className="text-[15px] mt-[1.3rem] text-white opacity-75"> 
                        Hello, Iam Mahmoud Mohamed. Iam a Web Developer <span className="text-[16px] md:text-[18px] text-primary">
                        MERN Stack</span> Developer. Iam 20 years old.
                        I can create a customize website using my skills.
                        I studying at Canadian International College.
                    </p>
                    <div className="mt-[2rem] space-y-3">
                        <div className="flex items-end space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-primary "/>
                            <p className="text-[18px] text-white">Frontend Development</p>
                        </div>
                        <div className="flex items-end space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-primary "/>
                            <p className="text-[18px] text-white">Backend Development</p>
                        </div>
                        <div className="flex items-end space-x-4">
                            <CheckIcon className="w-[2rem] h-[2rem] text-primary "/>
                            <p className="text-[18px] text-white">MERN Stack Development</p>
                        </div>
                    </div>
                </div>
                <div className="lg:ml-auto">
                    <div className="grid gird-cols-1 sm:grid-cols-2 items-center gap-[2rem] ">
                        <div className="p-6 text-center bg-[#3582c4]">
                            <p className="text-[50px] text-white font-bold">+2</p>
                            <p className="text-[20px] text-white font-600">
                                Years Experience
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;