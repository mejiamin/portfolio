import { Metadata } from "next"
import Projects from "@/src/components/Projects"

export const metadata: Metadata = {
  title: "Проекты",
}

export default function  ProjectsPage () {
  return (
    <Projects />
  )
}
