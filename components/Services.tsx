import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] " id="services">
            <div className="text-center">
                <h1 className="heading_sec">My Services</h1>
                <p className="heading_mini">Check My <span className="text-priamry">Services</span></p>
            </div>
            <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
                <div>
                    <ServicesCard 
                    title='Fronted Development' 
                    num='01' 
                    obj1="Professional Design" 
                    obj2="Responsive Screens" 
                    obj3="User Friendly" 
                    obj4="Better for UI/UX" 
                    />
                </div>
                <div>
                    <ServicesCard 
                    title='Backend Development'
                     num='02' 
                     obj1="Extra Security" 
                     obj2="SSL Integration" 
                     obj3="Server Side Rendering" 
                     obj4="Fire Base" 
                     />
                </div>
                <div>
                    <ServicesCard 
                    title='SEO & Deploy ' 
                    num='03' 
                    obj1="SEO Friendly" 
                    obj2="Google Analytics" 
                    obj3="Google Search Console" 
                    obj4="Fasting Search" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Services;