import { EnvelopeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] bg-[#212428] ">
            <div className=" w-[80%] mx-auto gap-[2rem] border-b-[1.4px] pb-5 border-custom_skill border-opacity-40 ">
                <div>
                    <div className="font-logo text-white text-[18px] ">
                        <span className="text-[30px] md:text-[40px] text-primary">Mahmoud Mohamed</span>
                    </div>
                    <div className="flex items-center mt-[1rem] space-x-2">
                    <Link href={`mailto:dev.mahmoudmohamed@gmail.com`}>
                        <EnvelopeIcon className="w-[1rem] h-[1rem] text-primary " />
                        <p className=" text-primary underline font-semibold ">dev.mahmoudmohamed@gmail.com</p>
                    </Link>
                    </div>
                    <div className="flex items-center mt-[1rem] space-x-2">
                    <Link href='https://www.linkedin.com/in/mahmoudmohamed0tr'>
                        <FaLinkedin className="w-[1rem] h-[1rem] text-primary " />
                        <p className=" text-primary underline font-semibold ">Mahmoud Mohamed</p>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70 ">
                &#169; Copyright Mahmoud Mohamed 2024
            </div>
        </div>
    )
}

export default Footer