import React from 'react';
import ProjectsCard from './ProjectsCard';

const Projects = () =>{
    return (
        <div className='pt-[5rem] pb-[3rem]' id='projects'>
            <div className="text-center">
                <p className="heading_mini">Recent Work</p>
                <h1 className="heading_sec">
                    My <span className='text-primary'>Projects</span>
                </h1>
            </div>
            <ProjectsCard title='US News' tech1='React' tech2='Redux' tech3='Express' 
            tech4="Mongo" tech5='tailwind' tech6='Node' image='/images/modfiy-65ec8e3f0256a.webp'
            caption="US News it's a biggest newsletter in texas. Has founded by DEV/ Mahmoud Mohamed, 
            To create his project newsletter and put it in protfolio. There is Admin dashboard"
            url='https://blog-44.vercel.app/' />

            <ProjectsCard title='Bonic' tech1='React' tech2='Sass' tech3='i18next' image='/images/bonic-65ecacaee63e4.webp'
            caption="Bonic an agency website landing page and blog page with two languages Arabic and English "
            url='https://bonic.vercel.app/' tech4={''} tech5={''} tech6={''} />

            <ProjectsCard title='E-commerce' tech1='React' tech2='Redux' tech3='Sass' tech4='PayPal' image='/images/e-commerce-65ecacaf9d904.webp'
            caption="An e-commerce website created with react and paypal payment method"
            url='https://e-commerce-neon-five.vercel.app/' tech5={''} tech6={''} />
        </div>
    );
}

export default Projects;