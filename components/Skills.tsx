import React from "react";
import SkillsCard from "./SkillsCard";

const Skills = () =>{
    return (
        <div className="pt-[5rem] pb-[3rem] " id="skills">
            <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
                <div className="col-span-3">
                    <h1 className="heading_sec">My Skills</h1>
                    <p className="heading_mini">Check My <span className="text-primary">Skills</span></p>
                </div>
                <div className="col-span-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gird-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
                        <div>
                            <SkillsCard image='/images/react.svg' title='React' />
                        </div>
                        <div>
                            <SkillsCard image='/images/js.svg' title='JavaScript' />
                        </div>
                        <div>
                            <SkillsCard image='/images/ts.svg' title='TypeScript' />
                        </div>
                        <div>
                            <SkillsCard image='/images/nextjs.svg' title='Next' />
                        </div>
                        <div>
                            <SkillsCard image='/images/node.svg' title='Node' />
                        </div>
                        <div>
                            <SkillsCard image='/images/tailwind.svg' title='Tailwind' />
                        </div>
                        <div>
                            <SkillsCard image='/images/mongo.svg' title='Mongo' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;