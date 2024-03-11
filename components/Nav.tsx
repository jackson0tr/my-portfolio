import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

interface Props {
    showNav:() => void
}

const Nav = ({showNav}:Props)=> {

    const [navSticky,setNavSticky] = useState(false);

    useEffect(()=>{
        const stickyHandler = () =>{
            if(window.scrollY >= 90){
                setNavSticky(true);
            }
            if(window.scrollY <= 90){
                setNavSticky(false);
            }
        }
        window.addEventListener("scroll", stickyHandler);
    },[]);

    const stickyStyle = navSticky?'bg-[#212428] shadow-gray-900 shadow-sm':''

  return (
  <div className={`fixed w-full ${stickyStyle} z-[1000] transition-all duration-300 `}>
    <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
        <div className="font-logo text-white text-[18px]">
            <span className="text-[30px] md:text-[40px] text-primary">Dev/</span>
            Mahmoud Mohamed
        </div>
        <ul className="md:flex hidden items-center space-x-10">
            <li>
                <a className="nav_style" href="#hero">Home</a>
            </li>
            <li>
                <a className="nav_style" href="#about">About</a>
            </li>
            <li>
                <a className="nav_style" href="#services">Services</a>
            </li>
            <li>
                <a className="nav_style" href="#skills">Skills</a>
            </li>
            <li>
                <a className="nav_style" href="#projects">Projects</a>
            </li>
            <li>
                <a className="nav_style" href="#contact">Contact</a>
            </li>
        </ul>
        <Bars3CenterLeftIcon onClick={showNav} className="w-[2.5rem] md:hidden h-[2.3rem] text-white rotate-180"/>
    </div>
  </div>
  );
}

export default Nav