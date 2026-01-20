"use client"

import { ContactTypes } from "@/src/types"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaTelegramPlane } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"

const contacts: ContactTypes = [
  {
    href: "tel:+79640702455",
    target: "_self",
    icon: <FaPhone className="w-11 h-11 md:w-14 md:h-14 text-gray-500" />,
    name: "+7 (964) 070-24-55",
    span: "Свяжитесь через SMS или WhatsApp",
  },
  {
    href: "https://t.me/mejiamin",
    target: "_blank",
    icon: <FaTelegramPlane className="w-11 h-11 md:w-14 md:h-14 text-[#0088cc]" />,
    name: "@mejiamin",
    span: "",
  },
  {
    href: "https://github.com/mejiamin",
    target: "_blank",
    icon: <FaGithub className="w-11 h-11 md:w-14 md:h-14 text-black" />,
    name: "github.com/mejiamin",
    span: "",
  },
]

const Contacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" }
      }}
      className="container mx-auto my-8 md:my-10 lg:my-16 flex flex-col justify-center items-center gap-5 lg:gap-8 xl:gap-10"
    >
      <h2 className='md:hidden text-center -mb-1 text-xl font-medium'>Контакты</h2>

      {contacts.map((contact, index) => (
        <Link
          key={index}
          href={contact.href}
          target={contact.target}
          className="w-5/6 md:w-4/6 xl:w-2/4 p-5 md:py-6 md:px-8 flex justify-start items-center gap-4 md:gap-8 bg-second/15 border-second/30 rounded-lg hover:md:shadow-lg hover:md:shadow-third hover:md:scale-[0.98] transition-all duration-300"
        >
          {contact.icon}
          <h3 className="w-full flex-grow-[1] text-xs sm:text-sm md:text-xl">{contact.name}</h3>
          <span className="w-40 sm:w-56 xl:w-60 flex-grow-0 text-[8px] sm:text-[10px] md:text-xs xl:text-sm text-gray-400">{contact.span}</span>
        </Link>
      ))}
    </motion.div>
  )
}

export default Contacts
