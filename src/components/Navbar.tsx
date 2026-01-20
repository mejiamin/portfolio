"use client"

import Link from "next/link"
import Logo from "./Logo"
import { motion } from "framer-motion"
import { useState } from "react"
import Menu from "./Menu"
import { PiList, PiX } from 'react-icons/pi'
import { usePathname } from "next/navigation"
import { LinkTypes } from "../types"

export const links: LinkTypes = [
  { href: "/", name: "Главная", cn: 'md:hidden' },
  { href: "/skills", name: "Навыки", cn: '' },
  { href: "/projects", name: "Проекты", cn: '' },
  { href: "/contacts", name: "Контакты", cn: '' },
]

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const pathname = usePathname()

  return (
    <div className="relative z-50">
      <motion.header className="p-2 md:px-6 bg-second font-primary shadow-xl rounded-xl m-1 md:m-2 lg:m-3"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1
          }
        }}
      >
        <div className="container mx-auto h-20 flex justify-between items-center p-2 md:p-3 lg:p-4">

          <Link href="/"><Logo /></Link>

          <div className="hidden md:flex items-center gap-2 lg:gap-8 md:space-x-2">
            {links.map((link, index) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`${link.cn} ${isActive && "text-outline-hover border-l-8 border-b-8 border-third -rotate-12 -translate-y-[7px]"} mt-2 px-4 pb-2 md:text-md lg:text-xl xl:text-2xl uppercase font-extralight lg:font-extrabold text-transparent text-outline hover:text-outline-hover hover:border-l-8 hover:border-b-8 hover:border-third hover:-rotate-12 hover:-translate-y-[7px] transition-all duration-300`
                  }
                  replace
                >
                  {link.name}
                </Link>
              )
            })}

          </div>

          <button className="md:hidden transition-all duration-75 active:-rotate-45" onClick={() => setMenu(prev => !prev)}>
            {menu
              ? <PiX className="w-7 h-7 text-third" />
              : <PiList className="w-7 h-7 text-third" />
            }
          </button>
        </div>
      </motion.header >

      {menu && (
        <div>
          <Menu />
        </div>
      )}
    </div >
  )
}

export default Navbar
