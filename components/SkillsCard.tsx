import React from "react";
import Image from "next/image";

interface Props{
    image:string;
    title:string;
}

const SkillsCard = ({image,title}:Props) => {
    return (
        <div className="p-6 custom_skill hover:custom_bg skill-btn duration-300 transition-all cursor-pointer text-center rounded-lg ">
            <Image src={`${image}`} 
            alt={title} 
            width={60} 
            height={60} 
            className='object-cover mx-auto' />
            <h1 className="text-[18px] mt-[1rem] text-primary font-600">{title}</h1>
        </div>
    );
}

export default SkillsCard;