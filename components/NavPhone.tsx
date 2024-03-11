import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
    navActive:Boolean,
    closeNav:()=>void
}

const NavPhone = ({navActive,closeNav}:Props)=> {

    const navOpendAnimation = navActive?"translate-x-0":"translate-x-[-100%]"

  return ( 
    <div>
        <div className={`fixed top-0 ${navOpendAnimation} transform transition-all duration-500 z-[10000] left-0 
                        ring-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh] `}>
        </div>
            <ul className={`text-white fixed ${navOpendAnimation} flex items-center flex-col h-full trasnform transition-all
                    duration-300 delay-300 w-[60%] bg-black space-y-14 z-[10006] justify-center`}>
            <li>
                <a className="nav_style text-[25px] sm:text-[30px] " href="/">Home</a>
            </li>
            <li>
                <a className="nav_style text-[25px] sm:text-[30px] " href="#about">About</a>
            </li>
            <li>
                <a className="nav_style text-[25px] sm:text-[30px] " href="#services">Services</a>
            </li>
            <li>
                <a className="nav_style text-[25px] sm:text-[30px] " href="#skills">Skills</a>
            </li>
            <li>
                <a className="nav_style text-[25px] sm:text-[30px] " href="#projects">Projects</a>
            </li>
            <li>
                <a className="nav_style text-[25px] sm:text-[30px] " href="#contact">Contact</a>
            </li>
            <XMarkIcon onClick={closeNav} className="absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white " />
        </ul>
    </div>
  );
}

export default NavPhone