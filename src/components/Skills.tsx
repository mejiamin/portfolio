"use client"

import AnimatedProgressProvider from '@/src/components/AnimatedProgressProvider'
import { SkillTypes } from '@/src/types'
import { easeQuadInOut } from 'd3-ease'
import { motion } from 'framer-motion'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { FaGitAlt, FaJs, FaReact } from 'react-icons/fa'
import { SiCss3, SiHtml5, SiNextdotjs, SiShadcnui, SiTailwindcss, SiTsnode, SiTypescript } from 'react-icons/si'
import { TbBrandFramerMotion } from 'react-icons/tb'

const skillsList: SkillTypes = [
  {
    title: 'HTML',
    img: <SiHtml5 />,
    percent: 90,
    color: 'text-orange-400',
  },
  {
    title: 'CSS',
    img: <SiCss3 />,
    percent: 90,
    color: 'text-blue-500',
  },
  {
    title: 'JavaScript',
    img: <FaJs />,
    percent: 70,
    color: 'text-yellow-500',
  },
  {
    title: 'React.js',
    img: <FaReact />,
    percent: 75,
    color: 'text-cyan-700',
  },
  {
    title: 'Next.js',
    img: <SiNextdotjs />,
    percent: 50,
    color: 'text-slate-500',
  },
  {
    title: 'TypeScript',
    img: <SiTypescript />,
    percent: 40,
    color: 'text-blue-400',
  },
  {
    title: 'TailwindCSS',
    img: <SiTailwindcss />,
    percent: 80,
    color: 'text-sky-700',
  },
  {
    title: 'Git',
    img: <FaGitAlt />,
    percent: 35,
    color: 'text-amber-700',
  },
  {
    title: 'Framer Motion',
    img: <TbBrandFramerMotion />,
    percent: 30,
    color: 'text-fuchsia-300',
  },
  {
    title: 'shadcn/ui',
    img: <SiShadcnui />,
    percent: 30,
    color: 'text-black',
  },
]

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" }
      }}
      className='container mx-auto my-8 md:my-16'
    >
      <h2 className='md:hidden text-center mb-8 text-xl font-medium'>Навыки</h2>
      <div
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 justify-items-center list-none'
      >

        {skillsList.map((skill, index) => (
          <AnimatedProgressProvider
            key={index}
            valueStart={0}
            valueEnd={skill.percent}
            duration={3}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbarWithChildren
                  value={roundedValue}
                  strokeWidth={2}
                  styles={{
                    path: {
                      stroke: `#0092ca`,
                      strokeLinecap: 'round',
                      transition: 'stroke-dashoffset 0.5s ease 0s',
                      // transform: 'rotate(0.25turn)',
                      transformOrigin: 'center center',
                    },
                    trail: {
                      stroke: '#393e46',
                      transformOrigin: 'center center',
                    },
                  }}
                  className='w-36 h-36 md:w-52 md:h-52 relative'
                >
                  <div className={`${skill.color} text-4xl md:text-6xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}>{skill.img}</div>
                  <h2 className={`${skill.color} text-xs md:text-base font-bold absolute top-[28px] md:top-[45px]`}>{skill.title}</h2>
                  <p className='text-fourth text-xs md:text-sm font-bold absolute top-[100px] md:top-[150px]'>{roundedValue}%</p>
                </CircularProgressbarWithChildren>
              )
            }}
          </AnimatedProgressProvider>
        ))}

      </div >
    </motion.div>
  )
}

export default Skills
