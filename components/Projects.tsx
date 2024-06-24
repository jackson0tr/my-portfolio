import React from 'react';
import ProjectsCard from './ProjectsCard';

const Projects = () =>{
    return (
        <div className='pt-[5rem] pb-[3rem]' id='projects'>
            <div className="text-center">
                <h1 className="heading_sec">
                    My <span className='text-primary'>Projects</span>
                </h1>
                <p className="heading_mini">Recent Work</p>
            </div>
            <ProjectsCard title='Dotte' tech1='React' tech2='Redux' tech3='Express' 
            tech4="Mongo" tech5='Tailwind' tech6='Node' image='/images/home-6679ff3abc9a0.webp'
            caption="Dotte is an E-Commerce Website. Has founded by DEV/ Mahmoud Mohamed,There is Admin, User and Seller dashboard"
            url='https://dotte.vercel.app' />

            <ProjectsCard title='US News' tech1='React' tech2='Redux' tech3='Express' 
            tech4="Mongo" tech5='Tailwind' tech6='Node' image='/images/modfiy-65ec8e3f0256a.webp'
            caption="US News it's a biggest newsletter in texas. Has founded by DEV/ Mahmoud Mohamed, 
            To create his project newsletter and put it in protfolio. There is Admin dashboard"
            url='https://blog-44.vercel.app' />

            <ProjectsCard title='Bonic' tech1='React' tech2='Sass' tech3='i18next' 
            tech4='OOP' tech5='Dark Mode' image='/images/bonic-65ecacaee63e4.webp' 
            caption="Bonic an agency website landing page and blog page with two languages Arabic and English "
            url='https://bonic.vercel.app'  tech6='SEO' />

            <ProjectsCard title='E-commerce' tech1='React' tech2='Redux' tech3='Sass' 
            tech4='PayPal' image='/images/e-commerce-65ecacaf9d904.webp' tech5='API'
            caption="An e-commerce website created with react and paypal payment method"
            url='https://e-commerce-neon-five.vercel.app'  tech6='SEO' />
        </div>
    );
}

export default Projects;