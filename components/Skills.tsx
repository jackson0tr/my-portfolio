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
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:gird-cols-3 xl:grid-cols-4 gap-[1rem] items-center">
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
                        <div>
                            <SkillsCard image='/images/bootstrap.svg' title='Bootstrap' />
                        </div>
                        <div>
                            <SkillsCard image='/images/aws.svg' title='AWS' />
                        </div>
                        <div>
                            <SkillsCard image='/images/prisma.svg' title='Prisma' />
                        </div>
                        <div>
                            <SkillsCard image='/images/redis.svg' title='Redis' />
                        </div>
                        <div>
                            <SkillsCard image='/images/sass.svg' title='SASS' />
                        </div>
                        <div>
                            <SkillsCard image='/images/redux.svg' title='Redux' />
                        </div>
                        <div>
                            <SkillsCard image='/images/express.svg' title='Express' />
                        </div>
                        <div>
                            <SkillsCard image='/images/nestjs.svg' title='Nest' />
                        </div>
                        <div>
                            <SkillsCard image='/images/docker.svg' title='Docker' />
                        </div>
                        <div>
                            <SkillsCard image='/images/github.svg' title='Github' />
                        </div>
                        <div>
                            <SkillsCard image='/images/git.svg' title='Git' />
                        </div>
                        <div>
                            <SkillsCard image='/images/jira.svg' title='Jira' />
                        </div>
                        <div>
                            <SkillsCard image='/images/postman.svg' title='Postman' />
                        </div>
                        <div>
                            <SkillsCard image='/images/material-ui.svg' title='MUI' />
                        </div>
                        <div>
                            <SkillsCard image='/images/cloudinary.svg' title='Cloudinary' />
                        </div>
                        <div>
                            <SkillsCard image='/images/graphql.svg' title='GraphQL' />
                        </div>
                        <div>
                            <SkillsCard image='/images/sequelize.svg' title='Sequelize' />
                        </div>
                        <div>
                            <SkillsCard image='/images/mysql.svg' title='MySQL' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;