import React from 'react'
import Nav from './Nav'
import styles from '../styles/Home.module.css'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <Nav />
      
        {children}
      <Footer />
    </>
  )
}

export default Layout
