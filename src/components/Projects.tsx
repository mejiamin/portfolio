"use client"

import { ProjectTypes } from "@/src/types"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { SiCss3, SiHtml5, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si"

const projects: ProjectTypes = [
  {
    title: "mejiamin",
    description: "В январе 2026г. создал свой новый портфолио",
    link: "/",
    logo: {
      src: "/logo.svg",
      alt: "Logo meji",
      cn: "object-container bg-second md:p-12 lg:p-16 xl:p-20 hidden md:block",
    },
    image: {
      src: "/mejiamin.jpg",
      alt: "meji",
      cn: "object-cover object-left-top",
    },
    icons: [
      <SiNextdotjs className="text-slate-500" />,
      <SiTypescript className="text-blue-400" />,
      <SiTailwindcss className="text-sky-700" />,
    ]
  },
  {
    title: "meji",
    description: "В июле 2025г. создал свой портфолио",
    link: "https://mejiamin.github.io/meji/",
    logo: {
      src: "/logo-meji.svg",
      alt: "Logo meji",
      cn: "object-container bg-meji-rgb md:p-12 lg:p-16 xl:p-20 hidden md:block",
    },
    image: {
      src: "/meji.jpg",
      alt: "meji",
      cn: "object-cover object-left-top",
    },
    icons: [
      <SiReact className="text-cyan-700" />,
      <SiCss3 className="text-blue-500" />
    ]
  },
  {
    title: "Orange",
    description: "В ноябре 2024г. практиковал мой первый сайт для магазина сантехникой с одной страницей",
    link: "https://mejiamin.github.io/orange/",
    logo: {
      src: "/logo-orange.svg",
      alt: "Logo Orange",
      cn: "object-container bg-orange-rgba md:p-12 lg:p-16 xl:p-20 hidden md:block",
    },
    image: {
      src: "/bg-orange.jpg",
      alt: "Orange",
      cn: "object-cover object-left-top",
    },
    icons: [
      <SiHtml5 className="text-orange-400" />,
      <SiCss3 className="text-blue-500" />,
    ]
  },
]

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" }
      }}
      className="container mx-auto my-8 md:my-10 lg:my-16 xl:my-20 px-1 md:px-4">
      <h2 className='md:hidden text-center mb-4 text-xl font-medium'>Проекты</h2>

      {projects.map((project, index) => (
        <div key={index}>
          <Link href={project.link} target="_blank" className="w-full md:w-3/4 h-[200px] md:h-[140px] lg:h-[180px] xl:h-[220px] md:mx-auto mb-6 md:mb-5 lg:mb-8 xl:mb-12 overflow-hidden flex items-center justify-center border border-gray-700 rounded-xl hover:md:border-none md:hover:scale-[0.98] shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] md:shadow-none hover:md:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:md:shadow-third transition-all duration-300 relative">

            <div className="w-full md:w-1/2 h-full md:hover:-translate-y-full transition-all duration-300">
              <div className="w-full h-full hidden md:block relative">
                <Image
                  src={project.logo.src}
                  alt={project.logo.alt}
                  fill
                  className={project.logo.cn}
                />
              </div>

              <div className="w-full h-full absolute md:relative bg-first md:bg-none opacity-70 md:opacity-100 blur-[3px] md:blur-none">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  className={project.image.cn}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 h-3/4 md:h-5/6 lg:h-3/4 xl:h-4/6 px-4 flex flex-col flex-wrap justify-between items-center md:text-gray-400 absolute md:relative">
              <h2 className="text-lg font-bold sm:text-sm lg:text-base text-center md:font-medium uppercase">{project.title}</h2>
              <p className="text-sm md:text-xs lg:text-sm font-light text-center">{project.description}</p>
              <div className="text-4xl md:text-2xl lg:text-4xl flex gap-3">
                {project.icons.map((icon, index) => (
                  <div key={index}>
                    {icon}
                  </div>
                ))}
              </div>
            </div>

          </Link>
        </div>
      ))}

    </motion.div >
  )
}

export default Projects
