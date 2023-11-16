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
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam.',
        link: '/',
        github: '/'
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam.',
        link: '/',
        github: '/'
    },
    {
        image: '/work/2.png',
        category: 'next js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam.',
        link: '/',
        github: '/'
    },
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam.',
        link: '/',
        github: '/'
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam.',
        link: '/',
        github: '/'
    },
    {
        image: '/work/2.png',
        category: 'next js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam.',
        link: '/',
        github: '/'
    },
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam.',
        link: '/',
        github: '/'
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
                        {projectData.slice(0, 5).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
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