import React from 'react'
import Nav from './Nav'
import styles from '../styles/Home.module.css'
import Footer from './Footer'
import SideNav from './SideNav'

const Layout = ({children}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Nav toggleSidebar={toggleSidebar} />
      <SideNav toggleSidebar={toggleSidebar} isOpen={isOpen} />
        {children}
      <Footer />
    </>
  )
}

export default Layout
