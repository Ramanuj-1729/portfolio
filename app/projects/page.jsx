'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
        id: 1,
        image: '/work/melody-masterclass.png',
        category: 'next js',
        name: 'Melody Masterclass',
        description: 'Dive into our comprehensive music courses and transform your musical jourey today.',
        link: 'https://melodymasterclass.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/Melody-Masterclass',
        alt: 'Melody Masterclass'
    },
    {
        id: 2,
        image: '/work/the-chosen-field.png',
        category: 'react js',
        name: 'THE CHOSEN FIELD',
        description: 'EdTech platform designed to reshape the landscape of education by seamlessly integrating technology.',
        link: 'https://thechosenfield.org/',
        github: 'https://github.com/Ramanuj-1729/THE-CHOSEN-FIELD',
        alt: 'The Chosen Field'
    },
    {
        id: 3,
        image: '/work/ramanuj-portfolio.png',
        category: 'next js',
        name: 'Portfolio Website',
        description: 'A portfolio website project designed to elevate personal or professional brand. ',
        link: 'https://ramanuj.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/portfolio',
        alt: 'Portfolio Website'
    },
    {
        id: 4,
        image: '/work/e-commerce.png',
        category: 'react js',
        name: 'Ecocart',
        description: 'An E-Commerce website project that redefines online shopping with a commitment.',
        link: 'https://ecocart.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/E-Commerce-A-vertual-try-on-solution',
        alt: 'Ecocart'
    },
    {
        id: 5,
        image: '/work/e-commerce-api.png',
        category: 'API',
        name: 'E-Commerce API',
        description: 'Streamline e-commerce operations with our versatile API integration solutions.',
        link: 'https://frantic-kerchief-slug.cyclic.app/api/v1/products',
        github: 'https://github.com/Ramanuj-1729/E-Commerce/tree/master/backend',
        alt: 'E-Commerce API'
    },
    {
        id: 6,
        image: '/work/fresh-meal.png',
        category: 'HTML CSS JS',
        name: 'Fresh Meal',
        description: 'Fresh meals delivered to your door: convenient, delicious, nutritious.',
        link: 'https://fresh-food-web.netlify.app/',
        github: 'https://github.com/Ramanuj-1729/Fresh-Meal',
        alt: 'Fresh Meal'
    },
    {
        id: 7,
        image: '/work/tech-blog.png',
        category: 'react js',
        name: 'Blog Website',
        description: 'A cutting-edge tech blog website project dedicated to unraveling the mysteries of the digital frontier.',
        link: 'https://techblogger.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/Tech-Blog__MERN-Tailwind',
        alt: 'Blog Website'
    },
    {
        id: 8,
        image: '/work/g-chat.png',
        category: 'node js',
        name: 'Chat Webapp',
        description: 'A dynamic group chat website designed to bring people together through engaging communication.',
        link: 'https://g-chat-n0y2.onrender.com/',
        github: 'https://github.com/Ramanuj-1729/G-Chat',
        alt: 'Chat Webapp'
    },
    {
        id: 9,
        image: '/work/ott-payment-gateway.png',
        category: 'react js',
        name: 'OTT Subsription Webapp',
        description: 'An OTT Subscription WebApp that redefines the way you experience movies and TV shows.',
        link: 'https://ottsubscription.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/richpanel-stripe-webapp',
        alt: 'OTT Subsription Webapp'
    },
    {
        id: 10,
        image: '/work/digital-wall.png',
        category: 'react js',
        name: 'Digital Wall',
        description: 'Digital wall allows you to write and share your notes, thoughts, blogs, and valuable insights with the world',
        link: 'https://digitalnoteswall.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/digital_wall',
        alt: 'Digital Wall'
    },
    {
        id: 11,
        image: '/work/apna-helper.png',
        category: 'react js',
        name: 'Apna Helper',
        description: 'Apna Helper is a website for the people who want help to do their daily basis tasks.',
        link: 'https://apnahelper.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/Apna_Helper',
        alt: 'Apna Helper'
    },
    {
        id: 12,
        image: '/work/calculator.png',
        category: 'HTML CSS JS',
        name: 'Calculator',
        description: 'Calculator for hassle-free and efficient calculations.',
        link: 'https://calculator-by-ramanuj.netlify.app/',
        github: 'https://github.com/Ramanuj-1729/calculator',
        alt: 'Calculator'
    },
    {
        id: 13,
        image: '/work/signin-signup-form.png',
        category: 'HTML CSS JS',
        name: 'Auth Form',
        description: 'Auth form for simplifying the user authentication process with seamless sign-in and signup forms.',
        link: 'https://singlepageform.netlify.app/',
        github: 'https://github.com/Ramanuj-1729/sign-in-sign-up',
        alt: 'Auth Form'
    },
    {
        id: 14,
        image: '/work/tech-blog-api.png',
        category: 'API',
        name: 'Tech Blog API',
        description: 'Access the latest tech insights seamlessly with our innovative blog API.',
        link: 'https://techblog-api-xktm.onrender.com/api/posts',
        github: 'https://github.com/Ramanuj-1729/tech-blog-api',
        alt: 'Tech Blog API'
    }
]

// remove category duplicates
const uniqueCategories = ['all projects', ...new Set(projectData.map(item => item.category))];

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects');
    const filteredProjects = projectData.filter((project) => {
        return category === 'all projects' ? project : project.category === category;
    });


    return (
        <section className='min-h-screen pt-12'>
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
                {/* tabs */}
                <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
                    <TabsList className="w-full grid h-full py-3 px-5 md:grid-cols-6 mb-12 mx-auto md:border dark:border-none">
                        {categories.map((category, index) => {
                            return <TabsTrigger onClick={() => setCategory(category)} value={category} className="capitalize w-[162px] md:w-auto" key={index}>{category}</TabsTrigger>
                        })}
                    </TabsList>
                    {/* tabs content */}
                    <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {filteredProjects.map((project) => {
                            return (
                                <TabsContent value={category} key={project.id}>
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