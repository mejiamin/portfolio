import { Metadata } from "next"
import Contacts from "@/src/components/Contacts"

export const metadata: Metadata = {
  title: "Контакты",
}

const ContactsPage = () => {
  return (
    <Contacts />
  )
}

export default ContactsPage
