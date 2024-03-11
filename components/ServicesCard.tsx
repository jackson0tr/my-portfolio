import { BugAntIcon, CheckIcon, CodeBracketIcon, CodeBracketSquareIcon, CommandLineIcon, CursorArrowRaysIcon, RocketLaunchIcon, ServerIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
    title:string;
    num:string;
    obj1:string;
    obj2:string;
    obj3:string;
    obj4:string;
}

const iconMapping = {
    "01":CommandLineIcon,
    "02":CodeBracketIcon,
    "03":ServerIcon,

}

const ServicesCard = ({title,num,obj1,obj2,obj3,obj4}:Props) => {

    const IconComponent = (iconMapping as Record<string,React.ElementType>)[num] || CommandLineIcon;

    return (
        <div className="custom_bg custom_card z-[100] relative transform text-primary rounded-2xl text-center p-6 shadow-md">
            <IconComponent className='w-[5rem] relative z-[1] mx-auto h-[5rem] text-primary' />
            <h1 className="text-[25px] mt-[.5rem] relative z-[1] text-white ">{title}</h1>
        <div className="mt-[.5rem] space-y-3">
            <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-primary "/>
                <p className="text-[18px] text-primary">{obj1}</p>
            </div>
            <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-primary "/>
                <p className="text-[18px] text-primary">{obj2}</p>
            </div>
            <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-primary "/>
                <p className="text-[18px] text-primary">{obj3}</p>
            </div>
            <div className="flex items-center space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-primary "/>
                <p className="text-[18px] text-primary">{obj4}</p>
            </div>
        </div>
            <p className="text-primary text-[1.6rem] font-bold absolute top-3 right-4 ">{num}</p>
        </div>
    );
}

export default ServicesCard;