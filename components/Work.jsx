'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectCard from "@/components/ProjectCard";

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
]

const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className="subtitle mb-8">Crafting innovative solutions that blend technology and creativity to redefine user experiences and solve real-world problems.</p>
                    <Link href="/projects"><Button>All Projects</Button></Link>
                </div>
                {/* slider */}
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper className="h-[560px]" slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2, }, }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}>
                        {/* show only the first 4 projects */}
                        {projectData.slice(0, 5).map((project) => {
                            return (
                                <SwiperSlide key={project.id}>
                                    <ProjectCard project={project}></ProjectCard>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Work;