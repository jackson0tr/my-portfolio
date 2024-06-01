import React from "react";
import ServicesCard from "./ServicesCard";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}

const Services = () => {
    return (
        <div className="pt-[5rem] pb-[3rem] " id="services">
            <motion.div variants={container} animate="visible" initial="hidden">
                <motion.div variants={item}>

                    <div className="text-center">
                        <h1 className="heading_sec">My Services</h1>
                        <p className="heading_mini">Check My <span className="text-priamry">Services</span></p>
                    </div>
                </motion.div>
                <motion.div variants={item}>

                    <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
                        <div>
                            <ServicesCard
                                title='Frontend Development'
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
                </motion.div>

            </motion.div>
        </div>
    );
}

export default Services;