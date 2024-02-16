'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'THE CHOSEN FIELD',
        description: 'EdTech platform designed to reshape the landscape of education by seamlessly integrating technology.',
        link: 'https://thechosenfield.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/THE-CHOSEN-FIELD'
    },
    {
        image: '/work/2.png',
        category: 'mern',
        name: 'Ecocart',
        description: 'An E-Commerce website project that redefines online shopping with a commitment.',
        link: 'https://ecocart.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/E-Commerce-A-vertual-try-on-solution'
    },
    {
        image: '/work/3.png',
        category: 'mern',
        name: 'Blog Website',
        description: 'A cutting-edge tech blog website project dedicated to unraveling the mysteries of the digital frontier.',
        link: 'https://techblogger.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/Tech-Blog__MERN-Tailwind'
    },
    {
        image: '/work/4.png',
        category: 'Node js',
        name: 'Chat Webapp',
        description: 'A dynamic group chat website designed to bring people together through engaging communication.',
        link: 'https://g-chat-n0y2.onrender.com/',
        github: 'https://github.com/Ramanuj-1729/G-Chat'
    },
    {
        image: '/work/5.png',
        category: 'mern',
        name: 'OTT Subsription Webapp',
        description: 'An OTT Subscription WebApp that redefines the way you experience movies and TV shows.',
        link: 'https://ottsubscription.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/richpanel-stripe-webapp'
    },
    {
        image: '/work/6.png',
        category: 'react js',
        name: 'Digital Wall',
        description: 'Digital wall allows you to write and share your notes, thoughts, blogs, and valuable insights with the world',
        link: 'https://digitalnoteswall.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/digital_wall'
    },
    {
        image: '/work/7.png',
        category: 'mern',
        name: 'Apna Helper',
        description: 'Apna Helper is a website for the people who want help to do their daily basis tasks.',
        link: 'https://apnahelper.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/Apna_Helper'
    },
    {
        image: '/work/8.png',
        category: 'javascript',
        name: 'Calculator',
        description: 'Calculator for hassle-free and efficient calculations.',
        link: 'https://calculator-by-ramanuj.netlify.app/',
        github: 'https://github.com/Ramanuj-1729/calculator'
    },
    {
        image: '/work/9.png',
        category: 'html css',
        name: 'Auth Form',
        description: 'Auth form for simplifying the user authentication process with seamless sign-in and signup forms.',
        link: 'https://singlepageform.netlify.app/',
        github: 'https://github.com/Ramanuj-1729/sign-in-sign-up'
    },
    {
        image: '/work/10.png',
        category: 'next js',
        name: 'Portfolio Website',
        description: 'A portfolio website project designed to elevate personal or professional brand. ',
        link: 'https://ramanuj.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/portfolio'
    },
]

// remove category duplicates
const uniqueCategories = ['all projects', ...new Set(projectData.map(item => item.category))];

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects');
    const filteredProjects = projectData.filter((project)=>{
        return category === 'all projects' ? project : project.category === category;
    });


    return (
        <section className='min-h-screen pt-12'>
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
                {/* tabs */}
                <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
                    <TabsList className="w-full grid h-full py-3 px-5 md:grid-cols-7 mb-12 mx-auto md:border dark:border-none">
                        {categories.map((category, index) => {
                            return <TabsTrigger onClick={()=>setCategory(category)} value={category} className="capitalize w-[162px] md:w-auto" key={index}>{category}</TabsTrigger>
                        })}
                    </TabsList>
                    {/* tabs content */}
                    <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {filteredProjects.map((project, index)=> {
                            return (
                                <TabsContent value={category} key={index}>
                                    <ProjectCard project={project} />
                                </TabsContent>
                            )
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    );
}

export default Projects;