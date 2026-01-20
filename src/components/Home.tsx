"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" }
      }}
      className="container mx-auto"
    >
      <div
        className="px-4 md:px-0 md:mt-24 lg:mt-36 2xl:mt-44 flex flex-col-reverse justify-center items-center md:flex-row md:items-center md:justify-between"
      >
        <div
          className="md:w-1/2 h-1/2 mt-10 md:mt-0 md:p-0 flex flex-col justify-center text-sm lg:text-base xl:text-xl md:text-center z-10"
        >
          <h2 className="mb-5 text-3xl md:mb-9 md:mt-0 lg:text-4xl xl:text-5xl uppercase text-outline-first font-bold text-center">Магомед-Амин Мишиев</h2>
          <p className="mb-2 md:mb-2 text-center">Фронтенд-разработчик | React, Next.js, TypeScript.</p>
          <p className="text-center">Создаю удобные пользовательские интерфейсы.</p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 0.4, ease: "easeInOut" }
          }}
          className="w-[35%] md:w-1/2 h-1/2 relative mix-blend-multiply mt-10 mb-3 md:mt-0"
        >
          <Image
            src="/image-header.png"
            width={400}
            height={400}
            alt="Header Image"
            className="w-full md:w-1/2 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:mx-auto -scale-x-100 object-cover object-left-top aspect-square rounded-full -rotate-[20deg]"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Home

