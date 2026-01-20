import { Metadata } from "next"
import Skills from "@/src/components/Skills"

export const metadata: Metadata = {
  title: "Навыки",
}

export default function SkillsPage() {
  return (
    <Skills />
  )
}
