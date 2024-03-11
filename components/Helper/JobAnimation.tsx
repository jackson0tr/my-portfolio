import React from "react";
import { TypeAnimation } from "react-type-animation";

const JobAnimation = () => {
    return(
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Full Stack Dev',
        1000,
        'MERN Stack Dev',
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] text-white font-bold"
      repeat={Infinity}
    />
    )
}

export default JobAnimation;