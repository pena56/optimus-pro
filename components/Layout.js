import React, { useState } from 'react'
import Nav from './Nav'
import styles from '../styles/Home.module.css'
import Footer from './Footer'
import SideNav from './SideNav'
import ContactModal from './ContactModal'

const Layout = ({children}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isClose, setIsClose] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const toggleContact = () => {
    setIsClose(!isClose)
    setIsOpen(false)
    console.log('Heyy')
  }
  return (
    <>
      <Nav toggleSidebar={toggleSidebar} toggleContact={toggleContact} />
      <ContactModal toggleContact={toggleContact} isClose={isClose} />
      <SideNav toggleSidebar={toggleSidebar} toggleContact={toggleContact} isOpen={isOpen} />
        {children}
      <Footer />
    </>
  )
}

export default Layout
