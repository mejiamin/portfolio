// links
type LinksTypes = {
  href: string
  name: string
  cn: string
}
export type LinkTypes = LinksTypes[]

// skills
type SkillsTypes = {
  title: string
  img: React.ReactNode
  percent: number,
  color: string
}
export type SkillTypes = SkillsTypes[]

// projects
type ProjectsTypes = {
  title: string
  description: string
  link: string
  logo: Record<string, string>,
  image: Record<string, string>,
  icons: React.ReactNode[]
}
export type ProjectTypes = ProjectsTypes[]

// contacts
type ContactsTypes = {
  href: string
  target: string
  icon: React.ReactNode
  name: string
  span: string
}
export type ContactTypes = ContactsTypes[]
