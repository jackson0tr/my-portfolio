import Image from "next/image";
import React from "react";

interface Props{
    title:string;
    tech1:string;
    tech2:string;
    tech3:string;
    tech4:string;
    tech5:string;
    tech6:string;
    caption:string;
    image:string;
    url:string;
}

const ProjectsCard = ({title,tech1,tech2,tech3,tech4,tech5,tech6,caption,image,url}:Props) => {
    return (
        <div className="grid gird-cols-1 w-[80%] mx-auto pt-[5rem] lg:grid-cols-2 gap-10 items-center">
            <div className="p-4 rounded-xl relative cursor-pointer hover:-rotate-6 transform transition-all
             duration-200 custom_skill shadow-md">
                <a href={url}>
                <Image 
                src={`${image}`} 
                alt={title} 
                width={500} 
                height={500} 
                className="object-contain rounded-xl mx-auto shadow-md " />
                </a>
            </div>
            <div>
                <h1 className="text-[25px] text-white">{title}</h1>
                <p className="text-white opacity-65 text-[15px] mt-[1rem]">
                    {caption}
                </p>
                <div className="grid mt-[1.3rem] grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-[2rem]">
                    <h1 className="px-6 py-3 custom_skill text-primary rounded-lg text-center">{tech1}</h1>
                    <h1 className="px-6 py-3 custom_skill text-primary rounded-lg text-center">{tech2}</h1>
                    <h1 className="px-6 py-3 custom_skill text-primary rounded-lg text-center">{tech3}</h1>
                    <h1 className="px-6 py-3 custom_skill text-primary rounded-lg text-center">{tech4}</h1>
                    <h1 className="px-6 py-3 custom_skill text-primary rounded-lg text-center">{tech5}</h1>
                    <h1 className="px-6 py-3 custom_skill text-primary rounded-lg text-center">{tech6}</h1>
                <button className="relative btn flex h-[50px] w-40 items-center justify-center font-semibold
                    overflow-hidden bg-primary text-white shadow-2xl transition-all before:duration-500 before:absolute 
                    before:h-0 before:w-0 before:rounded-full hover:text-primary before:bg-[#c4cfde] before:ease-out hover:before:h-56 hover:before:w-56">
                    <a href={url} className="relative z-10 no-underline">Live Demo</a>
                </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectsCard;