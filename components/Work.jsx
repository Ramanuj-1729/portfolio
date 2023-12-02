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
        name: 'E-Commerce Webapp',
        description: 'An E-Commerce website project that redefines online shopping with a commitment.',
        link: 'https://ecommerce-lemon-two-34.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/E-Commerce-A-vertual-try-on-solution'
    },
    {
        image: '/work/3.png',
        category: 'mern',
        name: 'Blog Website',
        description: 'A cutting-edge tech blog website project dedicated to unraveling the mysteries of the digital frontier.',
        link: 'https://tech-blog-pi-bay.vercel.app/',
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
        link: 'https://stripe-gateway-one.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/richpanel-stripe-webapp'
    },
    {
        image: '/work/6.png',
        category: 'react js',
        name: 'Digital Wall',
        description: 'Digital wall allows you to write and share your notes, thoughts, blogs, and valuable insights with the world',
        link: 'https://digital-wall-gamma.vercel.app/',
        github: 'https://github.com/Ramanuj-1729/digital_wall'
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