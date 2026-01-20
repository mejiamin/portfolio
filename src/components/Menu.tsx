import Link from "next/link"
import { links } from "./Navbar"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const stairAnimation = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: "0",
  },
  exit: {
    x: '100vw',
  },
}

const reverseIndex = (index: number) => {
  const totalSteps = 3
  return totalSteps + index - 1
}

const Menu = () => {
  const pathname = usePathname()
  return (
    <div
      className="absolute w-[98%] top-26 left-1 flex flex-col gap-1 z-40"
    >
      {links.map((link, index) => {
        const isActive = pathname === link.href
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="flex items-center justify-center"
          >
            <Link
              href={link.href}

              className={`${isActive && "text-third !bg-first !border-2 border-third"} w-full py-8 text-center text-xl font-bold uppercase text-first bg-third rounded-xl`}
            >
              {link.name}
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}

export default Menu
